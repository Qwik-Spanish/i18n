import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import {
  $translate as t, // <==== Para ejecutar la traducción de una clave
  Speak,
} from 'qwik-speak';

export const Home = component$(() => {
  useStylesScoped$(`
    span {
      background-color: #d4cfcf
    }
  `)
  return (
    <>
      <h1>{t('app.title')}</h1> (1) 
      <p>Uso de valor por defecto: {t('home.defaultValue@@ESTE ES EL VALOR POR DEFECTO')}</p>
      <p>Coge de la carpeta "app" en el idioma seleccionado y la propiedad <b>title</b></p>
      <p>Esto hará referencia al fichero que generamos posteriormente en <span>public/i18n/_locale_/app.json</span></p>
      <h3>{t('home.intro')}</h3> (2) 
      <p>Coge de la carpeta "home" en el idioma seleccionado y la propiedad <b>intro</b></p>
      <p>Esto hará referencia al fichero que generamos posteriormente en <span>public/i18n/_locale_/home.json</span></p>
    </>
  );
});

export default component$(() => {
  return (
    /**
     * Añadimos los textos relacionado al componente Home
     * (Solo se aplicará en componentes hijos)
     */
    <Speak assets={['home']}>
      <Home />
    </Speak>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
