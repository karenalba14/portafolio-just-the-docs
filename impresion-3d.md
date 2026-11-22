  <figure style="margin:0;border:1px solid #8c83a5;border-radius:10px;padding:.75rem;">
    <video controls playsinline preload="metadata" aria-label="Video de la pieza en movimiento" style="display:block;width:100%;max-height:360px;">
      <source src="{{ '/assets/bambu-pieza-en-movimiento.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/assets/bambu-pieza-en-movimiento.mp4' | relative_url }}">Abrir video</a>
    </video>
    <figcaption style="margin-top:.5rem;"><strong>Video de la pieza en movimiento</strong></figcaption>
  </figure>---
layout: default
title: "Impresión 3D"
nav_order: 7
---

# Impresión 3D

[Diseño propio](#diseño-propio) · [Diseño de IA](#diseño-de-ia) · [Conclusiones](#conclusiones)

## Diseño propio

Generaré una impresión de un arco que gira sobre su propio eje, rodeado por una circunferencia.

### A. Proceso de diseño

1. Diseñar la circunferencia y extruirla.
2. Diseñar el arco y hacer sus extrusiones.
3. Diseñar la flecha y hacer sus extrusiones.
4. Diseñar el eje que permitirá que el arco gire.
5. Ajustar las medidas del eje y hacer cortes en la circunferencia para que embone.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:.75rem;margin:1rem 0 1.75rem;">
  <div style="border:1px dashed #8c83a5;border-radius:10px;padding:.9rem;min-height:72px;"><strong>Avance de diseño</strong><br><small>Evidencia pendiente</small><!-- avance-diseno --></div>
  <div style="border:1px dashed #8c83a5;border-radius:10px;padding:.9rem;min-height:72px;"><strong>Diseño final</strong><br><small>Evidencia pendiente</small><!-- diseno-final --></div>
</div>

### B. Proceso de impresión

#### Impresora 1 · Bambu Lab X1 Carbon

1. Descargar el archivo en formato STL.
2. Importar el archivo a Bambu Studio.
3. Agregar un borde de adhesión para evitar que la figura se despegue de la cama.
4. Imprimir.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:.75rem;margin:1rem 0 1.75rem;">
  <div style="border:1px dashed #8c83a5;border-radius:10px;padding:.9rem;min-height:72px;"><strong>Captura de Bambu Studio</strong><br><small>Evidencia pendiente</small><!-- bambu-captura --></div>
  <figure style="margin:0;border:1px solid #8c83a5;border-radius:10px;padding:.75rem;"><img src="{{ '/assets/bambu-proceso.jpeg' | relative_url }}" alt="Proceso de impresión" loading="lazy" style="display:block;width:100%;height:220px;object-fit:contain;"><figcaption style="margin-top:.5rem;"><strong>Proceso de impresión</strong></figcaption></figure>
  <figure style="margin:0;border:1px solid #8c83a5;border-radius:10px;padding:.75rem;"><img src="{{ '/assets/bambu-antes-de-limpiar.jpg' | relative_url }}" alt="Impresión antes de limpiar" loading="lazy" style="display:block;width:100%;height:220px;object-fit:contain;"><figcaption style="margin-top:.5rem;"><strong>Impresión antes de limpiar</strong></figcaption></figure>
  <figure style="margin:0;border:1px solid #8c83a5;border-radius:10px;padding:.75rem;"><img src="{{ '/assets/bambu-producto-final.jpeg' | relative_url }}" alt="Producto final" loading="lazy" style="display:block;width:100%;height:220px;object-fit:contain;"><figcaption style="margin-top:.5rem;"><strong>Producto final</strong></figcaption></figure>
  <div style="border:1px dashed #8c83a5;border-radius:10px;padding:.9rem;min-height:72px;"><strong>Video de la pieza en movimiento</strong><br><small>Evidencia pendiente</small><!-- bambu-video --></div>
</div>

#### Impresora 2

1. Descargar el archivo en formato STL.
2. Preparar el archivo de impresión en el laminador y guardarlo en una memoria USB.
3. Insertar la memoria USB en la impresora Creality.
4. Imprimir.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:.75rem;margin:1rem 0 1.75rem;">
  <div style="border:1px dashed #8c83a5;border-radius:10px;padding:.9rem;min-height:72px;"><strong>Archivo en la memoria USB</strong><br><small>Evidencia pendiente</small><!-- creality-usb --></div>
  <div style="border:1px dashed #8c83a5;border-radius:10px;padding:.9rem;min-height:72px;"><strong>Foto del proceso de impresión</strong><br><small>Evidencia pendiente</small><!-- creality-proceso --></div>
  <div style="border:1px dashed #8c83a5;border-radius:10px;padding:.9rem;min-height:72px;"><strong>Video de la pieza en movimiento</strong><br><small>Evidencia pendiente</small><!-- creality-video --></div>
</div>

### C. Comparación de impresoras

La primera impresora me pareció muy sencilla de usar. Pude configurar la impresión y enviarla desde mi Mac. Además, me tranquilizó poder monitorearla por la cámara.

## Diseño de IA

### Prompt

> Diseña una figura 3D imprimible de **Chimuelo (Toothless), el dragón de *Cómo entrenar a tu dragón***. Quiero que esté sentado, con cabeza ancha y redondeada, ojos grandes, orejas cortas, alas plegadas pegadas al lomo y la cola curvada junto al cuerpo. Incluye la aleta protésica de la cola como detalle.
>
> La figura completa debe medir como máximo **45 mm de ancho × 45 mm de fondo × 48 mm de alto**. Modela todo como un solo sólido con base plana. Diseña las orejas, las alas y la cola con suficiente grosor para una impresión FDM en PLA con boquilla de 0.4 mm. Mantén la cola en contacto con el cuerpo o la base y usa relieves poco profundos para los ojos y la cara. Diseña la figura para que pueda imprimirse con la base apoyada y con la menor cantidad de soportes posible.
>
> Genera un **archivo STL listo para importar al laminador** y un archivo editable del modelo. Documenta el diseño por etapas: base y cuerpo, cabeza y cara, alas, cola y figura completa. Incluye una vista de cada etapa para que pueda poner en el portafolio **una explicación breve seguida de su imagen**. Termina con una vista de tres cuartos del diseño final y reporta sus dimensiones en milímetros.

### Proceso de impresión

1. Descargar el archivo en formato STL.
2. Importar el archivo a Bambu Studio.
3. Agregar un borde de adhesión para evitar que la figura se despegue de la cama y añadir los soportes necesarios.
4. Imprimir.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:.75rem;margin:1rem 0 1.75rem;">
  <div style="border:1px dashed #8c83a5;border-radius:10px;padding:.9rem;min-height:72px;"><strong>Captura de Bambu Studio</strong><br><small>Evidencia pendiente</small><!-- ia-captura --></div>
  <div style="border:1px dashed #8c83a5;border-radius:10px;padding:.9rem;min-height:72px;"><strong>Foto del proceso de impresión</strong><br><small>Evidencia pendiente</small><!-- ia-proceso --></div>
  <div style="border:1px dashed #8c83a5;border-radius:10px;padding:.9rem;min-height:72px;"><strong>Video de la impresión</strong><br><small>Evidencia pendiente</small><!-- ia-video --></div>
</div>

## Conclusiones

Al diseñar manualmente aprendí mucho sobre cómo manejar las herramientas de SolidWorks. El proceso de impresión me resultó sencillo y rápido de comprender, y me parecieron excelentes los resultados. El diseño con IA me sorprendió, sobre todo por la atención que puso en reducir la necesidad de soportes. Es una habilidad que todavía puedo desarrollar con la práctica. También me sorprendieron las distintas aplicaciones que tiene la impresión 3D.
