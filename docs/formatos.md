# Formatos de la documentación

## Generación automática

La documentación se genera con GitHub Actions mediante el workflow `.github/workflows/documentacion.yml`, que llama a una acción local por lenguaje:

| Lenguaje | Acción local | Artefacto |
|----------|--------------|-----------|
| Python | `.github/actions/docs-python` | `docs-python` |
| JavaScript | `.github/actions/docs-javascript` | `docs-javascript` |
| PHP | `.github/actions/docs-php` | `docs-php` |

Los formatos se pueden descargar como artefactos de cada ejecución y se publican en GitHub Pages: https://mcarmoy.github.io/calculadoraPrecios/

La documentación técnica se genera automáticamente a partir de los comentarios del código. Cada herramienta ofrece varios formatos de salida, con finalidades distintas.

## Formatos generados

| Lenguaje | Herramienta | Formato | Carpeta | Finalidad |
|----------|-------------|---------|---------|-----------|
| Python | Sphinx | HTML | `python/documentacion/build/html` | Consulta en el navegador |
| Python | Sphinx | Texto | `python/documentacion/build/text` | Lectura rápida sin formato |
| Python | Sphinx | EPUB | `python/documentacion/build/epub` | Lectores de libros electrónicos |
| Python | Sphinx | LaTeX | `python/documentacion/build/latex` | Base para obtener un PDF |
| JavaScript | JSDoc | HTML | `javascript/documentacion/html` | Consulta en el navegador |
| JavaScript | JSDoc | JSON | `javascript/documentacion/doclets.json` | Datos estructurados |
| PHP | phpDocumentor | HTML | `php/documentacion/html` | Consulta en el navegador |
| PHP | phpDocumentor | XML | `php/documentacion/xml` | Datos estructurados |

## Cómo generarla en local (opcional)

**Python (Sphinx)**

`````bash
cd python/documentacion
python -m sphinx -b html source build/html
python -m sphinx -b text source build/text
python -m sphinx -b epub -d build/doctrees source build/epub
python -m sphinx -b latex source build/latex
`````

**JavaScript (JSDoc)**

`````bash
cd javascript
npx jsdoc calculadora.js -d documentacion/html
npx jsdoc -X calculadora.js > documentacion/doclets.json
`````

**PHP (phpDocumentor)**

`````bash
php phpDocumentor.phar run -d php -t php/documentacion/html
php phpDocumentor.phar run -d php -t php/documentacion/xml --template=xml
`````

Si la ruta del proyecto contiene caracteres especiales (por ejemplo `º`), phpDocumentor puede fallar. En ese caso se genera la documentación en una carpeta temporal con una ruta sin esos caracteres y se copia después al proyecto.