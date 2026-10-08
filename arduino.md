---
layout: default
title: Arduino
nav_order: 3
---

<div class="arduino-page" markdown="1">

<div class="arduino-hero">
<p class="arduino-eyebrow">Reporte</p>
<h1 id="arduino">Arduino</h1>
<p>Uso de arduino IDE, conexión de circuitos, servomotores y código.</p>

<nav class="arduino-nav" aria-label="Contenido de Arduino">
<a href="#fundamentos">Fundamentos</a><a href="#materiales">Materiales</a><a href="#reporte">Prácticas</a><a href="#videos">Videos</a><a href="#conclusion">Conclusión</a>
</nav>

<div id="fundamentos" markdown="1">

## ¿Qué es Arduino? 

El Arduino es un software en plataforma electrónica de código abierto, que tiene software y hardware libres. Fue creado en Italia en 2005 para desarrollar prototipos interactivos. Permite utilizar muchos microordenadores de una sola placa y darles muchos usos.  

El hardware es una placa que contiene un microcontrolador principal que permite controlar sus elementos periféricos.

## ¿Cómo se utiliza Arduino IDE? 

El Arduino IDE es el programa que se utiliza para escribir, revisar y cargar instrucciones en una placa Arduino. IDE significa Integrated Development Environment o “Entorno de Desarrollo Integrado”.   

Primero se instala el Arduino IDE en la computadora y se conecta la placa Arduino mediante un cable USB. Dentro del programa se escribe el código, llamado sketch, usando un lenguaje basado en C/C++. Después, el IDE revisa si existen errores y compila el programa. Finalmente, al presionar el botón de cargar, el código se transfiere a la placa Arduino, que lo ejecuta para controlar componentes como luces, sensores, motores o pantallas.

</div>

## Materiales
{: #materiales }

* **Tarjeta Arduino:** placa programable que controla el funcionamiento del proyecto mediante el código cargado desde la computadora.     
* **Cable USB-A a USB-B:** se utiliza para conectar la tarjeta Arduino a la computadora, cargar los programas y, en algunos casos, proporcionar alimentación eléctrica.    
* **Protoboard:** tablero de pruebas que permite realizar conexiones electrónicas sin necesidad de soldar.     
* **Jumpers:** cables pequeños empleados para unir los componentes entre sí y con los pines de Arduino.    
* **LEDs:** diodos emisores de luz que sirven como indicadores visuales o para realizar prácticas de encendido y apagado.    
* **Botones:** interruptores que permiten enviar una señal de entrada al Arduino cuando se presionan.    
* **Resistencias:** componentes que limitan el paso de corriente y protegen elementos como LEDs, botones y circuitos.     
* **Display de 7 segmentos:** dispositivo formado por siete LEDs que permite mostrar números del 0 al 9.    
* **Servomotores:** motores que pueden girar a posiciones específicas y controladas por Arduino.     
* **Potenciómetros:** resistencias variables que permiten modificar una señal eléctrica, por ejemplo para regular la intensidad de una luz o la posición de un servomotor.    
* **Fuente de poder:** suministra la energía necesaria para alimentar el Arduino y los componentes del circuito.    
* **Push button:** botón que envía una señal al Arduino al presionarlo.

<details class="arduino-details">
<summary>Ver galería de materiales · 11 fotografías</summary>
<div class="arduino-gallery">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/5ef4d27f-750e-404c-86d3-6038779b825b.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/5ef4d27f-750e-404c-86d3-6038779b825b.jpeg' | relative_url }}" alt="Fotografía de materiales 1" loading="lazy"></a><figcaption>Materiales · 01</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/c1.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/c1.jpeg' | relative_url }}" alt="Fotografía de materiales 2" loading="lazy"></a><figcaption>Materiales · 02</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/c2.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/c2.jpeg' | relative_url }}" alt="Fotografía de materiales 3" loading="lazy"></a><figcaption>Materiales · 03</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/c3.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/c3.jpeg' | relative_url }}" alt="Fotografía de materiales 4" loading="lazy"></a><figcaption>Materiales · 04</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/c4.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/c4.jpeg' | relative_url }}" alt="Fotografía de materiales 5" loading="lazy"></a><figcaption>Materiales · 05</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/c5.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/c5.jpeg' | relative_url }}" alt="Fotografía de materiales 6" loading="lazy"></a><figcaption>Materiales · 06</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/c6.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/c6.jpeg' | relative_url }}" alt="Fotografía de materiales 7" loading="lazy"></a><figcaption>Materiales · 07</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/c7.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/c7.jpeg' | relative_url }}" alt="Fotografía de materiales 8" loading="lazy"></a><figcaption>Materiales · 08</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/c8.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/c8.jpeg' | relative_url }}" alt="Fotografía de materiales 9" loading="lazy"></a><figcaption>Materiales · 09</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/c9.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/c9.jpeg' | relative_url }}" alt="Fotografía de materiales 10" loading="lazy"></a><figcaption>Materiales · 10</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/c10.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/c10.jpeg' | relative_url }}" alt="Fotografía de materiales 11" loading="lazy"></a><figcaption>Materiales · 11</figcaption></figure>
</div>
</details>

