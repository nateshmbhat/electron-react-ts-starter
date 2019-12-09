# electron-react-ts-starter 
#### ( Has Auto Reloading and Works with Create-React-App )

This is a boiler plate starter pack when starting an electron project which uses react with typescript. The code contains some bug fixes that are found when using react with electron and typescript and has auto monitoring of typescript changes to reload the electron app for faster development.

### Why this electron-react-ts-starter :
+ Run electron app with create-react-app without ejecting.
+ Auto reloads the electron app when the typescript source file changes. (This is missing in a lot of tutorial articles which only have an electron.js file and not a electron.ts file )
+ Provides the required npm scripts and folder structure for simple to complex projects.
+ Includes a very simple bundling process.
+ Auto reloads app for changes in both main process files and react files.
+ With the provided folder structure , main and renderer process codebase can be maintained independently.

## Usage : 

##### Run the react project from the renderer directory :

```js
cd renderer
npm install // First time only
npm run start
```

##### Run electron app's main process from main directory :

```js
cd main
npm install // First time only
npm run start
```

## To Build and Bundle :

+ Just make sure that you have added all the dependencies in the `main/package.json` to the `renderer/package.json` and the run the below command from the `renderer` folder.

```js
cd renderer
npm run release // or npm run build
```

**Sit back and have a cup of Coffee while the app gets built**  . 

You will now have a full fledged application waiting for you in the `dist` folder.

---


### Misc And Extra Options  : 
+ If your app uses React Router , make sure you use `HashRouter` instead of `BrowserRouter` . 
+ In the `renderer/package.json` , use the `build` property to modify the settings for electron-builder. All assets and static files in your project should be present in the `assets` folder.
+ To get different installer types like 'msi' , 'appx' , '7z' , 'zip' etc , change the `target` property inside the `build` property in `renderer/package.json` . 
+ If you have nested structure of typescript files in the `main` folder , make sure that you copy all the generated javascript `.js` files into the `renderer/public/`  folder before building the react app (This would add the javascript files in the public folder into the build folder when building our react-app).

### Project built using this pack : 
[Windows Terminal Tweaker](https://github.com/nateshmbhat/windows-terminal-tweaker)
