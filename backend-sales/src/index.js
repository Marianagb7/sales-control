import app from './app';
import morgan from 'morgan';
import './database';

app.listen(4000)
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.json("welcome")
});


console.log('Server listen on port', 4000)