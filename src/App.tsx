import React from 'react';
import { IpcRenderer, IpcMessageEvent} from 'electron' ; 

declare global {
  interface Window {
    require: any;
  }
}
const electron  = window.require('electron') ; 
let ipcRenderer : IpcRenderer  = electron.ipcRenderer ; 

ipcRenderer.on('response' , (event:IpcMessageEvent , args:any)=>{
  console.log(args);
})

const App: React.FC = () => {
  return (
    <div className="App">
      <button onClick={e=>ipcRenderer.send('channel' , {title : 'hi' , content : 'hello this is my message'})} >
        Click me
      </button>
    </div>
  );
}

export default App;
