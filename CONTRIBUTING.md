# CONTRIBUTING

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. Thanks again!

1. Create and describe your proposal in an issue
2. Create a new branch AND merge request with the pattern issue/MY_FEATURE
3. Write your tests BEFORE your code, MERGE REQUESTS WITHOUT TEST WILL BE REJECTED
4. Commit your code using coventional commit, COMMITS OUTSIDE THE CONVENTIONAL WILL BE REJECTED
5. Write a docs for your changes, MERGE REQUESTS WITHOUT DOCS WILL BE REJECTED

## Commits Types

- feat: (new feature for the user, not a new feature for build script)
- fix: (bug fix for the user, not a fix to a build script)
- docs: (changes to the documentation)
- style: (formatting, missing semi colons, etc; no production code change)
- refactor: (refactoring production code, eg. renaming a variable)
- test: (adding missing tests, refactoring tests; no production code change)
- chore: (updating grunt tasks etc; no production code change)
- perf: A code change that improves performance

## Helps us to Translate

This tutorial will walk you through the basics of the Docusaurus i18n system.

1 - Add your language in this file ´./docusaurus.config.js´ following this pattern

```js

i18n: {
    defaultLocale: "en",
    locales: ["en", "pt", "fr", "es"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
      pt: {
        label: "Português",
        direction: "ltr",
        htmlLang: "pt-BR",
      },
      fr: {
        label: "Français",
        direction: "ltr",
        htmlLang: "fr-FR",
      },
      es: {
        label: "Español",
        direction: "ltr",
        htmlLang: "es-ES",
      },
    }
```

2 - Start the Telescope in dev mode, using the locale of your choice:

```bash
yarn run start -- --locale fr
```

Your site is accessible at <http://localhost:3000/fr/>.

3 - Translate the Telescope

All translation data for the French locale is stored in website/i18n/fr. Each plugin sources its own translated content under the corresponding folder, while the code.json file defines all text labels used in the React code.

To Translate a especific word with don't appear in the folder make this:

```js
<Translate>Welcome to my website</Translate>
```

Use `<Translate>` and `</Translate>`

After this run this command, to set up the word in the folder of translate:

```bash
yarn run write-translations -- --locale fr
```

Each language there be a folder called `code.json` with this translate will be forwarded.

4 - Translate a Markdown File

Translate Markdown files
Official Docusaurus content plugins extensively use Markdown/MDX files and allow you to translate them.

Translate the docs
Copy your docs Markdown files from docs/ to i18n/fr/docusaurus-plugin-content-docs/current, and translate them:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current
```

Translate the blog
Copy your blog Markdown files to i18n/fr/docusaurus-plugin-content-blog, and translate them:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-blog
cp -r blog/** i18n/fr/docusaurus-plugin-content-blog
```

Translate the pages
Copy your pages Markdown files to i18n/fr/docusaurus-plugin-content-pages, and translate them:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-pages
cp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages
```
