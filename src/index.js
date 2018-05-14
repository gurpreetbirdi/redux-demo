import React from 'react'
import { render } from 'react-dom'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import appStates from './actions'
import App from './App'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appStates);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
