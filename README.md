# schedio-design

[Spartan's design system](https://spartanbio-design.netlify.com).

Built for [Vue](https://vuejs.org) with [Theo](https://github.com/salesforce-ux/theo) and
[SCSS](https://sass-lang.com/). Documented with [Storybook](https://storybook.js.org).

## Requirements

- Node 8.11.4+
- Vue 2.5+
- @vue/cli 3.0.5+

## Installation

```bash
$ npm install gitlab:spartanbio-marketing/schedio
```

## Usage

Import and register all components globally:

```js
import Vue from 'vue'
import Schedio from 'schedio-design'
import 'schedio-design/dist/schedio-design.css'

Vue.use(Schedio)
```

Or, import and register individual components:

```js
import Vue from 'vue'
import SButton from 'schedio-design/dist/components/SButton'
import SContainer from 'schedio-design/dist/components/SContainer'
import 'schedio-design/dist/schedio-design.css'

Vue.use(SButton)
Vue.use(SContainer)
```

## Dev setup

```bash
$ git clone https://gitlab.com/spartanbio-marketing/schedio.git
$ cd schedio && npm install

# work should not be committed to master
$ git checkout -b <feature-branch>
```

> Make sure to run the terminal as an administrator.

`@` and `~` have been aliased to `src/` in webpack. `@@` and `~~` have also been aliased to the
project root.

### Build tokens and hot-reload for component development

```bash
# Build Theo tokens
$ npm run theo

# Served at localhost:6006
# Watches Vue components, SCSS, Storybook stories, and Theo tokens
$ npm run dev

# Scaffold a new component/story in src/components/<ComponentName>
# The following files will be created:
# + index.js
# + ComponentName.scss
# + ComponentName.stories.jsx
# + ComponentName.vue
$ npm run scaffold <ComponentName>
```

### Compile and minify component library for production

```bash
$ npm run build
```

### Builds docs for deploy

```bash
$ npm run build:storybook
```

### Lint and fix

```bash
$ npm run lint
```

### Tests
```bash
# run all tests
$ npm test

# run unit tests
$ npm run test:unit
```

## Contributing

This project uses [conventional commits](https://conventionalcommits.org/) to automatically generate
change logs, and tag releases.
