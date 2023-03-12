import { component$, $} from '@builder.io/qwik';
import { changeLocale, $translate as t, useSpeakContext, useSpeakConfig, SpeakLocale } from 'qwik-speak';

const ONE_HOUR_SECONDS = 3600;
const ONE_DAY_SECONDS = 24 * ONE_HOUR_SECONDS;      // 86400
const ONE_WEEK_SECONDS = 7 * ONE_DAY_SECONDS;       // 604800
const ONE_MONTH_SECONDS = 30 * ONE_DAY_SECONDS;     // 2592000
const ONE_YEAR_SECONDS = 365 * ONE_DAY_SECONDS;     // 31536000

export const ChangeLocale = component$(() => {
  const ctx = useSpeakContext();
  const config = useSpeakConfig();

  const changeLocale$ = $(async (newLocale: SpeakLocale) => {
    await changeLocale(newLocale, ctx);

    // Almacenamos  
    document.cookie = `locale=${JSON.stringify(newLocale)};max-age=${ONE_WEEK_SECONDS};path=/`;
  });

  return (
    <div>
      <div>{t('app.changeLocale')} ({ctx.locale.lang})</div>
      {config.supportedLocales.map(value => (
        <button onClick$={async () => await changeLocale$(value)}>
          {value.lang}
        </button>
      ))}
    </div>
  );
});