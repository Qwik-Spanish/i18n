import { component$, useSignal } from "@builder.io/qwik";
import {
  $translate,
  Speak,
  $plural,
  formatDate as fDate,
  relativeTime as rTime,
} from "qwik-speak";

export const DefaultValue = component$(() => (
  <>
    <h3>1.- Valor por defecto</h3>
    <p>
      Añadimos un valor por defecto{" "}
      <span class="code">ESTE ES EL VALOR POR DEFECTO</span> dentro de la clave{" "}
      <span class="code">defaultValue</span> en el fichero{" "}
      <span class="code">translate.json</span>{" "}
    </p>
    <p>
      i18n($translate) ={">"} {$translate("translate.defaultValue")}
    </p>
  </>
));

export const Interpolation = component$(() => (
  <>
    <h3>2.- Interpolación</h3>
    <p>
      Añadimos un valor por defecto{" "}
      <span class="code">¡Hola! Me llamo Anartz</span> dentro de la clave{" "}
      <span class="code">greeting</span> en el fichero{" "}
      <span class="code">translate.json</span>{" "}
    </p>
    <p>
      i18n($translate) ={">"}{" "}
      {$translate("translate.greeting@@¡Hola! Me llamo {{name}}", {
        name: "Anartz",
      })}
    </p>
  </>
));
export const ArrayOfKeys = component$(() => (
  <>
    <h3>3.- Array de claves</h3>
    <p>
      Añadimos un valor por defecto{" "}
      <span class="code">["Value 1", "Value 2"]</span> dentro de las claves{" "}
      <span class="code">arrayValue1</span> y{" "}
      <span class="code">arrayValue2</span> en el fichero{" "}
      <span class="code">translate.json</span>{" "}
    </p>
    <p>
      i18n($translate) ={">"}{" "}
      {$translate([
        "translate.arrayValue1@@Value 1",
        "translate.arrayValue2@@Value 2",
      ]).toString()}
    </p>
  </>
));

export const Pluralize = component$(() => (
  <>
    <h3>4.- Pluralización</h3>
    <p>
      Opción para cambiar el string en singular / plural dependiendo del valor.{" "}
      Dentro de la clave <span class="code">devs</span> en el fichero{" "}
      <span class="code">translate.json</span>{" "}
    </p>
    <p>
      i18n($translate) (1) ={">"} {$plural(1, "translate.devs")}
    </p>
    <p>
      i18n($translate) (+1) ={">"} {$plural(20, "translate.devs")}
    </p>
  </>
));

export const FormatDate = component$(() => (
  <>
    <h3>5.- Formato de fecha</h3>
    <p>
      En este caso no se usan las claves en los ficheros que se encuentran en{" "}
      <span class="code">public/i18n</span>
    </p>
    <p>
      Fecha / hora actual completa:{" "}
      {fDate(Date.now(), { dateStyle: "full", timeStyle: "full" })}
    </p>
    <p>
      Fecha actual corta:{" "}
      {fDate(Date.now(), { dateStyle: "short", timeStyle: "short" })}
    </p>
  </>
));

export const RelativeTime = component$(() => (
  <>
    <h3>6.- Tiempo relativo</h3>
    <p>
      En este caso no se usan las claves en los ficheros que se encuentran en{" "}
      <span class="code">public/i18n</span>
    </p>
    <p>Mañana: {rTime(1, "days")}</p>
    <p>Hace 40 días: {rTime(-40, "days")}</p>
    <p>Hace un mes: {rTime(-1, "months")}</p>
  </>
));

export default component$(() => (
  <>
    <h2>$translate function</h2>
    <Speak assets={["translate"]}>
      <DefaultValue /> 
      <Interpolation /> 
      <ArrayOfKeys />
      <Pluralize />
      <FormatDate />
      <RelativeTime />
    </Speak>
  </>
));
