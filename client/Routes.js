import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Redirect, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import {ArtShowcase, Contact, Main, Projects, Slideshow, Welcome} from './components';
import { fetchImages } from './store';

const Home = () => (
  <div>
    {/* <div>
      <div className="img-background" />
      <img src="/assets/welcomeSlideWide.jpg" alt="Welcome!" />
      <div className="div-img-cover" />
    </div> */}
    <Slideshow />
    <Welcome />
    <Projects />
    <Contact />
  </div>
);

/*///
 COMPONENT
*////
class Routes extends Component {

  componentDidMount () {
    this.props.loadInitialData();
  }

  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/art" component={ArtShowcase} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        </Main>
      </Router>
    );
  }
}

/*///
 CONTAINER
*////
const mapState = null;

const mapDispatch = (dispatch) => ({
  loadInitialData: () => {
    dispatch(fetchImages());
  }
});

export default connect(mapState, mapDispatch)(Routes);

/*///
 PROP TYPES
*////
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
};
