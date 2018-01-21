import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import DevTools from './DevTools';
import App from '../../App';

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <App history={this.props.history} />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
