import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { AiTwotoneShop } from "react-icons/ai";
import { useState } from "react";
import LoginModel from '../../Components/LoginModal/LoginModal';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from "../../Slice/UserSlice";
import supabase from '../../supabase';



const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const user = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setIsopen(false);
    }
  }, [user]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      dispatch(removeUser());
    }
  };

  return (
    <>
      <div className='navbar_container'>
        <div className='navbar'> 
          <Link to={'/'}>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipcartlogo"
            className='navbar_logo'></img>
          </Link>
          <div className='navbar_search'>
            <button className='navbar_searchbtn'>
              <IoSearch />
            </button>
            <input type='text'
            placeholder='Search for Products,brands and more' className='navbar_searchbox'></input>
             {user ? (
            <h4 onClick={signOut} className='nav_btn1'>@{user?.email.slice(0, 10)}</h4>) :
            (<p className='navbar_loginbtn' onClick={() => setIsopen(true)}>
              <IoPersonCircleOutline />
              Login
              <MdKeyboardArrowDown />
            </p>
            )}
            <div className='navbar_cart'>
              <div className='cart_icon'>
                <IoCartOutline />
              </div>
              <Link to={'/Cart'} className='navbar_cartbtn'>
                Cart
              </Link>
            </div>
            <div className='navbar_seller'>
               <div className='seller_icon'> 
                  <AiTwotoneShop />
               </div>
               <div>
                Become a Seller
               </div>
            </div>
          </div>
        </div>
        <LoginModel isopen={isopen} setClose={setIsopen} />
      </div>
    </>
  )
}

export default Navbar;