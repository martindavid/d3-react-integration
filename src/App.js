import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import Home from 'containers/Home';
import MapExample from 'containers/MapExample';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Header appName={this.props.appName} />
          <div className='container main-content'>
            <div className='row'>
              <div className='col-md-12'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/map-example' component={MapExample} />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const { appName } = state.application;
  return {
    appName,
  };
};

export default connect(mapStateToProps)(App);
