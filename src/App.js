import './App.css';
import TopBar from './components/topbar/TopBar'
import Homepage from "./pages/homepage/Homepage"
import About from "./pages/about/About"
import Projects from './pages/projects/Projects'
import NoPage from "./pages/nopage/NoPage"
import Blog from "./pages/blog/Blog"
import Write from "./pages/write/Write"
import Single from "./pages/single/Single"
import Login from "./pages/login/Login"
import Update from "./pages/update/Update"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="portfolio">
        <TopBar />
        <Routes>
          <Route exaxt path='/' element={<Homepage />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/blog/:id' element={<Single />}/>
          <Route path='/blog/:id/update' element={<Update />} />
          <Route path='/write' element={<Write />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/login' element={<Login />}/>


          <Route path='*' element={<NoPage />} />

        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
