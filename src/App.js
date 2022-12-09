import './App.css';
import TopBar from './components/topbar/TopBar'
import Homepage from "./pages/homepage/Homepage"
import About from "./pages/about/About"
import Projects from './pages/projects/Projects'
import NoPage from "./pages/nopage/NoPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route exaxt path='/' element={<Homepage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='*' element={<NoPage />} />

        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
