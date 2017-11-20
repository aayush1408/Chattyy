const express = require('express');
let app = express();

//api running
let server = app.listen(5000,()=>{
    console.log('Server running on port 5000');
});

//public files
app.use(express.static('public'));


