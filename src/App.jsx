import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";
import Home from "./pages/Home/Home";
import Documentation from "./pages/Documentation/Documentation";
import Contacts from "./pages/Contact/Contacts";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Documentation" element={<Documentation/>}/>
            <Route path="/Contacts" element={<Contacts/>}/>
          </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
