import app from './app';
import morgan from 'morgan';
import './database';

dotenv.config({path: './env'});
const port = process.env.APP_PORT || 4000;

app.listen(port)
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.json("welcome")
});


console.log('Server listen on port', 4000)