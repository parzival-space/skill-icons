<p align="center"><img align="center" width="280" src=".github/assets/text-logo-dark.svg#gh-dark-mode-only"/></p>
<p align="center"><img align="center" width="280" src="./.github/assets/text-logo-light.svg#gh-light-mode-only"/></p>
<h3 align="center">Showcase your skills on your GitHub or resumé with ease!</h3>
<hr>

<h3 align="center">Powered by Cloudflare Workers ⚡</h3>

# Docs

- [Example](#example)
- [Specifying Icons](#specifying-icons)
- [Themed Icons](#themed-icons)
- [Icons Per Line](#icons-per-line)
- [Centering Icons](#centering-icons)
- [Icons List](#icons-list)

# Example

<p align="center"><img align="center" src="./.github/assets/example-dark.png#gh-dark-mode-only"/></p>
<p align="center"><img align="center" src="./.github/assets/example-light.png#gh-light-mode-only"/></p>

# Specifying Icons

Copy and paste the code block below into your readme to add the skills icon element!

Change the `?i=js,html,css` to a list of your skills separated by ","s! You can find a full list of icons [here](#icons-list).

```md
[![My Skills](https://skill-icons.parzival.space/icons?i=js,html,css,wasm)](https://skill-icons.parzival.space)
```

[![My Skills](https://skill-icons.parzival.space/icons?i=js,html,css,wasm)](https://skill-icons.parzival.space)

# Themed Icons

Some icons have a dark and light themed background. You can specify which theme you want as a url parameter.

This is optional. The default theme is dark.

Change the `&theme=light` to either `dark` or `light`. The theme is the background color, so light theme has a white icon background, and dark has a black-ish.

**Light Theme Example:**

```md
[![My Skills](https://skill-icons.parzival.space/icons?i=java,kotlin,nodejs,figma&theme=light)](https://skill-icons.parzival.space)
```

[![My Skills](https://skill-icons.parzival.space/icons?i=java,kotlin,nodejs,figma&theme=light)](https://skill-icons.parzival.space)

# Icons Per Line

You can specify how many icons you would like per line! It's an optional argument, and the default is 15.

Change the `&perline=3` to any number between 1 and 50.

```md
[![My Skills](https://skill-icons.parzival.space/icons?i=aws,gcp,azure,react,vue,flutter&perline=3)](https://skill-icons.parzival.space)
```

[![My Skills](https://skill-icons.parzival.space/icons?i=aws,gcp,azure,react,vue,flutter&perline=3)](https://skill-icons.parzival.space)

# Centering Icons

Want to center the icons in your readme? The SVGs are automatically resized, so you can do it the same way you'd normally center an image.

```html
<p align="center">
  <a href="https://skill-icons.parzival.space">
    <img src="https://skill-icons.parzival.space/icons?i=git,kubernetes,docker,c,vim" />
  </a>
</p>
```

<p align="center">
  <a href="https://skill-icons.parzival.space">
    <img src="https://skill-icons.parzival.space/icons?i=git,kubernetes,docker,c,vim" />
  </a>
</p>

# Icons List

Here's a list of all the icons currently supported.
Feel free to open an issue to suggest icons to add!

If you want to see the full list, including the icon names, click [here](./ICONSLIST.md).

<p align="center">
  <img src="https://skill-icons.parzival.space/icons?i=all" alt="Full Icon List" />
</p>

<!--

-->


---

## 💖 Support the Project

To support the project directly, feel free to open issues for icon suggestions, or contribute with a pull request!
