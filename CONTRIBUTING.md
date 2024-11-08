# Contributing

Directory structure:

```
BlockNote
├── packages/core        - The core of the editor, which includes all logic to get the editor running in vanilla JS.
├── packages/react       - A React wrapper and UI for the editor. Requires additional components for the UI.
├── packages/ariakit     - UI components for the `react` package, made with Ariakit.
├── packages/mantine     - UI components for the `react` package, made with Mantine.
├── packages/shadcn      - UI components for the `react` package, made with Shadcn.
├── packages/server-util - Utilities for converting BlockNote documents into static HTML for server-side rendering.
├── packages/dev-scripts - A set of tools for converting example editor setups into components for the BlockNote website.
├── examples             - Example editor setups used for demos in the BlockNote website and playground.
├── docs                 - Code for the BlockNote website.
├── playground           - A basic page where you can quickly test each of the example editor setups.
└── tests                - Playwright end to end tests.
```

An introduction into the BlockNote Prosemirror schema can be found in [packages/core/src/pm-nodes/README.md](https://github.com/TypeCellOS/BlockNote/blob/main/packages/core/src/pm-nodes/README.md).

## Running

To run the project, open the command line in the project's root directory and enter the following commands:

    # Install all required npm modules for lerna, and bootstrap lerna packages
    npm install
    npm run bootstrap

    # Start the example project
    npm start

## Adding packages

- Add the dependency to the relevant `package.json` file (packages/xxx/package.json)
- run `npm run install-new-packages`
- Double check `package-lock.json` to make sure only the relevant packages have been affected

## Packages:

| Package                                                                                          | Size                                                                                                                                                                                          | Version                                                                                                                                            |
|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| [@endexai/blocknote-core](https://github.com/TypeCellOS/BlockNote/tree/main/packages/core)               | <a href="https://bundlephobia.com/result?p=@endexai/blocknote-core@latest"><img src="https://img.shields.io/bundlephobia/minzip/@endexai/blocknote-core?color=%238ab4f8&label=gzip%20size"></a>               | <a href="https://www.npmjs.com/package/@endexai/blocknote-core"><img src="https://img.shields.io/npm/v/@endexai/blocknote-core.svg?color=%23c1a8e2"></a>           |
| [@endexai/blocknote-react](https://github.com/TypeCellOS/BlockNote/tree/main/packages/react)             | <a href="https://bundlephobia.com/result?p=@endexai/blocknote-react@latest"><img src="https://img.shields.io/bundlephobia/minzip/@endexai/blocknote-react?color=%238ab4f8&label=gzip%20size"></a>             | <a href="https://www.npmjs.com/package/@endexai/blocknote-react"><img src="https://img.shields.io/npm/v/@endexai/blocknote-react?color=%23c1a8e2"></a>             |
| [@endexai/blocknote-ariakit](https://github.com/TypeCellOS/BlockNote/tree/main/packages/ariakit)         | <a href="https://bundlephobia.com/result?p=@endexai/blocknote-ariakit@latest"><img src="https://img.shields.io/bundlephobia/minzip/@endexai/blocknote-ariakit?color=%238ab4f8&label=gzip%20size"></a>         | <a href="https://www.npmjs.com/package/@endexai/blocknote-ariakit"><img src="https://img.shields.io/npm/v/@endexai/blocknote-ariakit?color=%23c1a8e2"></a>         |
| [@endexai/blocknote-mantine](https://github.com/TypeCellOS/BlockNote/tree/main/packages/mantine)         | <a href="https://bundlephobia.com/result?p=@endexai/blocknote-mantine@latest"><img src="https://img.shields.io/bundlephobia/minzip/@endexai/blocknote-mantine?color=%238ab4f8&label=gzip%20size"></a>         | <a href="https://www.npmjs.com/package/@endexai/blocknote-mantine"><img src="https://img.shields.io/npm/v/@endexai/blocknote-mantine?color=%23c1a8e2"></a>         |
| [@endexai/blocknote-shadcn](https://github.com/TypeCellOS/BlockNote/tree/main/packages/shadcn)           | <a href="https://bundlephobia.com/result?p=@endexai/blocknote-shadcn@latest"><img src="https://img.shields.io/bundlephobia/minzip/@endexai/blocknote-shadcn?color=%238ab4f8&label=gzip%20size"></a>           | <a href="https://www.npmjs.com/package/@endexai/blocknote-shadcn"><img src="https://img.shields.io/npm/v/@endexai/blocknote-shadcn?color=%23c1a8e2"></a>           |
| [@endexai/blocknote-server-util](https://github.com/TypeCellOS/BlockNote/tree/main/packages/server-util) | <a href="https://bundlephobia.com/result?p=@endexai/blocknote-server-util@latest"><img src="https://img.shields.io/bundlephobia/minzip/@endexai/blocknote-server-util?color=%238ab4f8&label=gzip%20size"></a> | <a href="https://www.npmjs.com/package/@endexai/blocknote-server-util"><img src="https://img.shields.io/npm/v/@endexai/blocknote-server-util?color=%23c1a8e2"></a> |
