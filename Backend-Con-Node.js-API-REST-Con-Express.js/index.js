const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const routesApi = require('./routes');

const {
    logErrors,
    handlerError,
    boomErrorHandler
} = require('./middlewares/errorHandler')



app.use(express.json())
app.use(cors())


app.get('/', (req, res)=> {
    res.send("Hello World!");
})

app.get('/new-route', (req, res)=> {
    res.send("Hi, I am a new route!");
})


routesApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(handlerError);


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})