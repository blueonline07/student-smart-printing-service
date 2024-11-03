
# Project Name
HCMUT Smart Printing Service Contribution Rules

**Branchs Structure**:

- **`main`**: production branch
- **`develop`**: Main development branch.
  - **`frontend`**: Parent branch for frontend development.
    - **`frontend/web`**: Development branch for web-specific frontend features.
    - **`frontend/mobile`**: Development branch for mobile-specific frontend features.
  - **`backend`**: Development branch for backend-specific features.

---

## Overview

This repository follows a structured branching strategy to organize development efforts across frontend and backend modules. Each sub-branch focuses on specific parts of the application, with `develop` as the main branch for all active development.

## Branching Workflow

1. **Creating New Feature Branches**: 
   - Always branch off from the relevant feature branch. For example:
     - For a web frontend feature, branch from `frontend/web`.
     - For a backend feature, branch from `backend`.

   ```bash
   git checkout frontend/web  # Switch to the appropriate branch
   git checkout -b feature/feature-name  # Create a new feature branch
   ```

2. **Pull Requests**:
   - Open pull requests from feature branches (e.g., `feature/feature-name`) to the respective parent branch (e.g., `frontend/web`).
   - Once the `frontend/web` or `backend` branches are stable, changes are merged into `develop`.

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
- **frontend**: General frontend code.
- **frontend/web**: Web-specific frontend code.
- **frontend/mobile**: Mobile-specific frontend code.
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

3. **Documentation**:
   ```
   docs(frontend): update README for frontend setup
   ```

## Setting Up and Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd project-directory
   ```

2. **Switch to Development Branch**:
   ```bash
   git checkout develop
   ```

3. **Install Dependencies**:
   Follow project instructions to install dependencies.

## Contributing

Please ensure all feature branches are merged to the appropriate branch and adhere to the commit message guidelines. Open pull requests for code review before merging to the main `develop` branch.

---
