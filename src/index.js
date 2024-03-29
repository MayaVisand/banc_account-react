import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import '../src/App.css'
import '../src/index.css'
import App from "./App";
import {Provider} from "react-redux";
import store from "./store/storeConfigurations";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
       <App/>
       </Provider>
  </React.StrictMode>
);
