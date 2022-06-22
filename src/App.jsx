import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.css';
import Login from './page/Login';
import Footer from "./component/Footer"
// import Navbar from "./component/Navbar"
import Home from './page/Home';
import Profile from './page/Profile';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/footer' element={<Footer />} />
        {/* <Route path='/navbar' element={<Navbar />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
