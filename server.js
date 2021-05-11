const express = require('express');
const faker = require('faker');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/users', (req, res) => {
    const newUser = faker.name.firstName() + ' ' + faker.name.lastName();
    res.json({ newUser }).end();
});

app.listen(port, () => {
    console.log(`Ready at http://localhost:${port}`)
});
