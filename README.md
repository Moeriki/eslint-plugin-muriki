# ESLint Plugin Muriki

This plugin exposes the ESLint configuration of [eslint-config-muriki](/moeriki/eslint-config-muriki) without the need of declaring all its dependencies.

## Setup

```
npm install --save-dev eslint eslint-plugin-muriki
```

Extend the default config.

```js
module.exports = { extends: 'plugin:muriki/recommended' };
```

## Rule configuration

You can configure the rules like every other plugin. Just keep in mind that if you want to change a rule of an included plugin (for example of `eslint-plugin-import`) you must prefix the rule with `muriki/` (to prevent namespace collisions).

For example:

```js
module.exports = {
  extends: 'plugin:muriki/recommended',
  rules: { "muriki/import/no-unresolved": 'off' }
}
```

## Included plugins  

The currently included plugins are the following:

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-jasmine](https://github.com/tlvince/eslint-plugin-jasmine)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
