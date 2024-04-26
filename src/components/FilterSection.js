import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { Button } from "../styles/Button";
import React, { useState } from "react";

const FilterSection = () => {
  const {
    filters: { text, category, experience, languages, location, gender, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "category" || attr === "languages") {
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const locationData = getUniqueData(all_products, "location");
  const languageData = getUniqueData(all_products, "languages");
  const genderData = getUniqueData(all_products, "gender");
  const [val, setVal] = useState('');

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* <label htmlFor="search">Search name</label> */}
          <input
            type="text"
            id="search"
            name="text"
            placeholder="Search by name"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Practice areas</h3>
        <div>
          {/* <label htmlFor="category">Select Category</label> */}
          <select
            name="category"
            id="category"
            className="filter-location--select"
            onChange={updateFilterValue}>
            {categoryData.map((curElem, index) => (
              <option key={index} value={curElem} selected={category === curElem}>
                {curElem}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="filter-category">
        <h3>Select Language</h3>
        <div>
          {/* <label htmlFor="languages">Select Language</label> */}
          <select
            name="languages"
            id="languages"
            className="filter-location--select"
            onChange={updateFilterValue}>
            {languageData.map((curElem, index) => (
              <option key={index} value={curElem} selected={languages === curElem}>
                {curElem}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="filter-location">
        <h3>Location</h3>
        <form action="#">
          {/* <label htmlFor="location">Select Location</label> */}
          <select
            name="location"
            id="location"
            className="filter-location--select"
            onChange={updateFilterValue}>
            {locationData.map((curElem, index) => (
              <option key={index} value={curElem} selected={location === curElem}>
                {curElem}
              </option>
            ))}
          </select>
        </form>
      </div>

      <div className="filter-location">
        <h3>Select Gender</h3>
        <form action="#">
          {/* <label htmlFor="gender">Select Gender</label> */}
          <select
            name="gender"
            id="gender"
            className="filter-location--select"
            onChange={updateFilterValue}>
            {genderData.map((curElem, index) => (
              <option key={index} value={curElem} selected={gender === curElem}>
                {curElem}
              </option>
            ))}
          </select>
        </form>
      </div>

      <div className="filter_experience">
        <h3>Experience</h3>
        <p>{experience} years</p>
        <input type="range" id="experience" name="experience" min={minPrice} max={maxPrice} value={experience} onChange={updateFilterValue} />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filter
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  // background: gray;
  flex-direction: column;
  gap: 1.5rem;
  h3 {
    padding: .5rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-location--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_experience {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;

