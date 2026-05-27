# Portfolio Final V7 - Status Octagonal

## Cómo abrir correctamente
Abre esta carpeta en VS Code:

`portfolio_final_v7_status_octagonal`

No abras la carpeta exterior del ZIP. Luego usa Live Server sobre `index.html`.

## Dónde editar el estado
En `script.js`, busca:

`const statusData = { ... }`

Ahí cambias:
- `focusedOn`
- `availableFor`
- `focusedOnEn`
- `availableForEn`

## Dónde editar el panel octagonal
En `script.js`, busca:

`const statusOctagons = [ ... ]`

Cada bloque tiene:
- `title`
- `value`
- `progress`
- `icon`
- `color`
- `note`

## Dónde editar números principales
En `script.js`, busca:

`const stats = [ ... ]`

Ahí cambias:
- Proyectos
- Labs & Writeups
- Certificaciones
- Horas de estudio

## Dónde agregar proyectos / writeups / labs
En `script.js`, busca:

`const projects = [ ... ]`

Agrega un bloque nuevo siguiendo la misma estructura.

## Dónde agregar certificaciones
En `script.js`, busca:

`const certifications = [ ... ]`

Para evitar errores 404, guarda las imágenes en:

`assets/certs/`

Usa nombres sin espacios, sin ñ y sin acentos.

Ejemplo correcto:

`mi_certificado_osint.png`

## Imágenes ya incluidas
- `assets/certs/csi_linux_certified_investigator.png`
- `assets/certs/introduction_to_cyber_investigations.png`
- `assets/img/profile.jpg` si estaba disponible.

Los demás certificados usan fallback automático con iconos si no encuentra la imagen.
