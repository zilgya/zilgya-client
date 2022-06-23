import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider as ReduxProvider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react";
// import './App.css';
import Login from './page/Login';
import Home from './page/Home';
import Profile from './page/Profile';
import Product from './page/Product';
import Cart from './page/Cart';
import Checkout from './page/Checkout';




function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product' element={<Product />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </Router>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
