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
├── .github/
│   ├── actions/
│   │   ├── docs-python/action.yml
│   │   ├── docs-javascript/action.yml
│   │   └── docs-php/action.yml
│   └── workflows/
│       └── documentacion.yml
├── pages/
│   └── index.html
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
│   └── package-lock.json
└── php/
    └── calculadora.php
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

## Documentación técnica automática

La documentación técnica se genera automáticamente con GitHub Actions a partir de los comentarios del código, por lo que no se versiona en el repositorio:

- En cada Pull Request hacia `main` se genera para comprobar que funciona.
- En cada cambio que llega a `main` se genera y se publica en GitHub Pages: https://mcarmoy.github.io/calculadoraPrecios/

Cada lenguaje tiene su propia acción local en `.github/actions/`, y el workflow `.github/workflows/documentacion.yml` las ejecuta en paralelo. Los formatos generados también se pueden descargar como artefactos desde la pestaña **Actions**.

## Control de versiones

El proyecto se gestiona con Git. El `.gitignore` excluye los archivos temporales, las dependencias y la documentación generada, que se pueden volver a generar.