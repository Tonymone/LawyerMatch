import { NavLink } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from 'react';
import {GoLocation} from "react-icons/go";
import {TbLicense} from "react-icons/tb"
import {VscLaw} from "react-icons/vsc"
import {SiGooglescholar} from "react-icons/si"
import {TbLanguageHiragana} from "react-icons/tb"
// import {SlHeart} from "react-icons/sl";
import AddToCart from "./AddToCart";
// import SingleProduct from "../SingleProduct";



const ListView = ({ products }) => {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(true);

  const togglePopup = (mail) => {
    setShowPopup(!showPopup);
    
    setSelectedEmail(mail);
  }

  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, description, location, category, license, experience, education, languages, mail } = curElem;   // price

          const category1 = () => {
            return (
              <>
                {category.map((e, index) => (
                  <span className="areas" key={index}>
                    {e}
                  </span>
                ))}
              </>
            );
          };
          
          const languages1 = languages.slice(0, -1).join(', ') + ' and ' + languages.slice(-1);

          return (

            <div className="card1">
              <div className="profile-sidebar">
                <img className="profile-image" src={image} alt={name} />
              </div>
              
              <NavLink><AddToCart product={curElem}/></NavLink>
              <div className="profile-main">
                {/* <PopupForm ></PopupForm> */}
                <div>
                  <button className="button-18" onClick={() => togglePopup(mail)}>Contact</button>
                  {showPopup && selectedEmail === mail && (
                    <>                    
                      <div className="popup">     
                      {/* <form action={`https://formsubmit.co/${mail}`} method="POST"> */}
                        {/* <form action={`https://formsubmit.co/${mail}`} method="POST">
                          
                          <label htmlFor="name" className="profile-name">Name:</label>
                          <input type="text" id="name" name="Name" required/>
                    
                          <label htmlFor="email" className="profile-name">Email:</label>
                          <input type="email" id="email" name="Email" required/>

                          <label htmlFor="description" className="profile-name">Description:</label>
                          <textarea name="Message" id="textarea" cols="45" rows="7" placeholder=" " class="textbox3" required/>
                    
                          <button type="submit">Submit</button>
                          <input type="hidden" name="_captcha" value="false"/>
                          <input type="hidden" name="_next" value="http://localhost:3000/"/>
                          <input type="hidden" name="_subject" value="Free Legal Help"/>
                          <button onClick={togglePopup}>Close Form</button>
                        </form> */}

                        <form action={`https://formsubmit.co/${mail}`} method="POST">
                          <button onClick={togglePopup} style={{ position: 'absolute', top: '-20px', right: '0px', cursor: 'pointer', marginLeft: '30px' }}>
                            X
                          </button>
                          <h3 style={{fontSize: '26px', fontWeight: 'bold', paddingRight: '20px'}}>Contact {name}</h3>
                          <br />

                          <label htmlFor="name">Name:</label>
                          <input type="text" id="name" name="name" required/>

                          <label htmlFor="email">Email:</label>
                          <input type="email" id="email" name="email" required/>

                          <label htmlFor="message">Message:</label>
                          <textarea id="message" name="message" rows="4" required></textarea>

                          <div id="error-message"></div>

                          <button className="button" type="submit">Submit</button>
                          <input type="hidden" name="_captcha" value="false"/>
                          <input type="hidden" name="_next" value="http://localhost:3000/"/>
                          <input type="hidden" name="_subject" value="Free Legal Help"/>
                        </form>

                      </div>
                    </>
                  )}
                </div>
                <h2 className="profile-name">{name}</h2>
                
                <p className="profile-position">{category1()}</p>
                  <div className="dabba">
                    <div>
                      <p style={{"fontSize": "12px"}}><TbLicense/> {license}</p>
                    </div>
                    <div>
                      <p style={{"fontSize": "12px"}}><GoLocation/> {location}</p>
                    </div>
                    <div>
                      <p style={{"fontSize": "12px"}}><SiGooglescholar/> {education}</p>
                    </div>
                    <div>
                      <p style={{"fontSize": "12px"}}><VscLaw/> {experience} Yrs Experience</p>
                    </div>
                    <div>
                      <p style={{"fontSize": "12px"}}><TbLanguageHiragana/> {languages1}</p>
                    </div>
                  </div>
                <p className="profile-body">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};




