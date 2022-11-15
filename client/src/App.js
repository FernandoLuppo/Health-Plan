//  Hooks
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

//  Components
import Home from './components/pages/js/Home';
import Plans from './components/pages/js/Plans';
import Success from "./components/pages/js/Success";

//  Style
import './App.css';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Plans" element={<Plans/>}/>
        <Route path="/Success" element={<Success/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
