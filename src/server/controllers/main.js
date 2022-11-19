import React from 'react';
import ReactDOM from 'react-dom/server';
import Main from '../views/Main';
import App from '../../client/components/App';

const controller = {};

controller.index = (req, res) => {
    res.send(/*html*/`
    <!DOCTYPE html>
    ${ReactDOM.renderToString(
        <Main>
            <main id='main'>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </main>
        </Main>
    )}`);
}

export default controller;