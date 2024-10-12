import './App.css';
import Home from '../src/pages/Home/Home';
import Product from '../src/pages/Product/Product';
import ProductDetails from '../src/pages/ProductDetails/ProductDetails';
import Cart from '../src/pages/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar/Navbar';
import supabase from "./supabase";
import { useDispatch } from "react-redux";
import { setUser } from "./Slice/UserSlice";
import { useEffect } from 'react';

const getUser = async (dispatch) => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error('Error fetching user session:', error);
    return; // Handle error as needed
  }
  dispatch(setUser(data.session.user));
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]); // Include dispatch

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
