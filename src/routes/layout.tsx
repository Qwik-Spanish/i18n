import { component$, Slot } from '@builder.io/qwik';
import { loader$, RequestHandler } from '@builder.io/qwik-city';
import { config } from '~/config/speak-i18n';

import Header from '../components/header/header';

export const useServerTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const serverTime = useServerTimeLoader();
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
          <div>{serverTime.value.date}</div>
        </a>
      </footer>
    </>
  );
});

export const onRequest: RequestHandler = ({ request, locale }) => {
  // 1
  const cookie = request.headers?.get('cookie');
  // 2
  const acceptLanguage = request.headers?.get('accept-language');

  let lang: string | null = null;
  // 3
  if (cookie) {
    const result = new RegExp('(?:^|; )' + encodeURIComponent('locale') + '=([^;]*)').exec(cookie);
    if (result) {
      lang = JSON.parse(result[1])['lang'];
    }
  }
  // 4
  if (!lang) {
    if (acceptLanguage) {
      lang = acceptLanguage.split(';')[0]?.split(',')[0];
    }
  }

  // 5
  locale(lang || config.defaultLocale.lang);
};
