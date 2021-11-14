import app from './app';
import './database';


app.listen(4000)
app.get('/', (req, res) => {
    res.json("welcome")
});




console.log('Server listen on port', 4000)

