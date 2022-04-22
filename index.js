import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';

const app = express();
const PORT = 4005;
const mongoose = require('mongoose');

const url =
'mongodb+srv://kovatoch:Consepi123@globomantics.localhost?retryWrites=true&w=majority';
const dbName = 'productsdb';

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/productsdb');




// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
