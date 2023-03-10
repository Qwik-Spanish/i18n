import { component$, useTask$, $, useStylesScoped$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import {
  changeLocale,
  SpeakLocale,
  useSpeakConfig,
  useSpeakContext,
  useSpeakLocale,
  $translate as t,
} from 'qwik-speak';
export const ChangeLocale = component$(() => {
  useStylesScoped$(`
      .btn {
        margin: 1rem;
        width: 200px;
        padding: 10px;
        color: whitesmoke;
        background-color: var(--qwik-dark-purple);
      }
    `);
  const loc = useLocation();
  const nav = useNavigate();

  const ctx = useSpeakContext();
  const locale = useSpeakLocale();
  const config = useSpeakConfig();

  // Handle localized routing
  useTask$(async ({ track }) => {
    track(() => loc.params.lang);

    const newLocale =
      config.supportedLocales.find((value) => value.lang === loc.params.lang) ||
      config.defaultLocale;
    if (newLocale.lang !== locale.lang) {
      await changeLocale(newLocale, ctx);
    }
  });

  // Replace locale in URL
  const localizeUrl$ = $(async (newLocale: SpeakLocale) => {
    let pathname = loc.url.pathname;
    if (loc.params.lang) {
      if (newLocale.lang !== config.defaultLocale.lang) {
        pathname = pathname.replace(loc.params.lang, newLocale.lang);
      } else {
        pathname = pathname.replace(
          new RegExp(`(/${loc.params.lang}/)|(/${loc.params.lang}$)`),
          '/'
        );
      }
    } else if (newLocale.lang !== config.defaultLocale.lang) {
      pathname = `/${newLocale.lang}${pathname}`;
    }

    // No full-page reload
    nav(pathname);
  });

  return (
    <div>
      <div>
        {t('app.changeLocale')} ({locale.lang})
      </div>
      {config.supportedLocales.map((value) => (
        <button class='btn' onClick$={async () => await localizeUrl$(value)}>
          {value.lang}
        </button>
      ))}
    </div>
  );
});
