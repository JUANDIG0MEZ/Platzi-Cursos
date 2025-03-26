const express = require('express');
const app = express();
const port = 3000;
const routesApi = require('./routes');




app.use(express.json())

app.get('/', (req, res)=> {
    res.send("Hello World!");
})

app.get('/new-route', (req, res)=> {
    res.send("Hi, I am a new route!");
})


routesApi(app);

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})