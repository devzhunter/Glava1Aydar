const express = require ('express');
const path = require('path');


const app = express();


app.use (express.static(path.join(__dirname, 'public')));

app.get('/Home', (req, res) => {
    res.sendFile(`${__dirname}/public/Home/index.html`);
});

app.get('/Second', (req, res) => {
    res.sendFile(`${__dirname}/public/Second/index.html`);
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
} 
);
