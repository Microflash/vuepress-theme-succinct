# Succinct

A slightly opinionated theme for Vuepress

## Development

> **Requirements** Ensure that [Node.js](https://nodejs.org/en/download/) >= 8 and [yarn](https://yarnpkg.com/en/) are installed and accessible on your machine. **Yarn** is the recommended package manager but **npm** can also be used instead.

1. Clone this project.
2. `cd vuepress-theme-succinct`
3. `yarn` or `npm i`
4. Serve the project with `yarn start` or `npm start`.
5. Build the project with `yarn build` or `npm run build`.

> **Note** Use [traceback](./TRACEBACK.md) to recreate this project.

## Deployment

### Publish

The NPM package for this project `docs/.vuepress/theme` is published on NPM at <https://www.npmjs.com/package/vuepress-theme-succinct>.

1. `cd docs/.vuepress/theme`
2. `npm publish`

> To preview the publish, use `npm publish --dry-run`

### Documentation

The documentation of this project is published on this project's [GitHub Pages](https://github.com/Microflash/vuepress-theme-succinct).

1. `yarn build` or `npm run build`
2. `cd docs/.vuepress/theme`
3. `git add .`
4. `git commit -m <message>`
5. `git push`
