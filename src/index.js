import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helper';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderComponent = (containerId, history) => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />,
    </Provider>,
    document.getElementById(containerId),
  );

  serviceWorker.unregister();
};

window.unmountComponent = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
