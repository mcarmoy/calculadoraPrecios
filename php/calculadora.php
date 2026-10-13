<?php

/**
 * Calculadora de precios.
 *
 * Permite calcular un precio con IVA, aplicar un descuento y obtener
 * el precio final aplicando descuento e IVA.
 *
 * @package CalculadoraPrecios
 */

declare(strict_types=1);

/**
 * Porcentaje de IVA general que se aplica por defecto.
 */
const IVA_GENERAL = 21.0;

/**
 * Calcula el precio con IVA incluido.
 *
 * @param float $precio Precio base sin IVA. Debe ser mayor o igual que 0.
 * @param float $iva    Porcentaje de IVA a aplicar (por defecto 21).
 *
 * @return float Precio con IVA, redondeado a dos decimales.
 *
 * @throws InvalidArgumentException Si el precio o el IVA son negativos.
 */
function calcularConIva(float $precio, float $iva = IVA_GENERAL): float
{
    if ($precio < 0 || $iva < 0) {
        throw new InvalidArgumentException('El precio y el IVA no pueden ser negativos');
    }
    return round($precio * (1 + $iva / 100), 2);
}

/**
 * Aplica un porcentaje de descuento a un precio.
 *
 * @param float $precio    Precio original. Debe ser mayor o igual que 0.
 * @param float $descuento Porcentaje de descuento, entre 0 y 100.
 *
 * @return float Precio con el descuento aplicado, redondeado a dos decimales.
 *
 * @throws InvalidArgumentException Si el precio es negativo o el descuento
 *                                  no está entre 0 y 100.
 */
function aplicarDescuento(float $precio, float $descuento): float
{
    if ($precio < 0) {
        throw new InvalidArgumentException('El precio no puede ser negativo');
    }
    if ($descuento < 0 || $descuento > 100) {
        throw new InvalidArgumentException('El descuento debe estar entre 0 y 100');
    }
    return round($precio * (1 - $descuento / 100), 2);
}

/**
 * Calcula el precio final aplicando primero el descuento y después el IVA.
 *
 * @param float $precio    Precio base sin IVA.
 * @param float $descuento Porcentaje de descuento, entre 0 y 100.
 * @param float $iva       Porcentaje de IVA a aplicar (por defecto 21).
 *
 * @return float Precio final con descuento e IVA, redondeado a dos decimales.
 *
 * @throws InvalidArgumentException Si algún valor no es válido.
 */
function calcularPrecioFinal(float $precio, float $descuento, float $iva = IVA_GENERAL): float
{
    $precioDescontado = aplicarDescuento($precio, $descuento);
    return calcularConIva($precioDescontado, $iva);
}

/**
 * Lee el precio y el descuento de la línea de comandos y muestra los tres cálculos.
 *
 * @param array<int, string> $argumentos Argumentos recibidos por la línea de comandos.
 *
 * @return void
 */
function main(array $argumentos): void
{
    echo "=== Calculadora de precios ===\n";
    try {
        if (count($argumentos) < 3 || !is_numeric($argumentos[1]) || !is_numeric($argumentos[2])) {
            throw new InvalidArgumentException('Uso: php calculadora.php <precio> <descuento>');
        }
        $precio = (float) $argumentos[1];
        $descuento = (float) $argumentos[2];
        printf("Precio con IVA: %.2f €\n", calcularConIva($precio));
        printf("Precio con descuento: %.2f €\n", aplicarDescuento($precio, $descuento));
        printf("Precio final: %.2f €\n", calcularPrecioFinal($precio, $descuento));
    } catch (InvalidArgumentException $error) {
        echo 'Error: ' . $error->getMessage() . "\n";
    }
}

if (PHP_SAPI === 'cli') {
    main($argv);
}