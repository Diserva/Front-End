# Start

## Run frontend for development

```shell
 git clone https://github.com/Diserva/diserva_frontend.git
 cd diserva_frontend
 npm install 
 npm run dev
```

## Roadmap

- [roadmap](https://www.notion.so/e3b85dc64148454ebf0bd6ee4a57fbc7?v=0ffa3c181e5e46b2a7ab2cf64a2ce463)

## Figma team invite

- [figma](https://www.figma.com/team_invite/redeem/7u3GKeRKsNYXARFxhxmI5Q)

## Rules
You must follow these rules

### Commit
Сommit message must be started with:

  - `[+]` - something added
  - `[-]` - something removed
  - `[f]` - something fixed
  - `[u]` - something updated
  - `[r]` - something refactored

you can see all commit rules [here](https://github.com/Diserva/diserva_frontend/blob/main/CONTRIBUTING.md)

### Tasks
+ 1 take a task in notion 
+ 2 create a branch with the `task number` and short title 
+ 3 develop in this branch
+ 4 make a pull request

if pull request is rejected, continue development on the same branch until pull request is accepted

### Writing code
- write clear and clean code
- use types and interfaces
  all components must have `IProps{componentName}`
- use const/let when you use a value more than once
- format code before adding to a commit
- be sure to use eslint and prittierrc
- namming
  + if a variable has a boolean value, its name must begin with is or has
    * example:
    ```TypeScript
    // namming/example.boolean.ts

    const [isOpen, setOpen] = useState<boolean>(false);
    ...
    const hasValue: boolean = ...
    
    ```
  + for local function use `_` before name
    * example:

    ```TypeScript
    // namming/example.local.ts

    function _countLikes() {
     ...
    }
    
    ```
- use `index.ts` for import all stuff from folder
  * example:

    ```TypeScript
    // src/components/index.ts

    export * from './header';
    export * from './footer';
    ```

