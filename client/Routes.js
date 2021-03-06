import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {ArtShowcase, Contact, Home, Main, ProjectsPage, Skills} from './components';
import { fetchImages } from './store';

const pathBackgroundColors = {
  '/home': 'green',
  '/contact': 'red',
  '/work': 'green',
  '/art': 'blue',
};

/*///
 COMPONENT
*////
class Routes extends Component {

  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname.split('/')[1] || '/'}
            timeout={{
              enter: 1600,
              exit: 800,
              }} appear
            classNames="fading-transition"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Main pathName={location.pathname} pathBackgroundColors={pathBackgroundColors}>
              <Switch location={location}>
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/skills" component={Skills} />
                <Redirect from="/projects" to="/work" />
                <Route path="/work" component={ProjectsPage} />
                <Route path="/art" component={ArtShowcase} />
                <Redirect to="/home" />
              </Switch>
            </Main>
          </CSSTransition>
        </TransitionGroup>
      </div>
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

export default withRouter(connect(mapState, mapDispatch)(Routes));

/*///
 PROP TYPES
*////
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
};
