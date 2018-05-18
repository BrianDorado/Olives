import React from 'react';
import axios from 'axios'

const UserStatus = React.createContext();

class UserProvider extends React.Component {
  state = {
    auth: false,
    user_id: null,
    user_roll: 0,
    userName: 'Brian'
  };

  userRollfix = () => {
    this.setState({
        user_roll: this.state.user_roll - 1
    })
  }

  componentDidMount(){
    // axios.get()
  }


  render() {
    return (
      <UserStatus.Provider
        value={{
          state: this.state,
          changeUserRoll: () => {
            this.setState({
              user_roll: this.state.user_roll + 1
            });
          },
          additionalFunction: this.userRollfix                                                              
        }}
      >
        {this.props.children}
      </UserStatus.Provider>
    );
  }
}

export { UserProvider, UserStatus as default };
