import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import "./components/style";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
