import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube, FaWhatsappSquare } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi"
import {CgMail, CgCopyright} from "react-icons/cg"

const Footer = () => {
  return (
    <>
      <Wrapper>
        

<footer>
    <div className="div1">
      <p className="div1-head">Stay in touch with us</p>
      <p>Get legal updates for you good</p>
      <input type="email"></input><button>Send</button><br/><br/><br/><br/>
  <hr/>
    </div>
  <section className="sec">
    <div className="div2">
        <ul className="service_header">
          <li className="service_name">Company</li>
          <div className="fot">
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/products">Find Lawyers</NavLink></li>
          </div>
        </ul>
    </div>
    <div className="div3">
    <ul className="service_header">
          <li className="service_name">Resource</li>
          <div className="fot">  
          <li><a href="#">FAQ</a></li>
          {/* <li><a href="#">Disclaimer</a></li> */}
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          </div>
        </ul>
    </div>
    {/* <div className="div4">
        <ul className="service_header">
          <li className="service_name">Legal</li>
          <div className="fot">
          <li><a href="#">9322454137</a></li>
          </div>
        </ul>
    </div> */}
    <div className="div5">
    <ul className="service_header">
          <li className="service_name">Lawyers by Focus</li>
          <div className="fot">
          <li><a href="#">Business</a></li>
          <li><a href="#">Family</a></li>
          <li><a href="#">Startup</a></li>
          <li><a href="#">Divorcee</a></li>
          <li><a href="#">Motor Accident</a></li>
          <li><a href="#">Wills/ Trusts</a></li>
          </div>
        </ul>
    
    </div>
    <div className="div6">
      <h3 className="foot-big">LawyerMatch</h3>
      <br/>
      <br/>
      <br/>
      <br/>
      <p className="footer-smallest">
      &copy; {new Date().getFullYear()} LawyerMatch. All Rights Reserved
      </p>
    </div>
    <div className="div7">
      <p className="footer-smallest">
      Disclaimer: LawyerMatch is not a law firm and does not provide any kind of legal opinions, advice, or recommendations. The relationship between users and LawyerMatch are not protected as attorney-client privilege or as legal work product. All relationships between business users and the independent lawyers featured on this website will be governed by the individual engagement letters provided by each lawyer. Please review our Privacy Statement and Terms of Use for additional information.
      </p>
    </div>
  </section>
</footer>

      </Wrapper>
    </>
  );
};




