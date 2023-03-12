const express = require('express');
require('dotenv').config();

const app = express();

const userRoutes = require('./routes/users');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.status(200).send({ message: 'this is home page' })
})

app.listen(port, () => console.log(`server is running at port ${port}`));