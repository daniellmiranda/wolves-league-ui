# 🐺 Wolves League UI

Wolves League UI is a proof of concept of a component library.

## 🎯 Goals
The goal of this project is to create a component library (almost) from the ground up with these principles in mind:
- Accessibility
- Easy to Maintain/Develop
- Easy to Use
- No need for TailwindCSS in the project using this library

## 🏗️ Structure
This project is a monorepo using [Turborepo]('https://turbo.build/repo') and [PNPM Workspaces]('https://pnpm.io/workspaces').

These are the packages present in the `packages` folder:
- `docs`: Storybook app to showcase and document all components
- `eslint-config`: ESLint configuration and rules to be used by all other packages
- `react`: The actual implementation of the components using React
- `tokens`: Values related to styles separated from any framework or tool so it can be reused anywhere
- `ts-config`: TypeScript configuration to be used by all other packages

## 🔧 Tools
- [PNPM]('https://pnpm.io')
- [Turborepo]('https://turbo.build/repo')
- [Tsup]('https://tsup.egoist.dev')
- [Changesets]('https://github.com/changesets/changesets')
- [TypeScript]('https://www.typescriptlang.org')
- [ESLint]('https://eslint.org')
- [Prettier]('https://prettier.io')
- [React]('https://react.dev')
- [RadixUI]('https://www.radix-ui.com/primitives')
- [TailwindCSS]('https://tailwindcss.com')
- [Tailwind Variants]('https://www.tailwind-variants.org')
- [Storybook]('https://storybook.js.org')
- [Vitest]('https://vitest.dev')
- [React Testing Library]('https://testing-library.com/docs/react-testing-library/intro')
- [Happy Dom]('https://github.com/capricorn86/happy-dom')

## 🎨 Styles
Since I am not a designer, the styles applied to the components are purely based on my personal preferences, which may not align with established design guidelines.

## ⚙️ Development
### Development environment:
Run the following command to start the development environment, which includes watching all packages, including Storybook:
```bash
pnpm dev
```

### Lint
Use this command to run linting checks on the codebase:
```bash
pnpm lint
```
### Build
Execute this command to build the project:
```bash
pnpm build
```
### Version and release packages
To manage versioning and releases, follow these steps:

Run the Changesets CLI to choose which packages to version and add a description:
```bash
pnpm changeset
```
Change the versions of selected packages and creates CHANGELOG.md files:
```bash
pnpm version-packages
```
Publish the packages to NPM:
```bash
pnpm release
```
