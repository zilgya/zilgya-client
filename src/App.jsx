import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import './App.css';
<<<<<<< HEAD
import Login from "./page/Login";
import Footer from "./component/Footer";
import Home from "./page/Home";
import Profile from "./page/Profile";
=======
import Login from './page/Login';
import Home from './page/Home';
import Profile from './page/Profile';
import Product from './page/Product';
import Cart from './page/Cart';
import Checkout from './page/Checkout';
import ProductDetail from './page/ProductDetail';
import Wishlist from './page/Wishlist';
import Favorite from './page/Favorite';
import OrderTrack from './page/OrderTrack';



>>>>>>> bc6006c0ad7378de9b692180ea25e9059524b6e3

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/footer" element={<Footer />} />
            {/* <Route path='/navbar' element={<Navbar />} /> */}
=======
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/productdetail/' element={<ProductDetail />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product' element={<Product />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/track' element={<OrderTrack />} />
>>>>>>> bc6006c0ad7378de9b692180ea25e9059524b6e3
          </Routes>
        </Router>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
