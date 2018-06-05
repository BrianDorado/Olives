import React from 'react';
import Slider from 'material-ui/Slider'
import './filterBar.css';

const filterBar = props => {

    let {changeDisplayedNumber, changeCategoryDisplayed, defineUserInput, priceMax, priceMin, numberDisplayed, category} = props
       return (
      <div className="item-filter">
        <br />
        Filter items
        <br />
        <br />
        <br />
        <input
          type="text"
          name="UserInput"
          id="userInputValue"
          placeholder="Search"
          onChange={defineUserInput}
          className="user-input-filter"
        />
        <br />
        <br />
        <select name="display-number" id="display-number" defaultValue='10' value={numberDisplayed} onChange={changeDisplayedNumber}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
        </select>
        <br/>
        <br/>
        <select
          name="Category"
          id="Cat-id"
          onChange={changeCategoryDisplayed}
          className="CategorySelector"
          value={category}
        >
          <option value="1">Honey</option>
          <option value="2">Olive Oil</option>
          <option value="3"> Vinegar</option>
        </select>
        <br/>
        <br/>
        <select name="size" id="size" defaultValue='8'>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
        </select>
        <br />
        <br />
        <br/>
          <p>Price Range</p>
          <p>${priceMin} - ${priceMax}</p>
        <Slider></Slider>
      </div>
    );
  }

export default filterBar;
