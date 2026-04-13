import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import {Projects} from "./components/Project";
import { Contact } from './components/contact';
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { TopProgressBar } from "./components/TopProgressBar";

function App() {
  return (
    <div className="App living-background">
      <TopProgressBar />
      <NavBar />
      <Banner /> 
      <Skills />
      <Experience />
      <Education />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
