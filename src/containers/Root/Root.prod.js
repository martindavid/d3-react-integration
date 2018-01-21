import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import App from '../../App';

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  };

  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <div>
            <App history={this.props.history} />
          </div>
        </Provider>
      </div>
    );
  }
}
