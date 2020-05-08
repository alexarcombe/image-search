import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);

ReactDOM.render(<App />, document.getElementById('root'));
