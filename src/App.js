import {NavBar} from "./components/NavBar"
import Main from "./components/Layout/Main"
import Section from "./components/Section"


function App() {
  return (
    <div className="App">
        <NavBar /> 
        <Main />
        <Section
          isBanner={false}
          className="section-why"
          />
        <Section
          isBanner={false}
          className="section-latest"      
        />     
    </div>
  );
}

export default App;
