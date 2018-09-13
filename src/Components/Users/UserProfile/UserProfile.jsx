import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/header'


class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <section>
                    <div>User Name</div>
                    <div>User_data</div>
                    <div>Past orders?</div>
                {this.state.user_data.role === 0 ? <div> Is not admin</div> : null}
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      state
  };
}

export default connect(
    mapStateToProps,
)(UserProfile);