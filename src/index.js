import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import { robots } from "./components/robots"



ReactDOM.render(
     <App robots={robots}/>
    , document.getElementById('root'));

serviceWorker.unregister();
