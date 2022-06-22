import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './page/Login';
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Home from './page/home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
