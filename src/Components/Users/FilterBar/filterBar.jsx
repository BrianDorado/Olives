import React, { Component } from 'react';
import './filterBar.css';

class filterBar extends Component {
  state = {
    userInputValue: '',
    UserSelectValue: ''
  };
  defineUserInput = () => {
    this.setState({
      userInputValue: this.refs.userInputValue.value
    });
  };
  defineCategorySelection = () => {
    this.setState({
      UserSelectValue: this.refs.UserSelectValue.value
    });
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
          placeholder="Search"
          className="user-input-filter"
          ref="userInputValue"
        />
        <br />
        <br />
        <select name="Category" id="Cat-id" ref="userSelectValue">
          <option value="Honey">Honey</option>
          <option value="Oil">Olive Oil</option>
          <option value="Vinegar"> Vinegar</option>
        </select>
      </div>
    );
  }
}

export default filterBar;
