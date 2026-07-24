# Ciclo Salta

Landing page del **proyecto piloto** de recolección y transformación de residuos orgánicos en Salta Capital.

Stack: Vite + HTML semántico + CSS puro + JavaScript mínimo. Sitio estático, listo para GitHub Pages u otro host estático.

## Comandos

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

La salida queda en `dist/`.

## Placeholders (reemplazar antes de publicar)

Editá **`src/config.js`** (fuente central):

| Campo | Clave | Valor actual |
| --- | --- | --- |
| Nombre del proyecto | `projectName` | `Ciclo Salta` |
| WhatsApp | `whatsappNumber` | `5490000000000` |
| Correo | `email` | `hola@ejemplo.com` |
| Zona piloto | `pilotZone` | `[Barrio / microzona — por definir]` |
| Instagram | `social.instagram` | `#` |
| Facebook | `social.facebook` | `#` |

También hay comentarios `PLACEHOLDER` en `index.html` junto a correo, zona y redes.

## Alcance

- Validar interés / demanda (no cobro).
- CTA principal: “Quiero sumarme al piloto” → formulario que abre WhatsApp.
- Sin testimonios, estadísticas, precios ni impacto inventados.
