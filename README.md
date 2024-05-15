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

Here's a list of all the icons currently supported. Feel free to open an issue to suggest icons to add!

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
|     `ableton`      |    <img src="./src/icons/Ableton-Dark.svg" width="48">    |
|   `activitypub`    |  <img src="./src/icons/ActivityPub-Dark.svg" width="48">  |
|      `actix`       |     <img src="./src/icons/Actix-Dark.svg" width="48">     |
|      `adonis`      |       <img src="./src/icons/Adonis.svg" width="48">       |
|        `ae`        |    <img src="./src/icons/AfterEffects.svg" width="48">    |
|     `aiscript`     |   <img src="./src/icons/AiScript-Dark.svg" width="48">    |
|     `alpinejs`     |   <img src="./src/icons/AlpineJS-Dark.svg" width="48">    |
|     `anaconda`     |   <img src="./src/icons/Anaconda-Dark.svg" width="48">    |
|  `androidstudio`   | <img src="./src/icons/AndroidStudio-Dark.svg" width="48"> |
|     `angular`      |    <img src="./src/icons/Angular-Dark.svg" width="48">    |
|     `ansible`      |      <img src="./src/icons/Ansible.svg" width="48">       |
|      `apollo`      |       <img src="./src/icons/Apollo.svg" width="48">       |
|      `apple`       |     <img src="./src/icons/Apple-Dark.svg" width="48">     |
|     `appwrite`     |      <img src="./src/icons/Appwrite.svg" width="48">      |
|       `arch`       |     <img src="./src/icons/Arch-Dark.svg" width="48">      |
|     `arduino`      |      <img src="./src/icons/Arduino.svg" width="48">       |
|      `astro`       |       <img src="./src/icons/Astro.svg" width="48">        |
|       `atom`       |        <img src="./src/icons/Atom.svg" width="48">        |
|        `au`        |      <img src="./src/icons/Audition.svg" width="48">      |
|     `autocad`      |    <img src="./src/icons/AutoCAD-Dark.svg" width="48">    |
|       `aws`        |      <img src="./src/icons/AWS-Dark.svg" width="48">      |
|       `azul`       |        <img src="./src/icons/Azul.svg" width="48">        |
|      `azure`       |     <img src="./src/icons/Azure-Dark.svg" width="48">     |
|      `babel`       |       <img src="./src/icons/Babel.svg" width="48">        |
|       `bash`       |     <img src="./src/icons/Bash-Dark.svg" width="48">      |
|       `bevy`       |     <img src="./src/icons/Bevy-Dark.svg" width="48">      |
|    `bitbucket`     |   <img src="./src/icons/BitBucket-Dark.svg" width="48">   |
|     `blender`      |    <img src="./src/icons/Blender-Dark.svg" width="48">    |
|    `bootstrap`     |     <img src="./src/icons/Bootstrap.svg" width="48">      |
|       `bsd`        |      <img src="./src/icons/BSD-Dark.svg" width="48">      |
|       `bun`        |      <img src="./src/icons/Bun-Dark.svg" width="48">      |
|        `c`         |         <img src="./src/icons/C.svg" width="48">          |
|        `cs`        |         <img src="./src/icons/CS.svg" width="48">         |
|       `cpp`        |        <img src="./src/icons/CPP.svg" width="48">         |
|     `crystal`      |    <img src="./src/icons/Crystal-Dark.svg" width="48">    |
|    `cassandra`     |   <img src="./src/icons/Cassandra-Dark.svg" width="48">   |
|      `clion`       |     <img src="./src/icons/CLion-Dark.svg" width="48">     |
|     `clojure`      |    <img src="./src/icons/Clojure-Dark.svg" width="48">    |
|    `cloudflare`    |  <img src="./src/icons/Cloudflare-Dark.svg" width="48">   |
|      `cmake`       |     <img src="./src/icons/CMake-Dark.svg" width="48">     |
|     `codepen`      |    <img src="./src/icons/CodePen-Dark.svg" width="48">    |
|   `coffeescript`   | <img src="./src/icons/CoffeeScript-Dark.svg" width="48">  |
|       `css`        |        <img src="./src/icons/CSS.svg" width="48">         |
|     `cypress`      |    <img src="./src/icons/Cypress-Dark.svg" width="48">    |
|        `d3`        |      <img src="./src/icons/D3-Dark.svg" width="48">       |
|       `dart`       |     <img src="./src/icons/Dart-Dark.svg" width="48">      |
|      `debian`      |    <img src="./src/icons/Debian-Dark.svg" width="48">     |
|       `deno`       |     <img src="./src/icons/DENO-Dark.svg" width="48">      |
|      `devto`       |     <img src="./src/icons/DevTo-Dark.svg" width="48">     |
|     `discord`      |      <img src="./src/icons/Discord.svg" width="48">       |
|       `bots`       |    <img src="./src/icons/DiscordBots.svg" width="48">     |
|    `discordjs`     |   <img src="./src/icons/DiscordJS-Dark.svg" width="48">   |
|      `django`      |       <img src="./src/icons/Django.svg" width="48">       |
|      `docker`      |       <img src="./src/icons/Docker.svg" width="48">       |
|      `dotnet`      |       <img src="./src/icons/DotNet.svg" width="48">       |
|     `dynamodb`     |   <img src="./src/icons/DynamoDB-Dark.svg" width="48">    |
|     `eclipse`      |    <img src="./src/icons/Eclipse-Dark.svg" width="48">    |
|  `elasticsearch`   | <img src="./src/icons/Elasticsearch-Dark.svg" width="48"> |
|     `electron`     |      <img src="./src/icons/Electron.svg" width="48">      |
|      `elixir`      |    <img src="./src/icons/Elixir-Dark.svg" width="48">     |
|      `elysia`      |    <img src="./src/icons/Elysia-Dark.svg" width="48">     |
|      `emacs`       |       <img src="./src/icons/Emacs.svg" width="48">        |
|      `ember`       |       <img src="./src/icons/Ember.svg" width="48">        |
|     `emotion`      |    <img src="./src/icons/Emotion-Dark.svg" width="48">    |
|     `express`      |   <img src="./src/icons/ExpressJS-Dark.svg" width="48">   |
|     `fastapi`      |      <img src="./src/icons/FastAPI.svg" width="48">       |
|    `fediverse`     |   <img src="./src/icons/Fediverse-Dark.svg" width="48">   |
|      `figma`       |     <img src="./src/icons/Figma-Dark.svg" width="48">     |
|     `firebase`     |   <img src="./src/icons/Firebase-Dark.svg" width="48">    |
|      `flask`       |     <img src="./src/icons/Flask-Dark.svg" width="48">     |
|     `flutter`      |    <img src="./src/icons/Flutter-Dark.svg" width="48">    |
|      `forth`       |       <img src="./src/icons/Forth.svg" width="48">        |
|     `fortran`      |      <img src="./src/icons/Fortran.svg" width="48">       |
| `gamemakerstudio`  |  <img src="./src/icons/GameMakerStudio.svg" width="48">   |
|      `gatsby`      |       <img src="./src/icons/Gatsby.svg" width="48">       |
|       `gcp`        |      <img src="./src/icons/GCP-Dark.svg" width="48">      |
|       `git`        |        <img src="./src/icons/Git.svg" width="48">         |
|      `github`      |    <img src="./src/icons/Github-Dark.svg" width="48">     |
|  `githubactions`   | <img src="./src/icons/GithubActions-Dark.svg" width="48"> |
|      `gitlab`      |    <img src="./src/icons/GitLab-Dark.svg" width="48">     |
|      `gmail`       |     <img src="./src/icons/Gmail-Dark.svg" width="48">     |
|     `gherkin`      |    <img src="./src/icons/Gherkin-Dark.svg" width="48">    |
|        `go`        |       <img src="./src/icons/GoLang.svg" width="48">       |
|      `gradle`      |    <img src="./src/icons/Gradle-Dark.svg" width="48">     |
|      `godot`       |     <img src="./src/icons/Godot-Dark.svg" width="48">     |
|     `grafana`      |    <img src="./src/icons/Grafana-Dark.svg" width="48">    |
|     `graphql`      |    <img src="./src/icons/GraphQL-Dark.svg" width="48">    |
|       `gtk`        |      <img src="./src/icons/GTK-Dark.svg" width="48">      |
|       `gulp`       |        <img src="./src/icons/Gulp.svg" width="48">        |
|     `haskell`      |    <img src="./src/icons/Haskell-Dark.svg" width="48">    |
|       `haxe`       |     <img src="./src/icons/Haxe-Dark.svg" width="48">      |
|    `haxeflixel`    |  <img src="./src/icons/HaxeFlixel-Dark.svg" width="48">   |
|      `heroku`      |       <img src="./src/icons/Heroku.svg" width="48">       |
|    `hibernate`     |   <img src="./src/icons/Hibernate-Dark.svg" width="48">   |
|       `html`       |        <img src="./src/icons/HTML.svg" width="48">        |
|       `htmx`       |     <img src="./src/icons/Htmx-Dark.svg" width="48">      |
|       `idea`       |     <img src="./src/icons/Idea-Dark.svg" width="48">      |
|        `ai`        |    <img src="./src/icons/Illustrator.svg" width="48">     |
|    `instagram`     |     <img src="./src/icons/Instagram.svg" width="48">      |
|       `ipfs`       |     <img src="./src/icons/IPFS-Dark.svg" width="48">      |
|       `java`       |     <img src="./src/icons/Java-Dark.svg" width="48">      |
|        `js`        |     <img src="./src/icons/JavaScript.svg" width="48">     |
|     `jenkins`      |    <img src="./src/icons/Jenkins-Dark.svg" width="48">    |
|       `jest`       |        <img src="./src/icons/Jest.svg" width="48">        |
|      `jquery`      |       <img src="./src/icons/JQuery.svg" width="48">       |
|      `kafka`       |       <img src="./src/icons/Kafka.svg" width="48">        |
|       `kali`       |     <img src="./src/icons/Kali-Dark.svg" width="48">      |
|      `kotlin`      |    <img src="./src/icons/Kotlin-Dark.svg" width="48">     |
|       `ktor`       |     <img src="./src/icons/Ktor-Dark.svg" width="48">      |
|    `kubernetes`    |     <img src="./src/icons/Kubernetes.svg" width="48">     |
|     `laravel`      |    <img src="./src/icons/Laravel-Dark.svg" width="48">    |
|      `latex`       |     <img src="./src/icons/LaTeX-Dark.svg" width="48">     |
|       `less`       |     <img src="./src/icons/Less-Dark.svg" width="48">      |
|     `linkedin`     |      <img src="./src/icons/LinkedIn.svg" width="48">      |
|      `linux`       |     <img src="./src/icons/Linux-Dark.svg" width="48">     |
|       `lit`        |      <img src="./src/icons/Lit-Dark.svg" width="48">      |
|       `lua`        |      <img src="./src/icons/Lua-Dark.svg" width="48">      |
|        `md`        |   <img src="./src/icons/Markdown-Dark.svg" width="48">    |
|     `mastodon`     |   <img src="./src/icons/Mastodon-Dark.svg" width="48">    |
|    `materialui`    |  <img src="./src/icons/MaterialUI-Dark.svg" width="48">   |
|      `matlab`      |    <img src="./src/icons/Matlab-Dark.svg" width="48">     |
|      `maven`       |     <img src="./src/icons/Maven-Dark.svg" width="48">     |
|       `mint`       |     <img src="./src/icons/Mint-Dark.svg" width="48">      |
|     `misskey`      |    <img src="./src/icons/Misskey-Dark.svg" width="48">    |
|     `mongodb`      |      <img src="./src/icons/MongoDB.svg" width="48">       |
|      `mysql`       |     <img src="./src/icons/MySQL-Dark.svg" width="48">     |
|      `neovim`      |    <img src="./src/icons/NeoVim-Dark.svg" width="48">     |
|      `nestjs`      |    <img src="./src/icons/NestJS-Dark.svg" width="48">     |
|     `netlify`      |    <img src="./src/icons/Netlify-Dark.svg" width="48">    |
|      `nextjs`      |    <img src="./src/icons/NextJS-Dark.svg" width="48">     |
|      `nginx`       |       <img src="./src/icons/Nginx.svg" width="48">        |
|       `nim`        |      <img src="./src/icons/Nim-Dark.svg" width="48">      |
|       `nix`        |      <img src="./src/icons/Nix-Dark.svg" width="48">      |
|      `nodejs`      |    <img src="./src/icons/NodeJS-Dark.svg" width="48">     |
|      `notion`      |    <img src="./src/icons/Notion-Dark.svg" width="48">     |
|       `npm`        |      <img src="./src/icons/Npm-Dark.svg" width="48">      |
|      `nuxtjs`      |    <img src="./src/icons/NuxtJS-Dark.svg" width="48">     |
|     `obsidian`     |   <img src="./src/icons/Obsidian-Dark.svg" width="48">    |
|      `ocaml`       |       <img src="./src/icons/OCaml.svg" width="48">        |
|      `octave`      |    <img src="./src/icons/Octave-Dark.svg" width="48">     |
|      `opencv`      |    <img src="./src/icons/OpenCV-Dark.svg" width="48">     |
|    `openshift`     |     <img src="./src/icons/OpenShift.svg" width="48">      |
|    `openstack`     |   <img src="./src/icons/OpenStack-Dark.svg" width="48">   |
|       `p5js`       |        <img src="./src/icons/p5js.svg" width="48">        |
|       `perl`       |        <img src="./src/icons/Perl.svg" width="48">        |
|        `ps`        |     <img src="./src/icons/Photoshop.svg" width="48">      |
|       `php`        |      <img src="./src/icons/PHP-Dark.svg" width="48">      |
|     `phpstorm`     |   <img src="./src/icons/PhpStorm-Dark.svg" width="48">    |
|      `pinia`       |     <img src="./src/icons/Pinia-Dark.svg" width="48">     |
|       `pkl`        |      <img src="./src/icons/Pkl-Dark.svg" width="48">      |
|      `plan9`       |     <img src="./src/icons/Plan9-Dark.svg" width="48">     |
|   `planetscale`    |  <img src="./src/icons/PlanetScale-Dark.svg" width="48">  |
|       `pnpm`       |     <img src="./src/icons/Pnpm-Dark.svg" width="48">      |
|     `postgres`     |  <img src="./src/icons/PostgreSQL-Dark.svg" width="48">   |
|     `postman`      |      <img src="./src/icons/Postman.svg" width="48">       |
|    `powershell`    |  <img src="./src/icons/Powershell-Dark.svg" width="48">   |
|        `pr`        |      <img src="./src/icons/Premiere.svg" width="48">      |
|      `prisma`      |       <img src="./src/icons/Prisma.svg" width="48">       |
|    `processing`    |  <img src="./src/icons/Processing-Dark.svg" width="48">   |
|    `prometheus`    |     <img src="./src/icons/Prometheus.svg" width="48">     |
|       `pug`        |      <img src="./src/icons/Pug-Dark.svg" width="48">      |
|     `pycharm`      |    <img src="./src/icons/PyCharm-Dark.svg" width="48">    |
|        `py`        |    <img src="./src/icons/Python-Dark.svg" width="48">     |
|     `pytorch`      |    <img src="./src/icons/PyTorch-Dark.svg" width="48">    |
|        `qt`        |      <img src="./src/icons/QT-Dark.svg" width="48">       |
|        `r`         |       <img src="./src/icons/R-Dark.svg" width="48">       |
|     `rabbitmq`     |   <img src="./src/icons/RabbitMQ-Dark.svg" width="48">    |
|      `rails`       |       <img src="./src/icons/Rails.svg" width="48">        |
|   `raspberrypi`    |  <img src="./src/icons/RaspberryPi-Dark.svg" width="48">  |
|      `react`       |     <img src="./src/icons/React-Dark.svg" width="48">     |
|    `reactivex`     |   <img src="./src/icons/ReactiveX-Dark.svg" width="48">   |
|      `redhat`      |    <img src="./src/icons/RedHat-Dark.svg" width="48">     |
|      `redis`       |     <img src="./src/icons/Redis-Dark.svg" width="48">     |
|      `redux`       |       <img src="./src/icons/Redux.svg" width="48">        |
|      `regex`       |     <img src="./src/icons/Regex-Dark.svg" width="48">     |
|      `remix`       |     <img src="./src/icons/Remix-Dark.svg" width="48">     |
|      `replit`      |    <img src="./src/icons/Replit-Dark.svg" width="48">     |
|      `rider`       |     <img src="./src/icons/Rider-Dark.svg" width="48">     |
|   `robloxstudio`   |    <img src="./src/icons/RobloxStudio.svg" width="48">    |
|      `rocket`      |       <img src="./src/icons/Rocket.svg" width="48">       |
|     `rollupjs`     |   <img src="./src/icons/RollupJS-Dark.svg" width="48">    |
|       `ros`        |      <img src="./src/icons/ROS-Dark.svg" width="48">      |
|       `ruby`       |        <img src="./src/icons/Ruby.svg" width="48">        |
|       `rust`       |        <img src="./src/icons/Rust.svg" width="48">        |
|       `sass`       |        <img src="./src/icons/Sass.svg" width="48">        |
|      `spring`      |    <img src="./src/icons/Spring-Dark.svg" width="48">     |
|      `sqlite`      |       <img src="./src/icons/SQLite.svg" width="48">       |
|  `stackoverflow`   | <img src="./src/icons/StackOverflow-Dark.svg" width="48"> |
| `styledcomponents` |  <img src="./src/icons/StyledComponents.svg" width="48">  |
|     `sublime`      |    <img src="./src/icons/Sublime-Dark.svg" width="48">    |
|     `supabase`     |   <img src="./src/icons/Supabase-Dark.svg" width="48">    |
|      `scala`       |     <img src="./src/icons/Scala-Dark.svg" width="48">     |
|     `sklearn`      |  <img src="./src/icons/ScikitLearn-Dark.svg" width="48">  |
|     `selenium`     |      <img src="./src/icons/Selenium.svg" width="48">      |
|      `sentry`      |       <img src="./src/icons/Sentry.svg" width="48">       |
|    `sequelize`     |   <img src="./src/icons/Sequelize-Dark.svg" width="48">   |
|     `sketchup`     |   <img src="./src/icons/Sketchup-Dark.svg" width="48">    |
|     `solidity`     |      <img src="./src/icons/Solidity.svg" width="48">      |
|     `solidjs`      |    <img src="./src/icons/SolidJS-Dark.svg" width="48">    |
|      `svelte`      |       <img src="./src/icons/Svelte.svg" width="48">       |
|       `svg`        |      <img src="./src/icons/SVG-Dark.svg" width="48">      |
|      `swift`       |       <img src="./src/icons/Swift.svg" width="48">        |
|     `symfony`      |    <img src="./src/icons/Symfony-Dark.svg" width="48">    |
|     `tailwind`     |  <img src="./src/icons/TailwindCSS-Dark.svg" width="48">  |
|      `tauri`       |     <img src="./src/icons/Tauri-Dark.svg" width="48">     |
|    `tensorflow`    |  <img src="./src/icons/TensorFlow-Dark.svg" width="48">   |
|    `terraform`     |   <img src="./src/icons/Terraform-Dark.svg" width="48">   |
|     `threejs`      |    <img src="./src/icons/ThreeJS-Dark.svg" width="48">    |
|     `twitter`      |      <img src="./src/icons/Twitter.svg" width="48">       |
|        `ts`        |     <img src="./src/icons/TypeScript.svg" width="48">     |
|      `ubuntu`      |    <img src="./src/icons/Ubuntu-Dark.svg" width="48">     |
|      `unity`       |     <img src="./src/icons/Unity-Dark.svg" width="48">     |
|      `unreal`      |    <img src="./src/icons/UnrealEngine.svg" width="48">    |
|        `v`         |       <img src="./src/icons/V-Dark.svg" width="48">       |
|       `vala`       |        <img src="./src/icons/Vala.svg" width="48">        |
|      `vercel`      |    <img src="./src/icons/Vercel-Dark.svg" width="48">     |
|       `vim`        |      <img src="./src/icons/VIM-Dark.svg" width="48">      |
|   `visualstudio`   | <img src="./src/icons/VisualStudio-Dark.svg" width="48">  |
|       `vite`       |     <img src="./src/icons/Vite-Dark.svg" width="48">      |
|      `vitest`      |    <img src="./src/icons/Vitest-Dark.svg" width="48">     |
|      `vscode`      |    <img src="./src/icons/VSCode-Dark.svg" width="48">     |
|     `vscodium`     |   <img src="./src/icons/VSCodium-Dark.svg" width="48">    |
|       `vue`        |     <img src="./src/icons/VueJS-Dark.svg" width="48">     |
|     `vuetify`      |    <img src="./src/icons/Vuetify-Dark.svg" width="48">    |
|       `wasm`       |    <img src="./src/icons/WebAssembly.svg" width="48">     |
|     `webflow`      |      <img src="./src/icons/Webflow.svg" width="48">       |
|     `webpack`      |    <img src="./src/icons/Webpack-Dark.svg" width="48">    |
|     `webstorm`     |   <img src="./src/icons/WebStorm-Dark.svg" width="48">    |
|     `windicss`     |   <img src="./src/icons/WindiCSS-Dark.svg" width="48">    |
|     `windows`      |    <img src="./src/icons/Windows-Dark.svg" width="48">    |
|    `wordpress`     |     <img src="./src/icons/Wordpress.svg" width="48">      |
|     `workers`      |    <img src="./src/icons/Workers-Dark.svg" width="48">    |
|        `xd`        |         <img src="./src/icons/XD.svg" width="48">         |
|       `yarn`       |     <img src="./src/icons/Yarn-Dark.svg" width="48">      |
|       `yew`        |      <img src="./src/icons/Yew-Dark.svg" width="48">      |
|       `zig`        |      <img src="./src/icons/Zig-Dark.svg" width="48">      |

---

## 💖 Support the Project

To support the project directly, feel free to open issues for icon suggestions, or contribute with a pull request!
