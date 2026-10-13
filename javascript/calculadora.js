/**
 * Calculadora de precios.
 *
 * Permite calcular un precio con IVA, aplicar un descuento y obtener
 * el precio final aplicando descuento e IVA.
 *
 * @module calculadora
 */

/**
 * Porcentaje de IVA general que se aplica por defecto.
 * @constant {number}
 */
const IVA_GENERAL = 21;

/**
 * Redondea un número a dos decimales.
 *
 * @param {number} valor - Número a redondear.
 * @returns {number} El número redondeado a dos decimales.
 */
function redondear(valor) {
  return Math.round((valor + Number.EPSILON) * 100) / 100;
}

/**
 * Calcula el precio con IVA incluido.
 *
 * @param {number} precio - Precio base sin IVA. Debe ser mayor o igual que 0.
 * @param {number} [iva=IVA_GENERAL] - Porcentaje de IVA a aplicar.
 * @returns {number} Precio con IVA, redondeado a dos decimales.
 * @throws {Error} Si el precio o el IVA son negativos.
 * @example
 * calcularConIva(100); // 121
 */
function calcularConIva(precio, iva = IVA_GENERAL) {
  if (precio < 0 || iva < 0) {
    throw new Error("El precio y el IVA no pueden ser negativos");
  }
  return redondear(precio * (1 + iva / 100));
}

/**
 * Aplica un porcentaje de descuento a un precio.
 *
 * @param {number} precio - Precio original. Debe ser mayor o igual que 0.
 * @param {number} descuento - Porcentaje de descuento, entre 0 y 100.
 * @returns {number} Precio con el descuento aplicado, redondeado a dos decimales.
 * @throws {Error} Si el precio es negativo o el descuento no está entre 0 y 100.
 * @example
 * aplicarDescuento(100, 10); // 90
 */
function aplicarDescuento(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  if (descuento < 0 || descuento > 100) {
    throw new Error("El descuento debe estar entre 0 y 100");
  }
  return redondear(precio * (1 - descuento / 100));
}

/**
 * Calcula el precio final aplicando primero el descuento y después el IVA.
 *
 * @param {number} precio - Precio base sin IVA.
 * @param {number} descuento - Porcentaje de descuento, entre 0 y 100.
 * @param {number} [iva=IVA_GENERAL] - Porcentaje de IVA a aplicar.
 * @returns {number} Precio final con descuento e IVA, redondeado a dos decimales.
 * @throws {Error} Si algún valor no es válido.
 * @example
 * calcularPrecioFinal(100, 10); // 108.9
 */
function calcularPrecioFinal(precio, descuento, iva = IVA_GENERAL) {
  const precioDescontado = aplicarDescuento(precio, descuento);
  return calcularConIva(precioDescontado, iva);
}

/**
 * Lee el precio y el descuento de la línea de comandos y muestra los tres cálculos.
 *
 * @returns {void}
 */
function main() {
  const precio = parseFloat(process.argv[2]);
  const descuento = parseFloat(process.argv[3]);

  console.log("=== Calculadora de precios ===");
  try {
    if (Number.isNaN(precio) || Number.isNaN(descuento)) {
      throw new Error("Uso: node calculadora.js <precio> <descuento>");
    }
    console.log(`Precio con IVA: ${calcularConIva(precio).toFixed(2)} €`);
    console.log(`Precio con descuento: ${aplicarDescuento(precio, descuento).toFixed(2)} €`);
    console.log(`Precio final: ${calcularPrecioFinal(precio, descuento).toFixed(2)} €`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { IVA_GENERAL, calcularConIva, aplicarDescuento, calcularPrecioFinal };