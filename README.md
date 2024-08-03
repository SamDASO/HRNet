# HRNet project

This repository adapts the HRNet JQuery app to a REACT version. You need to install the dependencies, one of which is from a component git package.
To be able to download the modal component used in this project, please follow the Installation modal-component instructions below.

## Installation / Modal-component (git package)

To install the `@SamDASO/modal-component` package from GitHub Package Registry, follow these steps:

### 1. Generate a Personal Access Token (PAT)

1. Go to your [GitHub settings](https://github.com/settings/tokens).
2. Navigate to **Developer settings** > **Personal access tokens**.
3. Click on **Generate new token**.
4. Select the `read:packages` and `repo` scopes.
5. Generate the token and copy it. Keep it secure.

### 2. Configure `.npmrc`

Create or update the `.npmrc` file in the root of your project with the following content:

```plaintext
@SamDASO:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

Replace **YOUR_PERSONAL_ACCESS_TOKEN** with the token you generated in the previous step.

### 3. Install the component

Follow the README file into the [repository's modal-component](https://github.com/SamDASO/modal-component).


**! Note:** There is no need to import the CSS file into the project, as it's already imported into the main.jsx file.
