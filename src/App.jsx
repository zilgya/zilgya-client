import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider as ReduxProvider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react";
// import './App.css';
import Login from './page/Login';
import Home from './page/Home';
import Profile from './page/Profile';
import ProductDetail from './page/ProductDetail';
import Product from './page/Product';
import Checkout from './page/Checkout';
import Wishlist from './page/Wishlist';
import Favorite from './page/Favorite';
import OrderTrack from './page/OrderTrack';




function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/productdetail/' element={<ProductDetail />} />
            <Route path='/product' element={<Product />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/track' element={<OrderTrack />} />
          </Routes>
        </Router>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
