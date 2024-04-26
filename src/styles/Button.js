import styled from "styled-components";

export const Button = styled.button`
  // text-decoration: none;
  // max-width: auto;
  // background-color: #174582;     //rgb(98 84 243);
  // color: rgb(255 255 255);
  // border-radius: 10px;
  // padding: 1rem 2rem;
  // border: none;
  // text-transform: uppercase;
  // text-align: center;
  // cursor: pointer;
  // transition: all 0.3s ease;
  // -webkit-transition: all 0.3s ease 0s;
  // -moz-transition: all 0.3s ease 0s;
  // -o-transition: all 0.3s ease 0s;
  
  // &:hover,
  // &:active {
  //   box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
  //   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  //   transform: scale(0.96);
  // }
  // a {
  //   text-decoration: none;
  //   color: rgb(255 255 255);
  //   font-size: 1.8rem;
  // }




  {
    align-items: center;
    background-color: #174582;
    border: 0;
    border-radius: 100px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 600;
    justify-content: center;
    line-height: 20px;
    max-width: 480px;
    min-height: 20px;
    min-width: 0px;
    overflow: hidden;
    padding: 0px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 0px;     //This is a temperory code. To change/ remove this, first change/remove width of profile-name.
    text-align: center;
    touch-action: manipulation;
    transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  
  
  &:hover,
  &:focus { 
    background-color: #1b5198;  // #16437E;
    color: #ffffff;
  }
  
  &:active {
    background: #09223b;
    color: rgb(255, 255, 255, .1);
  }
  
  &:disabled { 
    cursor: not-allowed;
    background: rgba(0, 0, 0, .08);
    color: rgba(0, 0, 0, .3);
  }
a{
  text-align: center;
  vertical-align: middle;
}

`;