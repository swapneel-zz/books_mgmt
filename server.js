//define routes and configurations for  library API


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("DB connect");    
}).catch(err => {
    console.log('DB connect failure', err);
});

app.get('/', (req, res) => {
    res.json({"message": "Books details"});
});

require('./app/routes/book.routes.js')(app);

app.listen(3000, () => {
    console.log("Server at port 3000");
});