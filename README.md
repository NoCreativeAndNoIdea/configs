<h1 style='text-align: center;'>Config monorepo</h1>  

Config monorepo of code style and project style.
* ESLint
* Prettier
* Editorconfig
* GitHooks

[toc]

## Usage

### Code style

#### Eslint

Install  
* JavaScript  
```shell 
 pnpm add eslint @ideaair/eslint-config @types/eslint -D
```   
* TypeScript  
```shell
pnpm add eslint @ideaair/eslint-config-ts @types/eslint -D
```
* React  
```shell
pnpm add eslint @ideaair/eslint-config-react @types/eslint -D
```
* Vue  
```shell
pnpm add eslint @ideaair/eslint-config-vue @types/eslint -D
```

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
```shell
pnpm add prettier eslint-plugin-prettier eslint-config-prettier
```

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

### Code manage style

#### Husky

Initialization  
```shell
pnpm install husky -D  &&
pnpm husky install     &&
pnpm pkg set scripts.prepare="husky install" && 
pnpm husky add .husky/pre-commit "pnpm lint:fix" &&
```

`.husky/pre-commit`
```shell
#!/bin/sh

pnpm lint:fix

# TODO: other operate
```

#### CommitLint

> Need husky support. Before install check husky it's installed. 

Install 
```shell
pnpm add -D @commitlint/config-conventional @commitlint/cli
```

Configs
1. Write rule to `commitlint.config.js`
   ```js
        const configs = {
            extends: ['@commitlint/config-conventional'],
            rules: {
                'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
                'subject-case': [2, 'always', 'sentence-case'],
            }
        }
        module.exports = configs
    ```
   * `type-enum` 
     * 此规则要求提交消息的类型必须是规定的值之一。
     * 2 表示这是一个错误级别，如果不符合规则，提交将被拒绝。'always' 表示规则总是被执行。
     * `['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']` 是规定的提交类型的列表，只有这些类型的提交消息是允许的。  

    * `subject-case` 
      * 此规则要求提交消息的主题（第一行）使用指定的大小写格式。
      * 在上面的配置中，我们使用 'sentence-case'，它表示提交消息的主题应该使用句子格式（首字母大写）。
2. Add git hooks
   ```shell
    pnpm pkg set scripts.commitlint="commitlint --edit" 
    pnpm husky add .husky/commit-msg 'npm run commitlint ${1}'
    ```
