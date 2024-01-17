//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Configuration Express
const app = express();
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },)

//Middleware Boilerplate
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/', (req, res, next) => {
    res.send('Hello World!');
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

//Book Controller
const booksController = require('./controllers/books_controller.js');
app.use('/books', booksController);

//404 Error
// app.get('*', (req, res) => {
    // res.status(404).send('Page not found');
// })

//Listener
app.listen(PORT, 80, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/books`);
    console.log('CORS-enabled web server listening on port 80');
})