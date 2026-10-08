---
layout: default
title: Corte Laser
nav_order: 3.5
permalink: /corte-laser/
---

# Corte Laser

Esta práctica consistió en realizar un cubo de MDF.

## Diseño de las piezas

Primero diseñamos las piezas del cubo en SolidWorks, midiendo y generando los agujeros requeridos para que las piezas embonaran. SolidWorks es un programa de diseño del tipo CAD que permite modelar piezas.

<figure style="margin: 1.5rem 0;">
  <img src="{{ '/assets/laser-diseno.jpg' | relative_url }}" alt="Tapa del cubo diseñada en SolidWorks, con sus medidas" style="display: block; max-width: 100%; width: 340px; height: auto;" loading="lazy">
  <figcaption style="margin-top: .5rem; font-size: .85rem; color: #6b7280;">Tapa diseñada en SolidWorks.</figcaption>
</figure>

Después de diseñar cada cara del cubo, exportamos el archivo en formato PDF, ya que es uno de los formatos que admite la cortadora láser, y lo guardamos en una USB.

## Proceso de corte

Después fuimos a la cortadora láser, donde el profesor nos explicó cómo usarla y qué procedimiento debíamos seguir:

1. Encender la cortadora con el botón que se encuentra en la parte de atrás.
2. Colocar una tabla de MDF de 3 mm en la cortadora.
3. Insertar la USB en la computadora del laboratorio.
4. Abrir Firefox y entrar a la aplicación web Glowforge.
5. Crear un nuevo diseño y arrastrar los archivos de la USB a la aplicación. Acomodar el dibujo de cada diseño de tal forma que sea posible cortarlos ordenadamente.
6. Abrir el menú y seleccionar la configuración manual. En esta práctica usamos el valor **125 para la velocidad** y activamos la opción de **máxima potencia**.
7. Seleccionar el tipo de material que se está usando y oprimir el botón “Imprimir”.
8. Encender el ventilador antes de presionar el botón azul de inicio de la cortadora.

Después obtuvimos las piezas ya cortadas y armamos el cubo.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 1rem; margin: 1.5rem 0;">
  <figure style="margin: 0;">
    <img src="{{ '/assets/laser-piezas.jpg' | relative_url }}" alt="Piezas de MDF recién cortadas en la cortadora láser" style="display: block; width: 100%; height: 280px; object-fit: contain;" loading="lazy">
    <figcaption style="margin-top: .5rem; font-size: .85rem; color: #6b7280;">Piezas después del corte.</figcaption>
  </figure>
  <figure style="margin: 0;">
    <img src="{{ '/assets/laser-primer-ensamble.jpg' | relative_url }}" alt="Primer ensamble del cubo de MDF" style="display: block; width: 100%; height: 280px; object-fit: contain;" loading="lazy">
    <figcaption style="margin-top: .5rem; font-size: .85rem; color: #6b7280;">Primer ensamble del cubo.</figcaption>
  </figure>
</div>

## Ajustes y resultado

En este punto notamos que las piezas no embonaban del todo, así que medimos para localizar el problema. Resultó que las tapas no encajaban debido a que los lados hacían que cada pestaña de las tapas se recorriera hacia un lado. Entonces volvimos a diseñar las tapas en SolidWorks, ajustando sus medidas, y repetimos el proceso de corte.

<figure style="margin: 1.5rem 0;">
  <img src="{{ '/assets/laser-tapas-ajustadas.jpg' | relative_url }}" alt="Nuevo corte de las tapas con las medidas ajustadas" style="display: block; max-width: 100%; width: 480px; height: auto;" loading="lazy">
  <figcaption style="margin-top: .5rem; font-size: .85rem; color: #6b7280;">Tapas con las medidas ajustadas.</figcaption>
</figure>

Gracias al ajuste que le hicimos, las piezas embonaron sin necesitar forzarlas ni utilizar pegamento. Ahora tenemos el cubo armado.

<figure style="margin: 1.5rem 0;">
  <img src="{{ '/assets/laser-cubo-final.jpg' | relative_url }}" alt="Cubo de MDF terminado después de corregir las medidas" style="display: block; max-width: 100%; width: 340px; height: auto;" loading="lazy">
  <figcaption style="margin-top: .5rem; font-size: .85rem; color: #6b7280;">Cubo terminado.</figcaption>
</figure>

## Conclusión

En conclusión, me gustaría mencionar las distintas cosas que aprendí a lo largo de la práctica:

- Qué es SolidWorks y para qué sirve.
- Cómo se usa.
- Cómo utilizar la cortadora láser.
- Aprendí a identificar errores de medidas en un diseño y a corregirlos con la práctica.

---

## Créditos

Guía de referencia: [Manual para la cortadora láser (PDF)]({{ '/assets/manual-cortadora-laser.pdf' | relative_url }}), de **Alejandro Arellano Cacho**.
