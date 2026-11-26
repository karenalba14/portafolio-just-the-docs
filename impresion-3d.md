---
layout: default
title: "Impresión 3D"
nav_order: 7
---

# Impresión 3D

[Diseño propio](#diseño-propio) · [Diseño de IA](#diseño-de-ia) · [Conclusiones](#conclusiones)

## Diseño propio

Diseñé un arco con flecha que gira sobre su propio eje dentro de un marco circular.

### A. Proceso de diseño

#### Marco circular

Tracé dos círculos concéntricos en SolidWorks y extruí el espacio entre ellos para formar el marco.

![Marco circular en SolidWorks]({{ '/assets/IMG_2683.jpeg' | relative_url }})

#### Eje de giro

Modelé el eje vertical con una operación de revolución. El arco gira alrededor de ese eje dentro del marco.

![Eje de giro en SolidWorks]({{ '/assets/IMG_2685.jpeg' | relative_url }})

#### Cuerpo del arco

Dibujé el perfil curvo del arco y lo extruí para darle espesor.

![Cuerpo del arco en SolidWorks]({{ '/assets/IMG_2687.jpeg' | relative_url }})

#### Cuerda del arco

Añadí la cuerda entre los extremos del arco.

![Cuerda del arco en SolidWorks]({{ '/assets/IMG_2689.jpeg' | relative_url }})

#### Flecha y vista del conjunto

Modelé la punta y la parte trasera de la flecha. Ajusté las medidas del eje y los cortes del marco para que el arco embonara y pudiera girar. La vista isométrica muestra cómo se acomodan las piezas.

![Flecha y vista del conjunto en SolidWorks]({{ '/assets/IMG_2690.jpeg' | relative_url }})

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
  <figure style="margin:0;border:1px solid #8c83a5;border-radius:10px;padding:.75rem;">
    <video controls playsinline preload="metadata" aria-label="Video de la pieza en movimiento" style="display:block;width:100%;max-height:360px;">
      <source src="{{ '/assets/bambu-pieza-en-movimiento.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/assets/bambu-pieza-en-movimiento.mp4' | relative_url }}">Abrir video</a>
    </video>
    <figcaption style="margin-top:.5rem;"><strong>Video de la pieza en movimiento</strong></figcaption>
  </figure>
</div>

#### Impresora 2 · Creality

1. Descargar el archivo en formato STL.
2. Preparar el archivo de impresión en el laminador y guardarlo en una memoria USB.
3. Insertar la memoria USB en la impresora Creality.
4. Imprimir.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:.75rem;margin:1rem 0 1.75rem;">
  <figure style="margin:0;border:1px solid #8c83a5;border-radius:10px;padding:.75rem;"><img src="{{ '/assets/creality-laminador.jpg' | relative_url }}" alt="Acomodo de las figuras en el laminador" loading="lazy" style="display:block;width:100%;height:220px;object-fit:contain;"><figcaption style="margin-top:.5rem;"><strong>Acomodo de las figuras en el laminador</strong></figcaption></figure>
  <figure style="margin:0;border:1px solid #8c83a5;border-radius:10px;padding:.75rem;"><img src="{{ '/assets/creality-proceso.jpg' | relative_url }}" alt="Proceso de impresión" loading="lazy" style="display:block;width:100%;height:220px;object-fit:contain;"><figcaption style="margin-top:.5rem;"><strong>Proceso de impresión</strong></figcaption></figure>
  <figure style="margin:0;border:1px solid #8c83a5;border-radius:10px;padding:.75rem;"><img src="{{ '/assets/creality-antes-de-limpiar.jpg' | relative_url }}" alt="Piezas impresas antes de limpiar y armar" loading="lazy" style="display:block;width:100%;height:220px;object-fit:contain;"><figcaption style="margin-top:.5rem;"><strong>Piezas impresas antes de limpiar y armar</strong></figcaption></figure>
  <figure style="margin:0;border:1px solid #8c83a5;border-radius:10px;padding:.75rem;"><img src="{{ '/assets/creality-producto-final.jpg' | relative_url }}" alt="Arco limpio y armado" loading="lazy" style="display:block;width:100%;height:220px;object-fit:contain;"><figcaption style="margin-top:.5rem;"><strong>Arco limpio y armado</strong></figcaption></figure>
</div>

##### Resultados en Creality

<video controls playsinline preload="metadata" aria-label="Arco impreso en Creality" style="display:block;width:100%;max-height:420px;">
  <source src="{{ '/assets/creality-arco-resultado.mp4' | relative_url }}" type="video/mp4">
  <a href="{{ '/assets/creality-arco-resultado.mp4' | relative_url }}">Abrir video</a>
</video>

### C. Comparación de impresoras

La primera impresora me pareció muy sencilla de usar. Pude configurar la impresión y enviarla desde mi Mac. Además, me tranquilizó poder monitorearla por la cámara.

## Diseño de IA

### Prompt

> Diseña un perrito pequeño y sentado, de estilo minimalista, con cabeza redondeada, hocico corto, nariz definida, ojos pequeños, orejas caídas, patas delanteras juntas y cola corta curvada junto al cuerpo. Usa relieves suaves que se distingan con un solo color de filamento.
>
> El modelo debe caber en 30 × 30 × 35 mm. Hazlo en una sola pieza con base plana integrada, preparada para impresión FDM en PLA con boquilla de 0,4 mm y con el objetivo de imprimir sin soportes. Entrega un STL de malla cerrada, un modelo editable y una imagen por etapa.

### Proceso de diseño

#### 1. Base y cuerpo

El torso se formó con volúmenes redondeados. La parte inferior se cortó al ras para crear una base plana integrada.

![Base y cuerpo]({{ '/assets/perrito-3d/01-etapa.png' | relative_url }})

#### 2. Cabeza y hocico

Se unió una cabeza redondeada al torso y se añadió un hocico corto con una transición suave hacia la cara.

![Cabeza y hocico]({{ '/assets/perrito-3d/02-etapa.png' | relative_url }})

#### 3. Ojos, nariz y orejas

Los ojos y la nariz se modelaron en relieve para que se distingan al imprimir en un solo color. Las orejas caídas se fusionaron con los costados de la cabeza.

![Ojos, nariz y orejas]({{ '/assets/perrito-3d/03-etapa.png' | relative_url }})

#### 4. Patas y cola

Se juntaron las patas delanteras y se marcó la separación entre ellas con un surco suave. La cola quedó curvada y unida al costado.

![Patas y cola]({{ '/assets/perrito-3d/04-etapa.png' | relative_url }})

#### 5. Integración y figura completa

Se exportó el modelo como un STL de **28 × 25 × 34 mm** (ancho × fondo × alto). Se verificó que la malla es cerrada, que tiene una sola componente y que sus caras mantienen una orientación coherente.

![Integración y figura completa]({{ '/assets/perrito-3d/05-etapa.png' | relative_url }})

### Vista final de tres cuartos

![Perrito sentado en vista de tres cuartos]({{ '/assets/perrito-3d/06-tres-cuartos.png' | relative_url }})

### Preparación para la impresión

Importé el STL en Bambu Studio, apoyé la base plana sobre la cama y laminé la figura con el perfil Bambu Lab X1. Usé PLA genérico, una boquilla de 0,4 mm, una altura de capa de 0,20 mm, dos paredes y relleno de rejilla al 15 %. Dejé desactivados los soportes. La vista previa mostró **170 capas** y una altura total de **34 mm**.

![Vista previa del perrito laminado en Bambu Studio]({{ '/assets/perrito-3d/07-bambu-studio.jpg' | relative_url }})

### Resultados del perrito

<video controls playsinline preload="metadata" aria-label="Perrito impreso en 3D" style="display:block;width:100%;max-height:420px;">
  <source src="{{ '/assets/perrito-3d/resultado-impreso.mp4' | relative_url }}" type="video/mp4">
  <a href="{{ '/assets/perrito-3d/resultado-impreso.mp4' | relative_url }}">Abrir video</a>
</video>

## Conclusiones

Al diseñar manualmente aprendí mucho sobre cómo manejar las herramientas de SolidWorks. El proceso de impresión me resultó sencillo y rápido de comprender, y me parecieron excelentes los resultados. El diseño con IA me sorprendió, sobre todo por la atención que puso en reducir la necesidad de soportes. Es una habilidad que todavía puedo desarrollar con la práctica. También me sorprendieron las distintas aplicaciones que tiene la impresión 3D.
