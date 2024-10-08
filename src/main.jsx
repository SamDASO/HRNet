import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.module.scss'
import { Provider } from 'react-redux'
import store from './store/store.js'
import '@SamDASO/modal-component/dist/cjs/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
