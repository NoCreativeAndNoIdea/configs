<h1 style='text-align: center;'>Config monorepo</h1>  

Config monorepo of code style and project style.
* ESLint
* Prettier
* Editorconfig
* GitHooks

## Usage

### Code style

#### Eslint

Install  
* JavaScript  
`pnpm add eslint @ideaair/eslint-config @types/eslint -D`   
* TypeScript  
`pnpm add eslint @ideaair/eslint-config-ts @types/eslint -D`
* React  
`pnpm add eslint @ideaair/eslint-config-react @types/eslint -D`
* Vue  
`pnpm add eslint @ideaair/eslint-config-vue @types/eslint -D`

Configs  
`.eslintrc.js`
```js
/**
 * @type {import(eslint).Linter.Config}
 */
const configs = {
    extends: [
        "@ideaair/eslint-config" // JavaScript
         // "@ideaair/eslint-config-ts" // TypeScript
         // "@ideaair/eslint-config-react" // React
         // "@ideaair/eslint-config-vue" // Vue
    ]
} 
modules.exports = configs
```

`packages.json`
```json
{
    // ...
    "scripts": {
        "lint": "eslint",
        "lint:fix": "eslint . --fix",
    }
}
```

#### Prettier

Install  
`pnpm add prettier eslint-plugin-prettier eslint-config-prettier`

`.eslintrc.js`
```js
/**
 * @type {import(eslint).Linter.Config}
 */
const configs = {
    extends: [
        // merge up eslint config
       "prettier"
    ],
    plugins: [
        "prettier" 
    ],
    rules: {
        "prettier/prettier": "error"
    }
}

modules.exports = configs
```

`.prettier.json`
```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

#### Editorconfig

`.editorconfig`
```editorconfig
root = true

[*]
charset=utf-8
end_of_line=lf
insert_final_newline=true
indent_style=space
indent_size=2
max_line_length = 100

[*.{yml,yaml,json}]
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```
