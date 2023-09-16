import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import './index.css'
import reducers from './reducers'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'

const rootElem = document.querySelector('#root')

const root = createRoot(rootElem)

//const store = legacy_createStore(reducers, applyMiddleware(thunk))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
