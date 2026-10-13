# Instalación

## Requisitos

| Componente | Versión | Para qué se usa |
|------------|---------|-----------------|
| Python | 3.8 o superior | Ejecutar la calculadora en Python |
| Node.js y npm | Versión LTS | Ejecutar la calculadora en JavaScript y usar JSDoc |
| PHP | 8.1 o superior | Ejecutar la calculadora en PHP y usar phpDocumentor |
| Git | Cualquiera | Control de versiones |

## Descarga

`````bash
git clone <URL-del-repositorio>
cd calculadoraPrecios
`````

## Herramientas de documentación

Solo son necesarias si se quiere regenerar la documentación técnica.

**Sphinx (Python)**

`````bash
python -m pip install sphinx
`````

**JSDoc (JavaScript)**

`````bash
cd javascript
npm install
`````

**phpDocumentor (PHP)**

Se descarga el archivo `phpDocumentor.phar` desde `github.com/phpDocumentor/phpDocumentor/releases` y se guarda en una carpeta fuera del proyecto, en una ruta sin acentos ni caracteres especiales.

## Comprobación

`````bash
python --version
node --version
php --version
git --version
`````