import React, {useState} from 'react';
// import "./LoginSignUpscript"; 
// import { useEffect } from 'react';

// The login and register functionality is working fine...

import axios from 'axios';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



// So lets start newly with dated 18-04-2023 time 18:55
// I am watching a video of The debug Arena




const LoginSignUp = ({setLoginUser}) => {
  const navigate = useNavigate()
  const [ user, setUser] = useState({
    email:"",
    password:"",
})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value,
    })
}


  const login = () =>{
    axios.post("http://localhost:9002/login", user)
    .then(res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate('/products')
      // e.preventdefault()
    })
  }

  return (
    <Wrapper>

    <div>
      <div className="container">
        <div className="forms">
          <div className="form login">

            {/* {console.log(user)} */}
            <span className="title">Login</span>

            <form action="#">
              <div className="input-field">
                <input type="email" name="email" placeholder="Enter your email" required value={user.email} onChange={handleChange}/>
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input type="password" name="password" className="password" placeholder="Enter your password" required value={user.password} onChange={handleChange}/>
                <i className="uil uil-lock icon"></i>
                <i className="uil uil-eye-slash showHidePw"></i>
              </div>

              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="logCheck" />
                  <label htmlFor="logCheck" className="text">Remember me</label>
                </div>

                {/* <a href="#" className="text">Forgot password?</a> */}
              </div>

              <div className="input-field button">
                <input type="button" value="Login" onClick={login}/>
              </div>
            </form>

            <div className="login-signup">
              <span className="text">Not a member?
                {/* <a href="#" className="text signup-link">Signup Now</a> */}
                <NavLink to="/register">Register</NavLink>
              </span>
            </div>
          </div>

          {/* Registration Form */}
          {/* <div className="form signup">
            <span className="title">Registration</span>

            <form action="#">
              <div className="input-field">
                <input type="text" placeholder="Enter your name" required />
                <i className="uil uil-user"></i>
              </div>
              <div className="input-field">
                <input type="text" placeholder="Enter your email" required />
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input type="password" className="password" placeholder="Create a password" required />
                <i className="uil uil-lock icon"></i>
              </div>
              <div className="input-field">
                <input type="password" className="password" placeholder="Confirm a password" required />
                <i className="uil uil-lock icon"></i>
                <i className="uil uil-eye-slash showHidePw"></i>
              </div>

              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="termCon" />
                  <label htmlFor="termCon" className="text">I accepted all terms and conditions</label>
                </div>
              </div>

              <div className="input-field button">
                <input type="button" value="Signup" />
              </div>
            </form>

            <div className="login-signup">
              <span className="text">Already a member?
                <a href="#" className="text login-link">Login Now</a>
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
/* ===== Google Font Import - Poformsins ===== */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4070f4;
}

.container{
    position: relative;
    max-width: 430px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    // overflow: hidden;
    margin: 0 20px;
}

.container .forms{
    display: flex;
    align-items: center;
    height: 440px;
    width: 200%;
    transition: height 0.2s ease;
}


.container .form{
    width: 50%;
    padding: 30px;
    background-color: #fff;
    transition: margin-left 0.18s ease;
}

.container.active .login{
    margin-left: -50%;
    opacity: 0;
    transition: margin-left 0.18s ease, opacity 0.15s ease;
}

.container .signup{
    opacity: 0;
    transition: opacity 0.09s ease;
}
.container.active .signup{
    opacity: 1;
    transition: opacity 0.2s ease;
}

.container.active .forms{
    height: 600px;
}
.container .form .title{
    position: relative;
    font-size: 27px;
    font-weight: 600;
}

.form .title::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: #4070f4;
    border-radius: 25px;
}

.form .input-field{
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 30px;
}

.input-field input{
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0 35px;
    border: none;
    outline: none;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
    border-top: 2px solid transparent;
    transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid){
    border-bottom-color: #4070f4;
}

.input-field i{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 23px;
    transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid) ~ i{
    color: #4070f4;
}

.input-field i.icon{
    left: 0;
}
.input-field i.showHidePw{
    right: 0;
    cursor: pointer;
    padding: 10px;
}

.form .checkbox-text{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}

.checkbox-text .checkbox-content{
    display: flex;
    align-items: center;
}

.checkbox-content input{
    margin-right: 10px;
    accent-color: #4070f4;
}

.form .text{
    color: #333;
    font-size: 14px;
}

.form a.text{
    color: #4070f4;
    text-decoration: none;
}
.form a:hover{
    text-decoration: underline;
}

.form .button{
    margin-top: 35px;
}

.form .button input{
    border: none;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 6px;
    background-color: #4070f4;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button input:hover{
    background-color: #265df2;
}

.form .login-signup{
    margin-top: 30px;
    text-align: center;
}

`

export default LoginSignUp
