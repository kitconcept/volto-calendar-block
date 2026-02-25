# volto-calendar-block (@kitconcept/volto-calendar-block)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://kitconcept.com/kitconcept-white.svg">
  <img width="300" alt="kitconcept, GmbH" src="https://kitconcept.com/kitconcept-black.svg">
</picture>

A Volto add-on that provides an Event Calendar block for Plone sites. It queries Plone `Event` content types and renders them as a searchable, filterable calendar listing.

---

<img alt="Volto Calendar Block" src="https://github.com/user-attachments/assets/c4d00c60-9338-4f97-af2c-274faf96fb38">

---

## Features

- **Event listing block** — Registers an `eventCalendar` block that fetches and displays Plone `Event` objects in a card-based layout.
- **Date range picker** — Built with `react-aria-components`, allows visitors to filter events by a start and end date range directly in the block.
- **Search input** — Optional text search that runs live or is triggered by a dedicated search button, depending on the block configuration.
- **Facets** — Supports configurable Volto search facets rendered alongside the results, allowing further filtering by any indexed field.
- **Event cards** — Each event is displayed as a card with a prominent date inset (day and month), supporting multi-day events with both start and end dates.
- **Configurable sorting** — Defaults to sorting by `effective` date descending; sorting is automatically adjusted when a text search is active.
- **Headline** — Optional configurable headline text rendered above the search controls.
- **i18n ready** — All strings are defined with `react-intl` for full internationalization support.

## Installation

To install your project, you must choose the method appropriate to your version of Volto.


### Volto 18 and later

Add `@kitconcept/volto-calendar-block` to your `package.json`:

```json
"dependencies": {
    "@kitconcept/volto-calendar-block": "*"
}
```

Add `@kitconcept/volto-calendar-block` to your `volto.config.js`:

```javascript
const addons = ['@kitconcept/volto-calendar-block'];
```

If this package provides a Volto theme, and you want to activate it, then add the following to your `volto.config.js`:

```javascript
const theme = '@kitconcept/volto-calendar-block';
```

### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-calendar-block
cd my-volto-project
```

Add `@kitconcept/volto-calendar-block` to your package.json:

```JSON
"addons": [
    "@kitconcept/volto-calendar-block"
],

"dependencies": {
    "@kitconcept/volto-calendar-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start volto with:

```
yarn start
```

## Test installation

Visit http://localhost:3000/ in a browser, log in, and verify the Event Calendar block is available.


## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha).


### Prerequisites

-   An [operating system](https://6.docs.plone.org/install/create-project-cookieplone.html#prerequisites-for-installation) that runs all the requirements mentioned.
-   [nvm](https://6.docs.plone.org/install/create-project-cookieplone.html#nvm)
-   [Node.js and pnpm](https://6.docs.plone.org/install/create-project.html#node-js) 22
-   [Make](https://6.docs.plone.org/install/create-project-cookieplone.html#make)
-   [Git](https://6.docs.plone.org/install/create-project-cookieplone.html#git)
-   [Docker](https://docs.docker.com/get-started/get-docker/) (optional)

### Installation

1.  Clone this repository, then change your working directory.

    ```shell
    git clone git@github.com:kitconcept/volto-calendar-block.git
    cd volto-calendar-block
    ```

2.  Install this code base.

    ```shell
    make install
    ```


### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
```

### Development environment set up

Install package requirements.

```shell
make install
```

### Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### Unit tests

Run unit tests.

```shell
make test
```

### Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## License

The project is licensed under the MIT license.

## Credits and Acknowledgements 

Crafted with care by **[kitconcept GmbH](https://kitconcept.com)**. Generated using [Cookieplone (0.9.10)](https://github.com/plone/cookieplone) and [cookieplone-templates (888ff69)](https://github.com/plone/cookieplone-templates/commit/888ff6948a43d8b962f4900ba1770f876e2f0243) on 2025-11-03 16:30:46.747555. A special thanks to all contributors and supporters!
