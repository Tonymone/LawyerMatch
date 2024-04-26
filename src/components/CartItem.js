import React from "react";
import styled from "styled-components";
// import FormatPrice from "../Helpers/FormatPrice";
// import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, image, category, experience, location }) => {
  const { removeItem } = useCartContext();
  // const setDecrease = () => {
  //   // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrease = () => {
  //   // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };
console.log(category)
  // const category1 = () => {
  //   return (
  //     <>
  //       {category.map((e, index) => (
  //         <span className="areas" key={index}>
  //           {/* {e}, */}
  //           {e}.slice(0, -1).join(', ') + ' and ' + languages.slice(-1);
  //         </span>
  //       ))}
  //     </>
  //   );
  // };

  const category1 = category.slice(0, -1).join(', ') + ' and ' + category.slice(-1);

  return (
  <Wrapper>
    <div className="cart_heading grid grid-five-column">  
    {/* five */}
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p style={{fontSize: '22px', fontWeight: "bold"}} className="small-name">{name}</p>
          <div className="color-div small-location" style={{fontSize: '14px'}}>
            {/* <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div> */}
          {location}
          </div>
        </div>
      </div>
      {/* price   */}
      <div>   
        {/* className="cart-hide" */}
        <p>
          {/* <FormatPrice price={price} /> */}
          {category1}
        </p>
      </div>

      {/* Quantity  */}
      {/* <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      /> */}

      {/* //Subtotal */}
      <div className="cart-hide1">
        <p>
          {/* <FormatPrice price={price * amount} /> */}
          {experience} years
        </p>
      </div>
      {/* <div className="cart-hide"> */}
        {/* <p> */}
          {/* <FormatPrice price={price * amount} /> */}
          {/* {location} */}
        {/* </p> */}
      {/* </div> */}

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
.grid{
  gap: 1rem;
}
.grid-four-column {
  grid-template-columns: repeat(5, 1fr);
}

`
export default CartItem;