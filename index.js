const mongoose = require('mongoose');

mongoose
.connect("mongodb+srv://Jordanb22:<Kadeezra18>@cluster0.5agus.mongodb.net/<Cluster0>?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));  })