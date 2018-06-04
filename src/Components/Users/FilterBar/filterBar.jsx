import React, { Component } from 'react';
import Slider from 'material-ui/Slider'
import './filterBar.css';

class filterBar extends Component {

  render() {
    let {changeDisplayedNumber, changeCategoryDisplayed, defineUserInput, priceMax, priceMin, numberDisplayed, category, userInputValue} = this.props
    // console.log(this.props);
    return (
      <div className="item-filter">
        <br />
        Narrow Your Search
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
          <option value="Honey">Honey</option>
          <option value="Oil">Olive Oil</option>
          <option value="Vinegar"> Vinegar</option>
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
}

export default filterBar;
