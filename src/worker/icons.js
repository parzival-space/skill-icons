const { aliases } = require('./options.json');

// map icons and names
export const ICONS = require('./icons.json');
export const ALL_ICON_NAMES = [...new Set(Object.keys(ICONS).map(icon => icon.split('-')[0]))];
export const ALL_THEMED_ICON_NAMES = [
  ...Object.keys(ICONS)
    .filter(icon => icon.includes('-light') || icon.includes('-dark'))
    .map(icon => icon.split('-')[0])];

/**
 * Generates the SVG body.
 * @param qualifiedIconNames The qualified icon names. For themed icons [name]-[theme] and for normal icons [name].
 * @param iconsPerLine Specifies the number of icons to display for each line.
 * @param imageScale The scale of the created image.
 * @returns {string} Generated SVG body.
 */
export function createSvg(qualifiedIconNames, iconsPerLine, imageScale) {
  const svgDataList = qualifiedIconNames
    .map(name => new Object({ name, data: ICONS[name] }));

  // calculate image dimensions
  const imageWidth = Math.min(iconsPerLine * 300, svgDataList.length * 300) - 44;
  const imageHeight = Math.ceil(svgDataList.length / iconsPerLine) * 300 - 44;
  const scaledWidth = imageWidth * imageScale;
  const scaledHeight = imageHeight * imageScale;

  return`
  <svg width="${scaledWidth}" height="${scaledHeight}" viewBox="0 0 ${imageWidth} ${imageHeight}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    ${svgDataList.map((icon, i) => `
    <g transform="translate(${(i % iconsPerLine) * 300}, ${Math.floor(i / iconsPerLine) * 300})" icon="${icon.name}">
      ${icon.data}
    </g>
    `).join(' ')}
  </svg>`;
}

/**
 * Returns all available qualified icon names.
 * @param names A list of unqualified icon names.
 * @param theme The theme to use for themed icons.
 * @returns {String[]} A list of qualified icon names.
 */
export function getQualifiedIconNames(names, theme = "dark") {
  return names
    .map(name => {
      if (aliases[name] !== undefined)
        name = aliases[name];

      // is themed icon
      if (ALL_THEMED_ICON_NAMES.includes(name))
        return `${name}-${theme}`;

      // not a themed icon
      if (ALL_ICON_NAMES.includes(name))
        return name;
    })
    .filter(name => name !== undefined);
}
