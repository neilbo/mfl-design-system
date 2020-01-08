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

* https://designsystem-mfl.netlify.com/


* Pending job with Infrastructure Team to host.