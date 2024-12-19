const express = require('express');
const path = require('path');
const app = express();
 
// Serve static files from the 'public' directory
app.use(express.static('public'));
 
// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + './public/index.html');
});

const port =3000;

app.listen(port,()=>{
    console.log('Server running in the port 3000');
});