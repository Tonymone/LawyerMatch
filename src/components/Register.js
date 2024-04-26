// import React from 'react';
// // import "./LoginSignUpscript"; 
// import { useEffect } from 'react';
// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// const Register = () => {

//     // useEffect(() => {
//     //     const container = document.querySelector('.container');
//     //     const pwShowHide = document.querySelectorAll('.showHidePw');
//     //     const pwFields = document.querySelectorAll('.password');
//     //     const signUp = document.querySelector('.signup-link');
//     //     const login = document.querySelector('.login-link');
    
//     //     // js code to show/hide password and change icon
//     //     pwShowHide.forEach((eyeIcon) => {
//     //       eyeIcon.addEventListener('click', () => {
//     //         pwFields.forEach((pwField) => {
//     //           if (pwField.type === 'password') {
//     //             pwField.type = 'text';
    
//     //             pwShowHide.forEach((icon) => {
//     //               icon.classList.replace('uil-eye-slash', 'uil-eye');
//     //             });
//     //           } else {
//     //             pwField.type = 'password';
    
//     //             pwShowHide.forEach((icon) => {
//     //               icon.classList.replace('uil-eye', 'uil-eye-slash');
//     //             });
//     //           }
//     //         });
//     //       });
//     //     });
    
//     //     // js code to appear signup and login form
//     //     signUp.addEventListener('click', () => {
//     //       container.classList.add('active');
//     //     });
//     //     login.addEventListener('click', () => {
//     //       container.classList.remove('active');
//     //     });
    
//     //     // cleanup function to remove event listeners
//     //     return () => {
//     //       pwShowHide.forEach((eyeIcon) => {
//     //         eyeIcon.removeEventListener('click', () => {});
//     //       });
    
//     //       signUp.removeEventListener('click', () => {});
//     //       login.removeEventListener('click', () => {});
//     //     };
//     //   }, []);

// return(
// <Wrapper>

// <div>
//     <div className="container">
//         <div className="forms">
//         <div className="form signup">
//             <span className="title">Registration</span>

//             <form action="#">
//               <div className="input-field">
//                 <input type="text" placeholder="Enter your name" required />
//                 <i className="uil uil-user"></i>
//               </div>
//               <div className="input-field">
//                 <input type="text" placeholder="Enter your email" required />
//                 <i className="uil uil-envelope icon"></i>
//               </div>
//               <div className="input-field">
//                 <input type="password" className="password" placeholder="Create a password" required />
//                 <i className="uil uil-lock icon"></i>
//               </div>
//               <div className="input-field">
//                 <input type="password" className="password" placeholder="Confirm a password" required />
//                 <i className="uil uil-lock icon"></i>
//                 <i className="uil uil-eye-slash showHidePw"></i>
//               </div>

//               <div className="checkbox-text">
//                 <div className="checkbox-content">
//                   <input type="checkbox" id="termCon" />
//                   <label htmlFor="termCon" className="text">I accepted all terms and conditions</label>
//                 </div>
//               </div>

//               <div className="input-field button">
//                 <input type="button" value="Signup" />
//               </div>
//             </form>

//             <div className="login-signup">
//               <span className="text">Already a member?
//                 {/* <a href="#" className="text login-link">Login Now</a> */}
//                 <NavLink to="/login">Login</NavLink>
//               </span>
//             </div>
//           </div>
//         </div>
//     </div>
// </div>
// </Wrapper>
// )}




import React, { useState } from "react"
// import "./register.css"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                 alert( res.data.message )
                    // console.log(res) 
                    
                   navigate("/login")
            })
        } else {
            alert("invalid input")
        }
        
    }

    return (
        <Wrapper>

        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
        </Wrapper>
    )
}

// export default Register
const Wrapper = styled.section`
.register {
    width: 400px;
    background: #fff;
    border: 1px solid #dddfe2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 8px;
    padding: 1rem;
    align-items: center;
    text-align: center;
}

.register > input {
    border-radius: 8px;
    border: 2px solid #dddfe2;
    outline: none;
    color: #1d2129;
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
    width: 92%;
    font-size: 1rem;
}

.register > .button {
    background: #1877f2;
    border: 1px solid #1877f2;
    color: #fff;
    font-size: 1.25rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
}

`
export default Register;