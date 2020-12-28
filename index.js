const express = require ('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const boardsRouter = require('./routes/boards');
app.use('/boards', boardsRouter);

const planksRouter = require('./routes/planks');
app.use('/planks', planksRouter);



app.listen(PORT, () => console.log('server running on port ' + PORT))