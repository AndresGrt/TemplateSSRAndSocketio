import React from 'react';
function Error404() {
    const MainStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 'auto',
        padding: '1rem',
        minWidth: '90%',
        textAlign: 'center'
    }
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Andres</title>
                <link rel="icon" type="image/icon" href="./assets/favicon.ico" />
                <link rel="stylesheet" href="/static/bundle.css" />
            </head>
            <body>
                <main style={MainStyle}>
                    <h1>Woops no existe esta pagina!</h1>
                </main>
            </body>
        </html>
    );
}

export default Error404;