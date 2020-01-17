# Welcome to Design System for My Family Lounge
This is static Website built with [Ionic](https://ionicframework.com/docs) (Angular).

## Use Git credential manager for Azure Devops Access

## Prerequisites
- [Git Credential Manager Windows](https://github.com/microsoft/Git-Credential-Manager-for-Windows)
- [Git Credential Manager Mac](https://github.com/microsoft/Git-Credential-Manager-Core#download-and-install)
- [NodeJS](https://nodejs.org/en/)
 
## Recommendations
- Use [npx](https://www.npmjs.com/package/npx) which comes with NodeJS
- Article on [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
- Article on [npm ci](https://medium.com/better-programming/npm-ci-vs-npm-install-which-should-you-use-in-your-node-js-projects-51e07cb71e26)

## Getting Started
Clone the project
```
git clone https://dev.azure.com/qktech/QK%20Enhanced%20Mobile/_git/design-system
```
Install Dependencies and Packages
```
npm ci
```
Serve the project (Usually on http://localhost:8100/)
```
npx ionic serve
```
Generate Components, Services, Modules, Classes, Directives, Guards
```
npx ionic generate
```
## Deployment
* Currently getting deployed manually via Neil's Netlify account.

```
npx ionic build --prod
```

* Drag and drop **www** folder to Netlify

* https://designsystem-mfl.netlify.com/


* Pending job with Infrastructure Team to host.

## How to install Git Credential Manager (GCM) on Mac
[Git Credential Manager Mac](https://github.com/microsoft/Git-Credential-Manager-Core#download-and-install)

1. Download installer

![download-installer](/readme-assets/readme--1-download-installer.png)

2. Find link for GCM core for OSX

![find-gcmcore-osx](/readme-assets/readme--2-find-gcmcore-osx.png)

3. Open package on your Mac

![find-package](/readme-assets/readme--3-find-package.png)

4. Start Install Wizard

![install-wizard](/readme-assets/readme--4-install-wizard.png)
![install-wizard](/readme-assets/readme--5-install-wizard.png)
![install-wizard](/readme-assets/readme--6-install-wizard.png)

5. Copy to clipboard git clone command from Azure Devops

![clone-repo-from-azure](/readme-assets/readme--7-clone-repo-from-azure.png)

6. Paste into Terminal

![cli-git-clone](/readme-assets/readme--8-cli-git-clone.png)

7. Authenticate to GCM using your Azure Devops credentials

![login-gcm](/readme-assets/readme--9-login-gcm.png)

8. Complete DUO 2FA

![fa-duo](/readme-assets/readme--10-2fa-duo.png)

9. Check the terminal for success

![success](/readme-assets/readme--11-success.png)

10.  cd into the Project
```
cd design-system
```








