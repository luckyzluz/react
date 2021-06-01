import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/fu.jsx';
import Puba from './components/puba';
import Pubb from './components/pubb';
import Cfu from './components/contextdemo/fu'
import Czi from './components/contextdemo/zi'
import Cye from './components/contextdemo/ye'
import reportWebVitals from './reportWebVitals';

import {Contextdemo} from './context/index.js'

ReactDOM.render(
  <Contextdemo>
    <App />
    <Puba/>
    <Pubb/>
    <Cfu/>
    <Czi/>
    <Cye/>
  </Contextdemo>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
