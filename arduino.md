---
layout: default
title: Arduino
nav_order:6
---
# Arduino. 
¿Qué es un arduino? 

El Arduino es un software en plataforma electrónica de código abierto, que tiene software y hardware libres. Fue creado en italia en 2005 para desarrollar prototipos interactivos. Permite utlizar muchos microordenadores de una sola placa y darles muchos usos.  

El hardware es una placa que contiene un microcontrolador principal que permite controlar sus elementos periféricos.

¿Cómo se utiliza el programa de Arduino IDE? 

El Arduino IDE es el programa que se utiliza para escribir, revisar y cargar instrucciones en una placa Arduino. IDE significa Integrated Development Environment o “Entorno de Desarrollo Integrado”.   

Primero se instala el Arduino IDE en la computadora y se conecta la placa Arduino mediante un cable USB. Dentro del programa se escribe el código, llamado sketch, usando un lenguaje basado en C/C++. Después, el IDE revisa si existen errores y compila el programa. Finalmente, al presionar el botón de cargar, el código se transfiere a la placa Arduino, que lo ejecuta para controlar componentes como luces, sensores, motores o pantallas.     

Lista de materiales:
* Tarjeta Arduino: placa programable que controla el funcionamiento del proyecto mediante el código cargado desde la computadora.     
* Cable USB-A a USB-B: se utiliza para conectar la tarjeta Arduino a la computadora, cargar los programas y, en algunos casos, proporcionar alimentación eléctrica.    
* Protoboard: tablero de pruebas que permite realizar conexiones electrónicas sin necesidad de soldar.     
* Jumpers: cables pequeños empleados para unir los componentes entre sí y con los pines de Arduino.    
* LEDs: diodos emisores de luz que sirven como indicadores visuales o para realizar prácticas de encendido y apagado.    
* Botones: interruptores que permiten enviar una señal de entrada al Arduino cuando se presionan.    
* Resistencias: componentes que limitan el paso de corriente y protegen elementos como LEDs, botones y circuitos.     
* Display de 7 segmentos: dispositivo formado por siete LEDs que permite mostrar números del 0 al 9.    
* Servomotores: motores que pueden girar a posiciones específicas y controladas por Arduino.     
* Potenciómetros: resistencias variables que permiten modificar una señal eléctrica, por ejemplo para regular la intensidad de una luz o la posición de un servomotor.    
* Fuente de poder: suministra la energía necesaria para alimentar el Arduino y los componentes del circuito.    
* Push button: botón que envía una señal al Arduino al presionarlo.    

# Reporte
## 0_Ejemplo Blink

**Código:**
// C++ code
//
void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}

**Foto**
![Circuito 1](assets/img/arduino/00.jpeg)

**Video**


## 1_Salida Digital High

**Código**
// C++ code
//
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
}

**Foto**
![Circuito 2](assets/img/arduino/01.jpeg)

**Video**


## 2_Salida Digital Low

**Código**
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

**Foto**
![Circuito 3](assets/img/arduino/02.jpeg)

**Video**



## 3_Salida Digital Delay

**Código**
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

*+Foto**
![Circuito 4](assets/img/arduino/03.jpeg)

**Video**

## 4_Salida Digital Led

**Código**
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

**Foto**
![Circuito 5](assets/img/arduino/04.jpeg)

**Video**


## 5_Salida Digital Protoboard

**Código**
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

**Foto**
![Circuito 6](assets/img/arduino/05.jpeg)

**Video**


## 6_Salida Digital Leds I

**Código**
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

**Foto**
![Circuito 7](assets/img/arduino/06.jpeg)

**Video**

## 7_Salida Digital Leds II

**Código**
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

**Foto**
![Circuito 8](assets/img/arduino/07.jpeg)  

**Video**


## 8_Salida Digital Display 7 Segmentos
**Código**
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

**Foto**
![Circuito 9](assets/img/arduino/08.jpeg)  

**Video**


## 9_Salida Digital Display 7 Segmentos
**Código**
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

**Foto**
![Circuito 10](assets/img/arduino/09.jpeg)  

**Video**

## 10_Entrada Digital Boton

**Código**
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

**Foto**
![Circuito 11](assets/img/arduino/10.jpeg)  

**Video**

## 11_Entrada Digital 2 Botones

**Código**
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

**Foto**
![Circuito 12](assets/img/arduino/11.jpeg)  

**Video**

## 12_Entrada Digital Condicionales Boton

**Código**
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
**Foto**
![Circuito 13](assets/img/arduino/12.jpeg)  

**Video**

## 13_Entrada Digital Condicionales 2 Botones

**Código**
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
**Foto**
![Circuito 14](assets/img/arduino/13.jpeg)  

**Video**

## 14_Condicionales OR Boton

**Código**
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

**Foto**
![Circuito 15](assets/img/arduino/14.jpeg)  

**Video**

## 15_Condicionales AND Botones

**Código**
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

**Foto**
![Circuito 16](assets/img/arduino/15.jpeg)  

**Video**

## 16_Contador Leds

**Código**
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

**Foto**
![Circuito 17](assets/img/arduino/16.jpeg)  

**Video**

