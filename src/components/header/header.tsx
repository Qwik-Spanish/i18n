import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { ChangeLocale } from './change-locale';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <ChangeLocale />
    </header>
  );
});
