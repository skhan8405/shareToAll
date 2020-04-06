import React from 'react';
import './App.css';
import MainKeyboardView from "./components/KeyboardView"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


export default class  App extends React.Component
{
render() {
  return(
  
  <div className="App">
  <h1>Hello world</h1>
    <MainKeyboardView/>
  </div>
  
  )
}
}