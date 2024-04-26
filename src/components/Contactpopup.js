import React, { useState } from 'react';
import styled from "styled-components";

function PopupForm() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <Wrapper>

    <div>
      <button className="button-18" role="button" onClick={togglePopup}>Contact1</button>
      {showPopup && (
        <div className="popup">
          <form action="https://formsubmit.co/tonymone1234@gmail.com" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <button type="submit">Submit</button>
          </form>
          <button onClick={togglePopup}>Close Form</button>
        </div>
      )}
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
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
`  

export default PopupForm;
