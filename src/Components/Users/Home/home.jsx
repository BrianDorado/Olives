import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { connect } from 'react-redux';
import Header from '../Header/header';
import './home.css';




class Home extends React.Component {
  componentDidMount(){
    getStoreItems()
  }
  render() {
    return (
      <div>
        <Header />
        <section className="app-store">
          <section>
            <br />
            <br />
            <strong>Featured</strong>
            <GridList></GridList>
          </section>
          <br />
          <br />
          <section>
            <strong>Recent</strong>
          </section>
          <br />
          <br />
          <section>
            <strong>Producer</strong>
          </section>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(Home);
