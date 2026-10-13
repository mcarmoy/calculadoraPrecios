# Uso

La calculadora ofrece tres operaciones:

| Operación | Descripción |
|-----------|-------------|
| Precio con IVA | Suma el IVA al precio base (21 % por defecto) |
| Descuento | Aplica un porcentaje de descuento al precio |
| Precio final | Aplica primero el descuento y después el IVA |

## Python

`````bash
python python/calculadora.py
`````

El programa pide el precio y el descuento:

`````text
=== Calculadora de precios ===
Precio sin IVA: 100
Descuento (%): 10
Precio con IVA: 121.00 €
Precio con descuento: 90.00 €
Precio final: 108.90 €
`````

## JavaScript

`````bash
node javascript/calculadora.js 100 10
`````

## PHP

`````bash
php php/calculadora.php 100 10
`````

Las versiones de JavaScript y PHP reciben el precio y el descuento como argumentos y muestran el mismo resultado:

`````text
=== Calculadora de precios ===
Precio con IVA: 121.00 €
Precio con descuento: 90.00 €
Precio final: 108.90 €
`````

## Errores habituales

Si el descuento no está entre 0 y 100, o el precio es negativo, el programa muestra un mensaje de error:

`````text
Error: El descuento debe estar entre 0 y 100
`````