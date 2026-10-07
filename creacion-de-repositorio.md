---
layout: default
title: Creación de repositorio
nav_order: 0
---

# Creación de repositorio

Para crear mi página web utilicé GitHub y la plantilla que compartió el profesor Huber, llamada `portafolio-just-the-docs`. Seguí sus indicaciones para tener una copia del proyecto en mi cuenta y comenzar a publicar mis trabajos.

## 1. Crear mi cuenta de GitHub

Primero creé una cuenta en GitHub y elegí **karenalba14** como nombre de usuario. Esta cuenta me permite guardar mis proyectos y acceder a mi repositorio.

## 2. Crear una copia del repositorio del profesor

Después hice un **fork** del [repositorio del profesor](https://github.com/HuberGiron/portafolio-just-the-docs). Un fork es una copia de un proyecto que queda en nuestra propia cuenta y que podemos modificar.

A mi copia le cambié: 
owner: `karenalba14` 
repository name: conservó el nombre `portafolio-just-the-docs`  
Pero aún incluía los archivos, las instrucciones y el diseño de la plantilla del profesor.

[Ver mi repositorio](https://github.com/karenalba14/portafolio-just-the-docs)

## 3. Abrir el proyecto con Codespaces. 
Entonces en mi nueva repo, le di click a code, después a la pestaña derecha llamada codespaces y por último le di en "create codespace on main"

## 5. Configurar la dirección de mi página

En el archivo `_config.yml` auste la url para que fuera con mi usuario y la baserl para que fuera con el nombre de mi repositorio. Gracias a esto, quedó configurada la dirección de mi cuenta y el nombre del repositorio así:

```yaml
url: "https://karenalba14.github.io/"
baseurl: "/portafolio-just-the-docs"
```

Esta configuración permite que el sitio utilice la dirección correspondiente a mi proyecto.

## 6. Agregar y guardar mi contenido

Después comencé a agregar información. Las páginas utilizan **Markdown**, el cual, un formato de texto que permite incluir títulos, listas, imágenes y enlaces.

Los cambios quedaron guardados mediante **commits**, que son registros en el historial del repositorio. Estos permiten consultar qué se modificó en cada momento.


## 7. Publicar mi página con GitHub Pages

Para activar el GitHub Pages, solamente tuve que entrar a configuración en la pestaña de pages, después carmbiar: source - deploy from a branch, branch - main, folder - root. 
Y después obtuve la URL, con la cual puedo ver la página web en donde se publican los cambios.

Mi página quedó disponible en:

[Ver mi portafolio](https://karenalba14.github.io/portafolio-just-the-docs/)

## Evidencias del resultado

Las siguientes capturas no son capturas del momento original de creación de la cuenta o del repositorio.

### Mi repositorio

![Repositorio de karenalba14 y su relación con la plantilla del profesor]({{ '/assets/img/repositorio.jpg' | relative_url }})

La copia del proyecto está guardada en mi cuenta de GitHub.

### Configuración de la dirección

![Archivo de configuración con la dirección de mi página]({{ '/assets/img/configuracion.jpg' | relative_url }})

El archivo de configuración contiene mi usuario y el nombre del repositorio.

### Página publicada

![Portafolio publicado en GitHub Pages]({{ '/assets/img/sitio-publicado.jpg' | relative_url }})

Mi página se puede consultar desde el navegador.

## Conclusión

Al realizar esta actividad comencé a aprender cómo utilizar GitHub para guardar y publicar mis trabajos. El repositorio contiene los archivos y su historial, mientras que GitHub Pages permite consultar el contenido como una página web. Asímismo, hacer un reporte de como generé mi repositorio me ayuda a recordar los pasos que seguí para entender más claramente como funcionaba lo que hice en ese momento.

