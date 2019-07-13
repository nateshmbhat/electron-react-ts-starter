# electron-react-ts-starter 
#### ( Works with Create-React-App )

This is a boiler plate starter pack when starting an electron project which uses react with typescript. The code contains some bug fixes that are found when using react with electron and typescript and has auto monitoring of typescript changes to reload the electron app for faster development.

### Take Aways :
+ Run electron app with create-react-app without ejecting.
+ With the provided folder structure , main and renderer process related stuff can be coded independently.
+ Auto reloads the electron app when the typescript source file changes (This is missing in a lot of tutorial articles which only have an electron.js file and not a electron.ts file )

## Usage : 

##### Run the react project from the renderer directory :

```
cd renderer
npm install
npm run start
```

##### Run electron app's main process from main directory :

```
cd main
npm install
npm run start
```
