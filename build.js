const { readdirSync, mkdirSync, readFileSync, writeFileSync, cpSync, rmSync } = require("fs");

// build icon set
const iconSet = {};
for (const iconFile of readdirSync("./src/icons")) {
  const iconName = iconFile.replace(".svg", "").toLocaleLowerCase();
  iconSet[iconName] = String(readFileSync(`./src/icons/${iconFile}`));
}

// prepare dist dir
rmSync("./dist", { recursive: true, force: true });
mkdirSync("./dist", { recursive: true });

// create files
writeFileSync("./dist/icons.json", JSON.stringify(iconSet));
cpSync("./src/worker", "./dist", { recursive: true });
cpSync("./README.md", "./dist/README.md", { force: true });
