import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { ChangeLocale } from "./change-locale";
import header from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(header);
  return (
    <>
      <header>
        <div class="logo">
          <a href="/" title="qwik">
            Home
          </a>
          <a href="/translate-function" title="qwik">
            $translate Function
          </a>
        </div>
      </header>
      <ChangeLocale />
    </>
  );
});
