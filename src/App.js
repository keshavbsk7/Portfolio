
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import {Projects} from "./components/Project";
import { Contact } from './components/contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner /> 
      <Skills />
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
