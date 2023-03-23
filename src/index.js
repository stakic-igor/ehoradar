import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import css
import './scss/reset.scss';
import './scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
