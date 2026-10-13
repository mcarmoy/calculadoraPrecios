"""Calculadora de precios.

Módulo que permite calcular un precio con IVA, aplicar un descuento y
obtener el precio final aplicando descuento e IVA.
"""

IVA_GENERAL = 21.0
"""Porcentaje de IVA general que se aplica por defecto."""


def calcular_con_iva(precio, iva=IVA_GENERAL):
    """Calcula el precio con IVA incluido.

    :param precio: Precio base sin IVA. Debe ser mayor o igual que 0.
    :type precio: float
    :param iva: Porcentaje de IVA a aplicar (por defecto 21).
    :type iva: float
    :return: Precio con IVA, redondeado a dos decimales.
    :rtype: float
    :raises ValueError: Si el precio o el IVA son negativos.
    """
    if precio < 0 or iva < 0:
        raise ValueError("El precio y el IVA no pueden ser negativos")
    return round(precio * (1 + iva / 100), 2)


def aplicar_descuento(precio, descuento):
    """Aplica un porcentaje de descuento a un precio.

    :param precio: Precio original. Debe ser mayor o igual que 0.
    :type precio: float
    :param descuento: Porcentaje de descuento, entre 0 y 100.
    :type descuento: float
    :return: Precio con el descuento aplicado, redondeado a dos decimales.
    :rtype: float
    :raises ValueError: Si el precio es negativo o el descuento no está
        entre 0 y 100.
    """
    if precio < 0:
        raise ValueError("El precio no puede ser negativo")
    if descuento < 0 or descuento > 100:
        raise ValueError("El descuento debe estar entre 0 y 100")
    return round(precio * (1 - descuento / 100), 2)


def calcular_precio_final(precio, descuento, iva=IVA_GENERAL):
    """Calcula el precio final aplicando primero el descuento y después el IVA.

    :param precio: Precio base sin IVA.
    :type precio: float
    :param descuento: Porcentaje de descuento, entre 0 y 100.
    :type descuento: float
    :param iva: Porcentaje de IVA a aplicar (por defecto 21).
    :type iva: float
    :return: Precio final con descuento e IVA, redondeado a dos decimales.
    :rtype: float
    :raises ValueError: Si algún valor no es válido.
    """
    precio_descontado = aplicar_descuento(precio, descuento)
    return calcular_con_iva(precio_descontado, iva)


def main():
    """Pide un precio y un descuento y muestra los tres cálculos."""
    print("=== Calculadora de precios ===")
    try:
        precio = float(input("Precio sin IVA: "))
        descuento = float(input("Descuento (%): "))
        print(f"Precio con IVA: {calcular_con_iva(precio):.2f} €")
        print(f"Precio con descuento: {aplicar_descuento(precio, descuento):.2f} €")
        print(f"Precio final: {calcular_precio_final(precio, descuento):.2f} €")
    except ValueError as error:
        print(f"Error: {error}")


if __name__ == "__main__":
    main()