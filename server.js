const express    = require('express')
const mongoose   = require('mongoose')

const items = require('./routes/api/items');

const app = express()

//BodyParser Middleware
app.use(express.json())

//DB Config
const db = require('./config/keys.js').mongoURI

// Connect to mongo
mongoose
    .connect(db, {useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Error: ", error));

// Use routes
app.use('/api/items', items);

const port = process.env.PORT||5000

app.listen(port, () => console.log("Server started on port ${port}"));

