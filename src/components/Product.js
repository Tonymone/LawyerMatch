import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import {TbLanguageHiragana} from "react-icons/tb";
import {GoLocation} from "react-icons/go";
import {TbLicense} from "react-icons/tb"
import {VscLaw} from "react-icons/vsc"
import {SiGooglescholar} from "react-icons/si"


const Product = (curElem) => {
  const { id, name, image, price, category, description, experience, languages, location, license, education } = curElem;
  return (
    <div className="grid-item" >
    <NavLink to="/products">
    {/* {`/singleproduct/${id}`} */}
      <div className="card-content">
        <figure>
          <img src={image} alt={name} className="card-img"/>
          {/* <figcaption className="caption">{category}</figcaption> */}
        </figure>

        <div className="card">
          <div className="card-data-flex">
            <h3 className="card-header">{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
            <div><GoLocation/> {location}</div>
            <div><VscLaw/> {experience} Yrs Experience</div>
            <div><TbLicense/> {license}</div>
            <div><TbLanguageHiragana/> {languages}</div>
            <div><SiGooglescholar/> {education}</div>
          </div>
          <div className="card-text">{description}</div>
        </div>
      </div>
    </NavLink>
    </div>
  );
};

export default Product;