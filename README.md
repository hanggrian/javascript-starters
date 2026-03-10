# JavaScript Starters

![Logo](https://github.com/hanggrian/javascript-starters/raw/assets/logo.png)

Common Node project templates with emphasis on **JavaScript,** separated by
target platform and kind of distribution.

| | Testing | Publishing | Website
--- | :---: | :---: | :---:
react-application | [Vitest] | &cross; | [Just the Docs]
react-library | [Vitest] | [Package Manager] | [JSDoc], [Just the Docs]

## Frameworks

- [Vite](https://vite.dev/) build tool with Vitest testing framework.
- [ESLint](https://eslint.org/) code linter.
- Coverage command included in Vitest.

## Project layout

- Root directory:
  - GitHub [README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes/),
    [LICENSE](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository/),
    and [gitignore](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files/)
    file.
  - [EditorConfig](https://editorconfig.org/) enforces IDE settings.
- [CircleCI](https://circleci.com/) workflow:
  - Run tests, linters and push coverage to [Codecov](https://codecov.io/).
  - Activate [Renovate](https://docs.renovatebot.com/) bot to alert out-of-date
    dependencies.
- [PNPM](https://pnpm.io/) package manager:
  - `package.json` with modern ESM syntax.
  - `pnpm-lock.yaml` for deterministic dependencies.
- Website module:
  - [Jekyll](https://jekyllrb.com/) for generating webpages displaying README
    and other content.
  - The webpages are manually deployed with `jekyll build`.

[Vitest]: https://vitest.dev/
[Package Manager]: https://www.npmjs.com/
[JSDoc]: https://jsdoc.app/
[Just the Docs]: https://just-the-docs.com/
