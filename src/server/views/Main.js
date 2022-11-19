import React from "react";

function Main({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Andres</title>
                <link rel="icon" type="image/icon" href="./assets/favicon.ico" />
                <link rel="stylesheet" href="/static/bundle.css" />
                <script src='/static/bundle.js' defer></script>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

export default Main;