import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { FiShoppingCart } from "react-icons/fi";
import {SlHeart} from "react-icons/sl";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
// import LoginSignUp from "./LoginSignUp";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";
import LoginSignUp from "./LoginSignUp";
import Logout from "./Logout";
// import Register from "./Register";

const Nav = ({ user, setLoginUser }) => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item, cart } = useCartContext();
  const cart1 = cart?.length || 0;
  console.log(cart);
  
  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 15px;
          // letter-spacing: 1px;
          line-height: 1;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
          
        }
        &:hover,
        // &:active,
        &:focus{
          color: ${({ theme }) => theme.colors.helper};
        }
        // {
        //   color: ${({ theme }) => theme.colors.btn};
        // }
      }
    }
    .active{
      color: blue;
      font-size: 15px;
      text-transform: uppercase;
      // letter-spacing: 1px;
      line-height: 1;
    }
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
    .cart-trolley--link {
      position: relative;
      .cart-trolley {
        position: relative;
        color: #ce1212;
        font-size: 3.2rem;
      }
      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }
    .user-login--name {
      text-transform: capitalize;
    }
    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }



  padding: 0 4rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 4.3rem;
  }
  .icon-name{
    font-size: 16px;
    font-weight: 700;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
  }
  .icons{
    display: flex;
    align-items: center;
    gap: 10px;
  }


    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        // font-size: 4.2rem;
        transform-origin: right;
        transition: all 3s linear;
      }
      .navbar-link {
        font-size: 4.2rem;
        
      }
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          // position: relative;
          font-size: 5.2rem;
          // color:red;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
  
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <Nav>
      {/* Proper navbar */}

      <NavLink to="/">
        <div className="icons">
        <img src="./images/legal-icon.png" alt="my logo img" className="logo"/> 
        <p className="icon-name">LAWYERMATCH</p>
        </div>
      </NavLink>
      <div className={menuIcon ? "navbar active":"navbar"}>
        <ul className="navbar-lists">
 
          <li>
            <NavLink
              to="/products"
              // className="navbar-link"
              className={({isActive}) => isActive ? " active" : "navbar-link"}
              onClick={() => setMenuIcon(true)}>
              Find Lawyers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({isActive}) => isActive ? " active" : "navbar-link"}
              onClick={() => setMenuIcon(true)}>
              Contact
            </NavLink>
          </li>
    {/* Login logout using ternary operator */}
    {
    user && user._id 
    ?
    <li><Button onClick={() => setLoginUser({})}>LOGOUT</Button></li>
    :
    <NavLink to="/login"><li><Button onClick={() => <LoginSignUp/>}>LOGIN</Button></li></NavLink>
    }

          
          
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <SlHeart className="cart-trolley" />
              <span className="cart-total--item"> {cart1} </span>
            </NavLink>
          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
