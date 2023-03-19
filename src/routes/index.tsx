import { component$ } from '@builder.io/qwik';
import {
  $translate as t, // <==== Para ejecutar la traducción de una clave
  Speak,
} from 'qwik-speak';

export const Home = component$(() => {
  return (
    <>
      <h1>{t('app.title')}</h1> (1) 
      <p>Coge de la carpeta "app" en el idioma seleccionado y la propiedad <b>title</b></p>
      <p>Esto hará referencia al fichero que generamos posteriormente en <span class="code">public/i18n/_locale_/app.json</span></p>
      <h3>{t('home.intro')}</h3> (2) 
      <p>Coge de la carpeta "home" en el idioma seleccionado y la propiedad <b>intro</b></p>
      <p>Esto hará referencia al fichero que generamos posteriormente en <span class="code">public/i18n/_locale_/home.json</span></p>
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