const mongoose = require('mongoose');
const connectDB = require('/startup/db');

const express = require('express');
const app = express();
const products = require('./routes/products');

connectDB();

app.use(express.json());
app.use('/api/products', products);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server started on port: ${port}');
});

mongoose.connect('mongodb://localhost/YouTubeClone', {useUnifiedTopology: true, useNewUrlParser: true })
if(error) throw error;
console.log('Connected to MongoDB');
});

const comment = new mongoose.Schema({
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    text: {type: String, required: true},
    postDate: {type: Date, default: Date.now()},
    replies: [replySchema]
});

console.log