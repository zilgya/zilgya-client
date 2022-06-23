import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.css';
import Login from './page/Login';
import Footer from "./component/Footer"
import Home from './page/Home';
import Profile from './page/Profile';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/footer' element={<Footer />} />       
      </Routes>
    </Router>
  );
}

export default App;
