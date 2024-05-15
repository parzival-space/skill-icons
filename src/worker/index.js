import { ICONS } from './icons';

const { ALL_ICON_NAMES, createSvg, getQualifiedIconNames } = require("./icons");
const { defaultOptions } = require('./options.json');

function createResponse(body, status = 200, contentType = "text/html") {
  return new Response(
    body,
    {
      status: status,
      headers: {
        'Content-Type': contentType
      }
    }
  )
}

export default {
  /**
   * @param request {Request} The incoming HTTP request.
   * @param env {Object} The bindings available to the Worker.
   */
  fetch(request, env) {
    const { pathname, searchParams } = new URL(request.url);
    const path = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

    // icons main endpoint
    if (path === "/icons") {
      const options = {
        icons:
          searchParams.get('i')?.split(',') ??
          searchParams.get('icons')?.split(',') ??
          [],
        iconTheme:
          searchParams.get('t') ??
          searchParams.get('theme') ??
          defaultOptions.iconTheme,
        iconsPerLine:
          searchParams.get('p') ??
          searchParams.get('perline') ??
          defaultOptions.iconsPerLine,
        imageScale:
          searchParams.get('s') ??
          searchParams.get('scale') ??
          defaultOptions.imageScale
      };

      // verify arguments
      if (options.icons.length === 0)
        return createResponse("'icons' parameter is missing!", 400);
      if (options.iconTheme !== 'dark' && options.iconTheme !== 'light')
        return createResponse("'theme' parameter is incorrect! Only the values 'light' and 'dark' are allowed.", 400);

      // error correct data
      if (options.iconsPerLine < 1) options.iconsPerLine = 1;
      if (options.icons.includes("all")) options.icons = ALL_ICON_NAMES;

      const qualifiedIconNames = getQualifiedIconNames(options.icons, options.iconTheme);
      if (qualifiedIconNames.length === 0)
        return createResponse("'icons' parameter is configured incorrectly! No valid icons found.", 400);

      return createResponse(
        createSvg(qualifiedIconNames, options.iconsPerLine, options.imageScale),
        200, 'image/svg+xml'
      );
    }

    // api endpoints
    if (path.startsWith("/api")) {
      // get all icon names
      if (path === "/api/icons")
        return createResponse(
          JSON.stringify(ALL_ICON_NAMES),
          200, 'application/json;charset=UTF-8');

      // get all icon names and svg content
      if (path === "/api/svgs")
        return createResponse(
          JSON.stringify(ICONS),
          200, 'application/json;charset=UTF-8');

      return createResponse(
        JSON.stringify({ message: "Invalid API endpoint." }),
        404, 'application/json;charset=UTF-8')
    }

    return createResponse("Coming Soon", 200)
  },
};
