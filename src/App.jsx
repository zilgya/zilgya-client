import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom'
import './App.css';

import Footer from "./component/Footer"
import Navbar from "./component/Navbar"


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/footer' element={<Footer />} />    
        <Route path='/navbar' element={<Navbar />} />     
      </Routes>
    </Router>
  );
}

export default App;