const Wrapper = styled.section`
  padding: 8rem 0;

  .card1{
    width:90%;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    // background: #003a74;
    color: black;
    text-align: center;
    padding: 2rem;
    border: 1px solid lightblue;
    border-radius: 15px;
  }
  .card1:hover{
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  .grid {
      gap: 1.5rem;
    }
  .profile-name{
    font-size: 22px;
    line-height: 1.1;
    letter-spacing: 1px;
    color: black;
    // background: gray;
    font-weight: 700;
    // width: 500px;
  }

  .profile-position{
    margin: 3px 0px 9px ;
    text-transform: uppercase;
    font-size: 0.975rem;
    letter-spacing: 1px;
    font-weight: 500;
    color: black;
  }

  .areas{
    border-radius: 3px;
    padding: 2px;
    background: lightgray;
    margin: 2px;
  }

  .profile-body{
    font-weight: 300;
    font-size: 14px;
    // light-height: 20px;
    opacity: 0.8;
    margin-bottom: 0;
    color: black;
    opacity: 0.8;
  }
  .profile-image{
    border-radius: 50%;
    border: 1px solid #003a74;
    height: 160px;
    width: 160px;
  }

  .dabba{
    height: 50px;
    width: 570px;
    // background: gray;
    font-size: 15px;
    display: grid;
    margin-bottom: 10px;
    grid-template-columns: repeat(3, 1fr);
  }
  .button-18 {
    align-items: center;
    background-color: #174582;
    border: 0;
    border-radius: 100px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 20px;
    max-width: 480px;
    min-height: 40px;
    min-width: 0px;
    overflow: hidden;
    padding: 0px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 460px;     //This is a temperory code. To change/ remove this, first change/remove width of profile-name.
    text-align: center;
    touch-action: manipulation;
    transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }
  
  .button-18:hover,
  .button-18:focus { 
    background-color: #1b5198;  // #16437E;
    color: #ffffff;
  }
  
  .button-18:active {
    background: #09223b;
    color: rgb(255, 255, 255, .1);
  }
  
  .button-18:disabled { 
    cursor: not-allowed;
    background: rgba(0, 0, 0, .08);
    color: rgba(0, 0, 0, .3);
  }
  .profile-main{
        text-align: left;
        padding-left: 2em;
      }

      .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // background-color: #fff;
        // border: 1px solid #ccc;
        background: rgba(0, 0, 0, 0.5);
        // padding: 20px;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
        z-index: 9999;
      }
    
    
      
      .popup label {
        display: block;
        margin-bottom: 10px;
      }
      
      .popup input {
        display: block;
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        box-sizing: border-box;
      }
      
      .popup button {
        display: block;
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px;
        cursor: pointer;
        margin-top: 20px;
      }
      
      .popup button:hover {
        background-color: #0069d9;
      }


      //ChatGPT
      form {
        background: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        max-width: 500px;
        width: 100%;
    }

    label {
        display: block;
        font-size: 15px;
        margin-bottom: 8px;
    }

    input, textarea {
        width: 100%;
        padding: 8px;
        margin-bottom: 16px;
        box-sizing: border-box;
    }

    .button {
        background-color: #4caf50;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }

    #error-message {
        color: red;
        margin-bottom: 10px;
    }

      @media screen and (max-width: 1105px){
        .card1{
          flex-direction: column;
          width: 760px;
        }
        .container{
          padding: 0 0rem;
        }
        .grid{
          column-gap: 1rem;
        }
      }

  @media screen and (max-width: 640px){
    .card1{
      flex-direction: column;
      width: 330px
      // padding: 1rem;
    }
    .dabba{
      grid-template-columns: repeat(2, 1fr);
      background-color: gray;
      height: 80px;
      width: 300px;
      margin-bottom: 10px;
    }
    .button-18{
      margin-left: 200px;
    }
    .profile-main{
      text-align: center;
      padding: 0;
      
    }
    .container{
      margin: 0;
    }
    .grid{
      margin: 0;
    }
  }


  @media (max-width: 998px){
    .container {
        max-width: 130rem;
        padding: 0 0.5rem;
    }
  }
  


`;

export default ListView;