## Reportes
{: #reporte }

Cada práctica reúne la observación, la evidencia del circuito y su código. Pulsa **Ver código** para consultar el programa completo.

## Salidas digitales

LEDs, tiempos y señales HIGH / LOW.

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 0</p>

### Ejemplo Blink
{: #practica-0 }

Esto nos deja observar como el arduino ya está funcional, dado que el Led parpadea.

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/00.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/00.jpeg' | relative_url }}" alt="Circuito de la práctica 0: Ejemplo Blink" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/IMG_0036.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/IMG_0036.jpeg' | relative_url }}" alt="Placa Arduino conectada por USB" loading="lazy"></a><figcaption>Arduino conectado</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//
void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);

  delay(1000); // Wait for 1000 millisecond(s).

  digitalWrite(LED_BUILTIN, LOW);

  delay(1000); // Wait for 1000 millisecond(s).

}
```

</details>

</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 1</p>

### Salida digital · HIGH
{: #practica-1 }

El código generó que el Led se mantuviera encendido

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/01.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/01.jpeg' | relative_url }}" alt="Circuito de la práctica 1: Salida digital · HIGH" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code.

//
void setup()

{
  pinMode(13, OUTPUT);

}

void loop()
{
  digitalWrite(13, HIGH);
}
```

</details>

</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 2</p>

