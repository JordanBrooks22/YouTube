const connectDB = require('./startup/db');
const express = require('express');
const validate = require('./routes/validate');

const app = express();

connectDB();
app.use(express.json());
app.use('/api/youtube', validate);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serverstartedonport:${port}`);
});