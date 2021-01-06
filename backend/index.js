const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const validate = require('./routes/validate');

app.use(cors());
app.use(express.json());
app.use('/api/comments', validate);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});