const Wrapper = styled.section`
  // .iSIFGq {
  //   margin: 0;
  // }

  // .contact-short {
  //   max-width: 60vw;
  //   margin: auto;
  //   padding: 5rem 10rem;
  //   background-color: ${({ theme }) => theme.colors.bg};
  //   border-radius: 1rem;
  //   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  //   transform: translateY(50%);

  //   .grid div:last-child {
  //     justify-self: end;
  //     align-self: center;
  //   }
  // }
  // .footer-social--icons {
  //   display: flex;
  //   gap: 2rem;
    
  //   div {
  //       padding: 1rem;
  //       border-radius: 50%;
  //       border: 2px solid ${({ theme }) => theme.colors.white};
        
  //       .icons {
  //         color: ${({ theme }) => theme.colors.white};
  //         font-size: 2.4rem;
  //         position: relative;
  //         cursor: pointer;
  //       }
  //     }
  //   }
  // }
  
  // .footer-bottom--section {
  //   padding-top: 9rem;
    
  //   hr {
  //     margin-bottom: 2rem;
  //     color: ${({ theme }) => theme.colors.hr};
  //     height: 0.1px;
  //   }
  // }
  
  // @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
  //   .contact-short {
  //     max-width: 80vw;
  //     margin: 4.8rem auto;
  //     transform: translateY(0%);
  //     text-align: center;
      
  //     .grid div:last-child {
  //       justify-self: center;
  //     }
  //   }
    
  //   footer {
  //     padding: 9rem 0 9rem 0;
  //   }
    
  //   .footer-bottom--section {
  //     padding-top: 4.8rem;
  //   }
  // }
  
  
  
  

  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
  // .footer1{
    //   position: fixed;
    //   width: 100%;
    //   bottom: 0;
    //   left: 0;
    //   background-color: white;
    //   box-shadow: 0 16px 70px -8px rgba(0, 0, 0, 0.25);
    //   border-radius: 20px 20px 0 0;
  //   transition: background 0.3s linear;
  // }
  
  // .container{
  //   max-width: 1240px;
  //   padding: 30px 40px;
  //   margin: auto;
  // }
  
  // .container_footer{
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   margin-bottom: 1rem;
  // }
  // .profile logo_area{
  //   display: flex;
  //   align-items: center;
  //   margin-bottom: 1rem;
  // }
  // .profile logo_area img{
  //   border-radius: 50%;
  //   border: 1px solid white;
  // }
  // .logo_area .logo_name{
  //   font-size: 1.5rem;
  //   font-weight: 700;
  //   margin: 0 1rem;
  //   color: black;
  // }
  // .desc_area{
  //   max-width: 320px;
  //   margin-bottom: 1.25rem;
    
  // }
  // .desc_area p{
  //   color: #828282;
  //   font-weight: 400;
  //   line-height: 28px;
  // }
  // .social_media a{
  //   color: #828282;
  //   margin-right: 22px;
  //   font-size: 24px;
  // }
  // .social_media a:hover{
  //   color: #313131;
  // }
  // .service_area{
  //   display: flex;
  // }
  // .footer_bottom{
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   gap: 2rem;
    //   opacity: 0.8;
    //   padding-right: 2rem;
    // }
    // .copy_right{
      //   color: #828282;
      //   display: flex;
      //   align-items: center;
      // }
      // .copy_right span{
        //   margin-left: 8px;
        //   font-weight: 400;
        //   letter-spacing: 0.135rem;
        // }
        // .tou a{
          //   color: #828282;
          //   margin-left: 1.5rem;
          // }
  // .tou a:hover{
    //   color: #313131;
    // }
    
    
    
    
    .service_area{
      flex-wrap: wrap;
      justify-content: left;
    }
    .service_header{
      margin-right: 40px;
    }
    li.service_name{
      color: #A6ABBD;
      font-size: 17px;
      font-weight: 600;
    }
    .service_header li a{
      color: #828282;
      padding-bottom: 1px;
      font-weight: 400;
    }
    .service_header li a:hover{
    // color :#313131;
    color: lightgray;
  }
  .service_header li{
    margin-bottom: 10px;
  }
  hr{
    height: 1px;
    border: none;
    background-color: #828282;
    margin-bottom: 2rem;
  }
  .service_header{
    margin-left: 0;
    marign-right: 40px;
  }
  .sec{
    width: 90%;
    margin: 0px auto;
    border: 1px solid gray;
    display: grid;
    grid-template-rows: 280px 120px;
    grid-template-columns: 30% 35% 45%;
    grid-gap: 20px;
    border: none;
  }
  div {
    display: inline;
    justify-content: center;
    align-items: center;
}
  .div1{
    // background: pink;
    grid-column: 1/-1;
  }
  .div2{
    // background: red;
    justify-content: center;
    align-items: center;
  }
  .div3{
    // background: blue;
    justify-content: center;
  }
  .div4{
    // background: yellow;
    justify-content: center;
    align-items: center;
  }
  .div5{
    // background: violet;
    justify-content: center;
  }
  .div6{
    // background: gray;
    grid-column: 1;
  }
  .div7{
    // background: purple;
    grid-column: 2/5;
    padding-right: 15rem;
  }
  footer {
    padding: 6rem 0rem 3rem 2rem;
    
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
  .div1-head{
    font-size: 30px;
    font-weight: 700;
    color: white;
    opacity: 0.9;
  }
  .footer-smallest{
    opacity: 0.5;
    font-size: 12px;
    line-height: 15px;
  }
  .foot-big{
    font-size: 20px;
    text-transform: uppercase;
  }
  .fot{
    font-size: 16px;
  }



  .subscribe-form{
    position:fixed;
    top: -100%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.15);
    width: calc(100% - 20px);
    max-width: 650px;
    background: #fff;
    border-radius: 20px;
    display:grid;
    gap: 10px;
    padding: 50px 40px 40px;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05); 
    z-index: 2;
    opacity: 0;
    transition: top 0ms ease-in-out 300ms,
                transform 300ms ease-in-out 0ms,
                opacity 300ms ease-in-out 0ms;
}
.subscribe-form.active{
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    transition: top 0ms ease-in-out 0ms,
                transform 300ms ease-in-out 0ms,
                opacity 300ms ease-in-out 0ms;
}
.subscribe-form .close-btn{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    font-size: 18px;
    color: #555;
    border: none;
    background: transparent;
    cursor: pointer;
}
.subscribe-form .left{
    display: flex;
    align-items: center;
}
.subscribe-form .right h2{
    font-size: 28px;
    font-family: "Montserrat", sans-serif;
    line-height: 1.15;
    margin-bottom: 10px;
    color: #111;
}
.subscribe-form .right p{
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
}
.subscribe-form .right .form label{
    display: block;
    margin-bottom: 5px;
    font-size: 15px;
}
.subscribe-form .right .form .input{
    margin-bottom: 10px;        
}
.subscribe-form .right .form input{
    width: 100%;
    padding: 10px;
    border: 1px solid #aaa;
    font-size: 15px;
    border-radius: 5px;
}
.subscribe-form .right .form button{
    width: 100%;
    padding: 8px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #8064d1;
    color: #fff;
    box-shadow: 0px 2px 2px #ddd;
}
@media(min-width:680px) {
    .subscribe-form{
        grid-template-columns: repeat(2, 1fr);

    }
}


  @media (max-width: 768px){
    .sec{
      margin: 0;
      display: grid;
      // grid-template-columns: repeat(2, 1fr);
      overflow: visible;
      grid-gap: 15px;
      grid-template-rows: 300px 250px;
    }

    .content_footer{
      flex-wrap: wrap;
      justify-content: left;
    }
    .social_media{
      margin-bottom: 1rem;
    }
    .footer_bottom{
      flex-wrap: wrap;
      justify-content: center;
    }
    .div7{
      // background: purple;
      grid-column: 2/5;
      padding-right: 6rem;
      padding-top: 5rem;

    }
  }
  
  @media screen and (max-width: 510px){
    .service_header{
      marigin-bottom: 8px;
    }
    .copy_right{
      margin-bottom: 8px;
    }
  }
  
  
  `;
  
  export default Footer;