import React, { Component } from 'react';
import './filterBar.css';

class filterBar extends Component {
  state = {
    userInputValue: '',
    UserSelectValue: ''
  };
  defineUserInput = e => {
    this.setState({
      userInputValue: e.target.value
    });
  };
  defineCategorySelection = e => {
    this.setState({
      UserSelectValue: e.target.value
    });
  };
  filterProducts = () => {
      console.log(this.state.userInputValue, this.state.UserSelectValue);
    // this.defineUserInput();
    // this.defineCategorySelection();
  };

  render() {
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
          defaultValue={this.state.userInputValue}
          placeholder="Search"
          onChange={this.defineUserInput}
          className="user-input-filter"
        />
        <br />
        <br />
        <select
          name="Category"
          id="Cat-id"
          defaultValue={this.state.UserSelectValue}
          onClick={this.defineCategorySelection}
          className="CategorySelector"
        >
          <option value="Honey">Honey</option>
          <option value="Oil">Olive Oil</option>
          <option value="Vinegar"> Vinegar</option>
        </select>
        <br />
        <br />
        <br />
        <button onClick={this.filterProducts}>Search</button>
      </div>
    );
  }
}

export default filterBar;
