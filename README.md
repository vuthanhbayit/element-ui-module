# @vt7/element-ui-module

> Add [ElementUI](https://github.com/ElemeFE/element) A Vue.js 2.0 UI Toolkit for Web to Nuxt.

## Setup

- Add `@vt7/element-ui-module` dependency using yarn or npm to your project

```shell
yarn add @vt7/element-ui-module
```

- Add `@vt7/element-ui-module` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    '@vt7/element-ui-module'
  ],

  elementUI: {
    components: ['Button', 'Input'],
    locale: 'vi',
  },
}
```

or

```js
{
  modules: [
    [
      '@vt7/element-ui-module',
      {
        components: ['Button', 'Input'],
        locale: 'vi',
      },
    ],
  ],
}
```

## Options

### `components`

- **optional**
- Type: `string[]`
- Default: `[]`

Adds specific **ElementUI Components** to your project. If `components` is empty, all components will be imported.

### `locale`

- **optional**
- Type: `string`
- Default: `en`

Sets elementUI locale globally.

### `i18n`

- **optional**
- Type: `Boolean`
- Default: false

Add 
```js
export default function({ app }) {
  ElementLocale.i18n((key, value) => app.i18n.t(key, value));
}
```

### `customVariable`

- **optional**
- Type: `string`
- Default: ``
- Example:
```js
elementUI: {
  customVariable: '~/assets/scss/element-ui.scss',
}
```

- Build: element-ui.scss
```scss
/* icon font path, required */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import '~/assets/scss/element-ui.scss';
@import '~element-ui/packages/theme-chalk/src/index.scss';
```

## Usage

Simply use **ElementUI Components** inside your single file components.

`my-component.vue`:

```html
<template>
<el-button>Button</el-button>
</template>
```

## License
