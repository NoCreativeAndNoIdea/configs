# Eslint basic config
A basic eslint config, Use unify JavaScript code style 、JSON file style 、package.json key sort.

## JavaScript
> Use format `JavaScript` code style.

Extends plugins:
* [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
* [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)
* [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
* [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## JSON 
> JSON parser github address: https://github.com/ota-meshi/jsonc-eslint-parser  
> Plugin github address : https://github.com/ota-meshi/eslint-plugin-jsonc

Use default jsonc-plugin rules, not custom config.

## `package.json` sort 
> Custom key sort.

```text
  'publisher',
  'name',
  'displayName',
  'type',
  'version',
  'private',
  'packageManager',
  'description',
  'author',
  'license',
  'funding',
  'homepage',
  'repository',
  'bugs',
  'keywords',
  'categories',
  'sideEffects',
  'exports',
  'main',
  'module',
  'unpkg',
  'jsdelivr',
  'types',
  'typesVersions',
  'bin',
  'icon',
  'files',
  'engines',
  'activationEvents',
  'contributes',
  'scripts',
  'peerDependencies',
  'peerDependenciesMeta',
  'dependencies',
  'optionalDependencies',
  'devDependencies',
  'pnpm',
  'overrides',
  'resolutions',
  'husky',
  'simple-git-hooks',
  'lint-staged',
  'eslintConfig',
```
