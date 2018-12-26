import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers/rootReducer.jsx'
import { getPosts } from './actions/postAction.jsx'
// src/actions/postAction.jsx
import ReactDOM from 'react-dom';

// import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
  
  store.dispatch(getPosts())
  
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )