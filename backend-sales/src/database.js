const mongoose = require('mongoose');
import config from './config'


mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
  
    
})

  .then(() => console.log('DB is connected'))
  .catch(e => console.log(e));