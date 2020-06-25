# Contribution

## Versioning

LexStep projects use the semantic versioning system. Please see [this geeksforgeeks.org article](https://www.geeksforgeeks.org/introduction-semantic-versioning/) for a brief overview of semantic versioning.

## Git

### Commits

LexStep projects use [Conventional Commits](https://dev.to/maxpou/enhance-your-git-log-with-conventional-commits-3ea4)

To make it easier to work with conventional commits we recommend working with [Commitizen](https://github.com/commitizen/cz-cli)

### Branches

LexStep projects use the "Git Flow" branching model.

Please see the [Atlassian Overview of Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for a brief introduction.

As a refresher:

- The development branch is `develop`.
- Feature branches should be named `feature/*` and branch off `develop` and be merged into `develop` via pull request
- Hotfix branches should be named `hotfix/*` and branch off `master`
- You must not commit to master without a `release`/ or `hotfix` merge.

Releases should be tagged (and a version).