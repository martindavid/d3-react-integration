import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import Root from './containers/Root/Root';
import configureStore from './redux/store/configureStore';

const history = createBrowserHistory();
const store = configureStore(history);

const render = () => {
  ReactDOM.render(
    <Root history={history} store={store} />,
    document.getElementById('root'), // eslint-disable-line no-undef
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers/Root/Root', () => {
    render();
  });
}
