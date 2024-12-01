
# Project workflow
HCMUT Smart Printing Service using GitFlow workflow

**Branchs Structure**:

- **`main`**: production branch
- **`dev`**: Main development branch.
- **`feat`** : develop your features here

---

## Overview

This repository follows a structured branching strategy to organize development efforts across frontend and backend modules. Each sub-branch focuses on specific parts of the application, with `develop` as the main branch for all active development.

## Branching Workflow

1. **Creating New Feature Branches**: 
   - Always branch off from the development branch. For example, if you are developing the authentication page for the web:
      - `git checkout dev`
      - `git checkout -b feat/fe/web/auth`
      - Then start coding from that branch. When done, push your changes to your new branch : `git push -u origin feat/fe/web/auth` (dont push your code directly to other branches pls T.T)
      - Go to github and create a pull request to `dev` branch

2. **Pull Requests**:
   - Open pull requests from feature branches (e.g., `feat/fe/web/auth`) to the respective parent branch (e.g., `dev`).
   - Wait ulti your PR is merged.
   - After your PR is merged, your branch on Github will be deleted, so next time remember using `git push -u origin your-branch-name`

## Merging responsibility
   - Team leader will be responsible for merging PR to `main` branch
   - On `dev` branch, the person who tasked the feat will be responsible for mergin that feat to `dev` branch. (i.e. Frontend leader asks the person 1 to do the authentication page, then he will merge person 1 PR, too)

## Commit Message Guidelines

To maintain consistency and clarity in commit messages, follow this format:

```
<type>(<scope>): <description>
```

### Commit Types

- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation changes.
- **style**: Code style changes (e.g., formatting).
- **refactor**: Code refactoring (no functional changes).
- **test**: Adding or updating tests.
- **chore**: Maintenance tasks or dependencies updates.

### Scopes

Use these scopes to specify the part of the application affected:
- **frontend/web**: Web-specific frontend code.
- **frontend/moblie**: Mobile-specific frontend code.
- **backend**: Backend-specific code.

### Examples

1. **Feature Addition**:
   ```
   feat(frontend/web): add responsive navbar
   ```

2. **Bug Fix**:
   ```
   fix(backend): resolve API authentication issue
   ```

## Setting Up and Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd project-directory
   ```

2. **Switch to Development Branch**:
   ```bash
   git checkout dev
   ```

3. **Install Dependencies**:
   Follow project instructions to install dependencies.

## Contributing

Please ensure all feature branches are merged to the appropriate branch and adhere to the commit message guidelines. Open pull requests for code review before merging to the main `dev` branch.

---
