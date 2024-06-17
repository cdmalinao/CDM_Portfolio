import './App.css';
import Dale from './sections/Dale/Dale';
import GProjects from './sections/Projects/GProjects';
import WebAppProject from './sections/Projects/WebAppProject';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return ( 
    <>
      <Dale />
      <WebAppProject />
      <GProjects />
      <Skills />
      <Contact />
      <Footer />

    </> 
  );
}

export default App
