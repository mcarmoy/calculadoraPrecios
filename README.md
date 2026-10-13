# Calculadora de precios

Programa que calcula un precio con IVA, aplica un descuento y obtiene el precio final aplicando descuento e IVA. Está implementado en tres lenguajes (Python, JavaScript y PHP) y cada versión se documenta directamente en el código y con la herramienta de generación automática propia de su lenguaje.

## Herramientas de documentación

| Lenguaje | Herramienta | Formatos generados |
|----------|-------------|--------------------|
| Python | Sphinx | HTML, texto, EPUB y LaTeX |
| JavaScript | JSDoc | HTML y JSON |
| PHP | phpDocumentor | HTML y XML |

## Estructura

`````text
calculadoraPrecios/
├── README.md
├── .gitignore
├── docs/
│   ├── instalacion.md
│   ├── uso.md
│   └── formatos.md
├── python/
│   ├── calculadora.py
│   └── documentacion/
├── javascript/
│   ├── calculadora.js
│   ├── package.json
│   ├── package-lock.json
│   └── documentacion/
└── php/
    ├── calculadora.php
    └── documentacion/
`````

## Ejecución rápida

Cada versión recibe el precio y el descuento:

`````bash
python python/calculadora.py
node javascript/calculadora.js 100 10
php php/calculadora.php 100 10
`````

## Documentación

- [Instalación](docs/instalacion.md): requisitos y cómo obtener el proyecto.
- [Uso](docs/uso.md): cómo ejecutar cada versión, con ejemplos.
- [Formatos](docs/formatos.md): cómo regenerar la documentación técnica y qué formatos se obtienen.

La documentación técnica generada está en las carpetas `documentacion/` de cada lenguaje.

## Control de versiones

El proyecto se gestiona con Git. El `.gitignore` excluye los archivos temporales y las dependencias, que se pueden volver a generar.