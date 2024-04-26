import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      {/* <div className="container grid grid-three-column"> */}
        {products.map((curElem) => {
          return (<Product key={curElem.id} {...curElem} />
          
          );
          
          
          
          
          
          <div className="grid" >
            <div className="grid-item" >
              <div className="card">
                <img className="card-img" src="../images/google.png"></img>
                <div className="card-content">
                  <h1 className="card-header">Rome</h1>
                  <p className="card-text">
                    Rome is a good please to add a charm to your resume and this will be a good opporturnity to turn your dull resume to a super resume and get a job as soom as possible and help your old papa that is father and mother and your sisster in the bedroom to fit the fan and air conditioner.
                  </p>
                  <button className="card-btn">
                    Visit<span>&rarr;</span>
                  </button>
                </div>
              </div>
               
            </div> 
     
          </div> 
        })}
      {/* </div> */}

    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;

    }
  }
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    background-color: pink;   // Used aditional bg-color.
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }







  html{
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body{
    background-color: #eee;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .grid{
    display: grid;
    width: 114em;
    grid-gap: 6rem;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    align-items: start;
  }
  .grid-item{
    background-color: #fff;
    border-radius: 0.4rem;
    overflow: hidden;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    curson: pointer;
    transition: 0.2s;
  }
  .grid-item:hover{
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0,0,0, 0.5);
  }
  .card-img{
    display: block;
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
  .card-content{
    padding: 3rem;
  }
  .card-header{
    font-size: 3rem;
    font-weight: 500;
    color: #0d0d0d;
    margin-bottom: 1.5rem;
  }
  .card-text{
    font-size: 1.6rem;
    letter-spacing: 1px;
    line-height: 1.7;
    color: #3d3d3d;
    margin-bottom: 2.5rem
  }
  .card-btn{
    display: block;
    width: 100%;
    padding: 1.5rem;
    font-size: 2rem;
    text-align: center;
    color: #3363ff;
    background-color: #d8e0fd;
    border: none;
    border-radius: 0.4rem;
    transition: 0.2s;
    cursor: pointer;
    letter-spacing: 0.1rem;
  }
  .card-btn span{
    margin-left: 1rem;
    transition: 0.2s;
  }
  .card-btn:hover,
  .card-btn:active{
    background-color: #c2cffc;
  }
  .card-btn:hover span,
  .card-btn:active span{
    margin-left: 1.5rem;
  }

  @media only screen and (max-width: 60em){
    body{
      padding: 3rem;
    }
    .grid{
      grid-gap: 3rem;
    }
  }
`;

export default GridView;