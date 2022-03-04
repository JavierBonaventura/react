import logo from './logo.svg';
import logoDh from "./assets/images/logo-DH.png"
import jordanEalke from "./assets/images/jordan-walke.png"
import mandalorian from "./assets/images/mandalorian.jpg"
import SideBar from "./components/SideBar.js"
import ContentWrapper from "./components/ContentWrapper"

import './App.css';


function App() {
  return (
    <div className="App">
       
        
        <body>        
              <div id="wrapper">
                  <SideBar /> 
                  <ContentWrapper />            

            </div>
        </body>
    </div>
  );
}

export default App;