### Salida digital · LOW
{: #practica-2 }

Se configuro el Led para estar apagado

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/02.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/02.jpeg' | relative_url }}" alt="Circuito de la práctica 2: Salida digital · LOW" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, LOW);
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 3</p>

### Salida digital · Delay
{: #practica-3 }

Se atrasó 1 segundo al Led

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/03.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/03.jpeg' | relative_url }}" alt="Circuito de la práctica 3: Salida digital · Delay" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 4</p>

### Salida digital · LED
{: #practica-4 }

Se programó para que el Led parpadeara al estar directo al arduino

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/04.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/04.jpeg' | relative_url }}" alt="Circuito de la práctica 4: Salida digital · LED" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 5</p>

### Salida digital · Protoboard
{: #practica-5 }

Se colocó una resistencia para proteger al Led

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/05.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/05.jpeg' | relative_url }}" alt="Circuito de la práctica 5: Salida digital · Protoboard" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 6</p>

### Salida digital · LEDs I
{: #practica-6 }

Se hizo que 2 leds parpadearan consecutivamente junto con sus resistencias.

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/06.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/06.jpeg' | relative_url }}" alt="Circuito de la práctica 6: Salida digital · LEDs I" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 7</p>

### Salida digital · LEDs II
{: #practica-7 }

Los Leds se sincronizan para parpadear

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/07.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/07.jpeg' | relative_url }}" alt="Circuito de la práctica 7: Salida digital · LEDs II" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(13, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(12, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(12, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}
```

</details>


</div>

## Displays

Representación de números con siete segmentos.

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 8</p>

### Display de 7 segmentos I
{: #practica-8 }

Conectamos el display de 7 segmentos para que mostrara el número 9. El código enviaba señales HIGH y LOW a los pines necesarios para lograrlo.

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/08.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/08.jpeg' | relative_url }}" alt="Circuito de la práctica 8: Display de 7 segmentos I" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);	//Segmento e
  pinMode(12, OUTPUT);	//Segmento d
  pinMode(10, OUTPUT);	//Segmento c
  pinMode(9, OUTPUT);	//Segmento punto
  pinMode(7, OUTPUT);	//Segmento b
  pinMode(6, OUTPUT);	//Segmento a
  pinMode(5, OUTPUT);	//Segmento f
  pinMode(4, OUTPUT);	//Segmento g
}

void loop()
{
  digitalWrite(6, HIGH);//Segmento a
  digitalWrite(7, HIGH); //Segmento b
  digitalWrite(10, HIGH); //Segmento c
  digitalWrite(12, HIGH); //Segmento d
  digitalWrite(13, HIGH); //Segmento e
  digitalWrite(5, HIGH); //Segmento f
  digitalWrite(4, HIGH); //Segmento g
  digitalWrite(9, HIGH); //Segmento punto
  delay(1000);
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 9</p>

### Display de 7 segmentos II
{: #practica-9 }

Se hizo un conteo de 1 al 3.

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/09.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/09.jpeg' | relative_url }}" alt="Circuito de la práctica 9: Display de 7 segmentos II" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);	//Segmento e
  pinMode(12, OUTPUT);	//Segmento d
  pinMode(10, OUTPUT);	//Segmento c
  pinMode(9, OUTPUT);	//Segmento punto
  pinMode(7, OUTPUT);	//Segmento b
  pinMode(6, OUTPUT);	//Segmento a
  pinMode(5, OUTPUT);	//Segmento f
  pinMode(4, OUTPUT);	//Segmento g
}

void loop()
{
  digitalWrite(6, HIGH);//Segmento a
  digitalWrite(7, HIGH); //Segmento b
  digitalWrite(10, HIGH); //Segmento c
  digitalWrite(12, HIGH); //Segmento d
  digitalWrite(13, HIGH); //Segmento e
  digitalWrite(5, HIGH); //Segmento f
  digitalWrite(4, HIGH); //Segmento g
  digitalWrite(9, HIGH); //Segmento punto
  delay(1000);
}
```

</details>


</div>

## Entradas y lógica

Botones, condiciones y conteo con LEDs.

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 10</p>

### Entrada digital · Botón
{: #practica-10 }

Hicimos que un botón encendiera el Led

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/10.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/10.jpeg' | relative_url }}" alt="Circuito de la práctica 10: Entrada digital · Botón" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//

void setup()
{
  pinMode(13, OUTPUT);	//LED

  pinMode(8, INPUT);	//BOTON
}

void loop()
{
  digitalWrite(13, digitalRead(8)); //Escribimpos en el LED el valor del BOTON
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 11</p>

### Entrada digital · Dos botones
{: #practica-11 }

Generamos un circuito que se encendiera con 2 botones

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/11.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/11.jpeg' | relative_url }}" alt="Circuito de la práctica 11: Entrada digital · Dos botones" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//

void setup()
{
  pinMode(13, OUTPUT);	//LED1
  pinMode(8, INPUT);	//BOTON1

  pinMode(11, OUTPUT);	//LED2
  pinMode(2, INPUT);	//BOTON2
}

void loop()
{

  digitalWrite(13, digitalRead(8)); //Escribimpos en el LED1 el valor del BOTON1
  digitalWrite(11, digitalRead(2)); //Escribimpos en el LED2 el valor del BOTON2
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 12</p>

### Condicionales · Botón
{: #practica-12 }

Cuando se pulsa el botón, se enciende el Led

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/12.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/12.jpeg' | relative_url }}" alt="Circuito de la práctica 12: Condicionales · Botón" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//

void setup()
{
  pinMode(13, OUTPUT);	//LED

  pinMode(8, INPUT);	//BOTON
}

void loop()
{

  if (digitalRead(8) == HIGH)		//Pregunta si el boton1 esta activado
  {
    digitalWrite(13, HIGH);			//SI: encendemos el led1
  }
  else if(digitalRead(8) == LOW)	//Pregunta si el boton1 esta desactivado
  {
    digitalWrite(13, LOW);			//SI: apagamos el led1
  }
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 13</p>

### Condicionales · Dos botones
{: #practica-13 }

Se enciende el Led con 2 botones

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/13.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/13.jpeg' | relative_url }}" alt="Circuito de la práctica 13: Condicionales · Dos botones" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//

void setup()
{
  pinMode(13, OUTPUT);	//LED1
  pinMode(8, INPUT);	//BOTON1

  pinMode(11, OUTPUT);	//LED2
  pinMode(2, INPUT);	//BOTON2
}

void loop()
{

  if (digitalRead(8) == HIGH)		//Pregunta si el boton1 esta activado
  {
    digitalWrite(13, HIGH);			//SI: encendemos el led1
  }
  else if(digitalRead(8) == LOW)	//Pregunta si el boton1 esta desactivado
  {
    digitalWrite(13, LOW);			//SI: apagamos el led1
  }

  if (digitalRead(2) == HIGH)		//Pregunta si el boton2 esta activado
  {
    digitalWrite(11, HIGH);			//SI: encendemos el led2
  }
  else if(digitalRead(2) == LOW)	//Pregunta si el boton2 esta desactivado
  {
    digitalWrite(11, LOW);			//SI: apagamos el led2
  }
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 14</p>

### Condicional OR
{: #practica-14 }

Si uno o ambos botones estaban presionados, entonces el LED se encendía.

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/14.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/14.jpeg' | relative_url }}" alt="Circuito de la práctica 14: Condicional OR" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//

void setup()
{
  //Inicializamos puertos
  pinMode(13, OUTPUT);	//LED1

  pinMode(8, INPUT);	//BOTON1
  pinMode(2, INPUT);	//BOTON2
}

void loop()

{
  if (digitalRead(8) == HIGH || digitalRead(2) == HIGH)		//Pregunta si se cumple la condición
  {
    digitalWrite(13, HIGH);			//SI: encendemos el led1
  }
  else	//En caso contrario
  {
    digitalWrite(13, LOW);			//NO: apagamos el led1
  }

}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 15</p>

### Condicional AND
{: #practica-15 }

Se encendía el Led al presionar ambos botones

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/15.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/15.jpeg' | relative_url }}" alt="Circuito de la práctica 15: Condicional AND" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
//

void setup()
{
  //Inicializamos puertos
  pinMode(13, OUTPUT);	//LED1

  pinMode(8, INPUT);	//BOTON1
  pinMode(2, INPUT);	//BOTON2
}

void loop()
{

  if (digitalRead(8) == HIGH && digitalRead(2) == HIGH)		//Pregunta si se cumple la condición
  {
    digitalWrite(13, HIGH);			//SI: encendemos el led1
  }
  else	//En caso contrario
  {
    digitalWrite(13, LOW);			//NO: apagamos el led1
  }

}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 16</p>

### Contador de LEDs
{: #practica-16 }

Se encendían los Leds como si se estuvieran enumerando.

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/16.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/16.jpeg' | relative_url }}" alt="Circuito de la práctica 16: Contador de LEDs" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
// CONTADOR

int cuenta = 0;		//Variable que guarda el numero de veces que se ha contado

void setup()
{
  //Inicializamos puertos
  pinMode(13, OUTPUT);	//LED1
  pinMode(12, OUTPUT);	//LED2
  pinMode(11, OUTPUT);	//LED3
  pinMode(10, OUTPUT);	//LED4
  pinMode(2, INPUT);	//BOTON
}

void loop()
{
  if (digitalRead(2) == HIGH)		//Pregunta si el boton esta activado
  {
    cuenta++;
    delay(500);
  }
  if(cuenta >= 5)
  {
    cuenta = 0;
  }

  if(cuenta == 0)
  {
  	digitalWrite(13, LOW);
    digitalWrite(12, LOW);
    digitalWrite(11, LOW);
    digitalWrite(10, LOW);
  }
  else if(cuenta == 1)
  {
  	digitalWrite(13, HIGH);
    digitalWrite(12, LOW);
    digitalWrite(11, LOW);
    digitalWrite(10, LOW);
  }
  else if(cuenta == 2)
  {
  	digitalWrite(13, HIGH);
    digitalWrite(12, HIGH);
    digitalWrite(11, LOW);
    digitalWrite(10, LOW);
  }
  else if(cuenta == 3)
  {
  	digitalWrite(13, HIGH);
    digitalWrite(12, HIGH);
    digitalWrite(11, HIGH);
    digitalWrite(10, LOW);
  }
  else if(cuenta == 4)
  {
  	digitalWrite(13, HIGH);
    digitalWrite(12, HIGH);
    digitalWrite(11, HIGH);
    digitalWrite(10, HIGH);
  }
}
```

</details>


</div>

## Servomotores

Posiciones, potenciómetros y alimentación externa.

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 17</p>

### Servomotor
{: #practica-17 }

El servomotor siempre tenía un ángulo de 0°

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/17.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/17.jpeg' | relative_url }}" alt="Circuito de la práctica 17: Servomotor" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
// Incluímos la librería para poder controlar el servo
#include <Servo.h>

// Declaramos la variable para controlar el servo
Servo servoMotor;

void setup()
{
  // Iniciamos el servo para que empiece a trabajar con el pin 9
  servoMotor.attach(9);
}

void loop()
{
  // Desplazamos a la posición 90º
  servoMotor.write(90);
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 18</p>

### Servomotor · Varias posiciones
{: #practica-18 }

El servomotor se movía de posición cada cierto tiempo.

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/18.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/18.jpeg' | relative_url }}" alt="Circuito de la práctica 18: Servomotor · Varias posiciones" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
// Incluímos la librería para poder controlar el servo
#include <Servo.h>

// Declaramos la variable para controlar el servo
Servo servoMotor;

void setup()
{
  // Iniciamos el servo para que empiece a trabajar con el pin 9
  servoMotor.attach(9);
}

void loop()
{
  // Desplazamos a la posición 0º
  servoMotor.write(0);
  // Esperamos 1 segundo
  delay(1000);

  // Desplazamos a la posición 90º
  servoMotor.write(90);
  // Esperamos 1 segundo
  delay(1000);

  // Desplazamos a la posición 180º
  servoMotor.write(180);
  // Esperamos 1 segundo
  delay(1000);
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 19</p>

### Servomotor y potenciómetro
{: #practica-19 }

Se hizo un circuito donde el potenciómetro controla el movimiento del servo, de 0 a 180 grados. En el código se ajustan los valores que recibe el servo según el voltaje, de 0 a 5 V.

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/19.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/19.jpeg' | relative_url }}" alt="Circuito de la práctica 19: Servomotor y potenciómetro" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
// Incluímos la librería para poder controlar el servo
#include <Servo.h>

// Declaramos la variable para controlar el servo
Servo servoMotor;
int valor;		//variable que almacena la lectura analógica raw
int pos;        //Variable que almacena la posicion del servo

void setup()
{
  // Iniciamos el servo para que empiece a trabajar con el pin 9
  servoMotor.attach(9);
}

void loop()
{
  // leemos del pin A0 valor
  valor = analogRead(A0);
  //Convertimos el valor del potenciometro a una
  //que entienda el servo
  pos = map(valor, 0, 1023, 0, 180);
  //Mandamos la posicion al servo
  servoMotor.write(pos);
  // Esperamos 1 segundo
  delay(1000);
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 19.2</p>

### Dos servomotores y un potenciómetro
{: #practica-20 }

Se controlan 2 servomotores con los potenciómetros

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/20.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/20.jpeg' | relative_url }}" alt="Circuito de la práctica 19: Dos servomotores y un potenciómetro" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
#include <Servo.h>
int valor;		//variable que almacena la lectura analógica raw
int pos;        //Variable que almacena la posicion del servo


//Le decimos al codigo que va a existir un servo
//llamado my servo
Servo myservo1;
Servo myservo2;

void setup()
{
  //Le decimos al codigo donde esta conectado el servo 1
  myservo1.attach(9);
  //Le decimos al codigo donde esta conectado el servo 2
  myservo2.attach(2);
}

void loop()
{
  // leemos el valor de potenciometro
  valor = analogRead(A0);
  //Convertimos el valor del potenciometro a una
  //que entienda el servo
  pos = map(valor, 0, 1023, 0, 180);
  //Mandamos la posicion al servo 1
  myservo1.write(pos);
  //Mandamos la posicion al servo 2
  myservo2.write(pos);
  //esperamos un poco para que se mueva
  delay(10);
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 20</p>

### Dos servomotores y dos potenciómetros
{: #practica-21 }

Se controlaron 2 servomotorees independientemente con 2 potenciómetros

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/21.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/21.jpeg' | relative_url }}" alt="Circuito de la práctica 20: Dos servomotores y dos potenciómetros" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
#include <Servo.h>
int valor1;		//variable que almacena la
				//lectura analógica1
int valor2;		//variable que almacena la
				//lectura analógica2
int pos1;        //Variable que almacena la posicion del servo1
int pos2;        //Variable que almacena la posicion del servo2


//Le decimos al codigo que va a existir un servo
//llamado my servo
Servo myservo1;
Servo myservo2;

void setup()
{
  //Le decimos al codigo donde esta conectado el servo 1
  myservo1.attach(9);
  //Le decimos al codigo donde esta conectado el servo 2
  myservo2.attach(2);
}

void loop()
{
  // leemos el valor de potenciometro1
  valor1 = analogRead(A0);
  // leemos el valor de potenciometro2
  valor2 = analogRead(A1);
  //Convertimos el valor del potenciometro a una
  //que entienda el servo
  pos1 = map(valor1, 0, 1023, 0, 180);
  pos2 = map(valor2, 0, 1023, 0, 180);
  //Mandamos la posicion al servo 1
  myservo1.write(pos1);
  //Mandamos la posicion al servo 2
  myservo2.write(pos2);
  //esperamos un poco para que se mueva
  delay(10);
}
```

</details>


</div>

<div class="arduino-practice" markdown="1">

<p class="arduino-eyebrow">PRÁCTICA 21</p>

### Fuente externa
{: #practica-22 }

Se controlaron 2 servomotores simultaneamente con una fuente externa.

<div class="arduino-evidence">
<figure class="arduino-figure"><a href="{{ '/assets/img/arduino/22.jpeg' | relative_url }}"><img src="{{ '/assets/img/arduino/22.jpeg' | relative_url }}" alt="Circuito de la práctica 21: Fuente externa" loading="lazy"></a><figcaption>Evidencia del circuito</figcaption></figure>
</div>

<details class="arduino-code" markdown="1">
<summary>Ver código · C/C++</summary>

```cpp
// C++ code
#include <Servo.h>
int valor;		//variable que almacena la lectura analógica raw
int pos;        //Variable que almacena la posicion del servo


//Le decimos al codigo que va a existir un servo
//llamado my servo
Servo myservo1;
Servo myservo2;

void setup()
{
  //Le decimos al codigo donde esta conectado el servo 1
  myservo1.attach(9);
  //Le decimos al codigo donde esta conectado el servo 2
  myservo2.attach(2);
}

void loop()
{
  // leemos el valor de potenciometro
  valor = analogRead(A0);
  //Convertimos el valor del potenciometro a una
  //que entienda el servo
  pos = map(valor, 0, 1023, 0, 180);
  //Mandamos la posicion al servo 1
  myservo1.write(pos);
  //Mandamos la posicion al servo 2
  myservo2.write(pos);
  //esperamos un poco para que se mueva
  delay(10);
}
```

</details>


</div>

## Videos
{: #videos }

[Ver los videos de las prácticas en YouTube →](https://www.youtube.com/playlist?list=PLB27JIL34Vxo)
{: .btn .btn-primary }

## Conclusión general
{: #conclusion }
En conclusión, me gustaría mencionar las distintas cosas que aprendí a lo largo de la práctica con arduinos.   
1. Qué es un Arduino, sus usos y modo de programarlo.   
2. Cómo armar los circuitos en el protoboard y conectarlo al arduino
3. Para qué funciona cada componente.
4. Cómo subir a GitHub fotos y videos.

Asimismo, creo que la práctica me permitió claridad en el tema sobre el arduino, sin embargo, me hace falta mucha práctica o tal vez teoría sobre el armado de los circuitos.

</div>

