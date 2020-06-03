import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchApp from './SearchApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <SearchApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
