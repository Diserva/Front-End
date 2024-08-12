- commit message should be started with:

  - `[+]` - something added
  - `[-]` - something removed
  - `[f]` - something fixed
  - `[u]` - something updated
  - `[r]` - something refactored

- use stylelint
- use eslint (pnpm run lint), run lint:fix before committing!
- don't use default imports/exports. except in situations where they are really necessary
- use @ imports
- do not push to `main` branch, use `dev` branch
- commits should be as small as possible
- 10 little commits are better then 1 big commit
- don't split changes too much. if you've done exactly ONE thing = don't split it into multiple commits.