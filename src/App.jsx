import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Home from './page/home';


function App() {
  return (
    <Router>
      <Routes>
        <Router path='/' element={<Home />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
