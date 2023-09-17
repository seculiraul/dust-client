import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'

const rootElem = document.querySelector('#root')

const root = createRoot(rootElem)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
