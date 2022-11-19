import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

ReactDOM.hydrateRoot(document.getElementById('main'),
    <React.StrictMode>
        <App />
    </React.StrictMode>
);