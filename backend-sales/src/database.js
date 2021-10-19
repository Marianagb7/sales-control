const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://mari_79:24657845P@cluster0.c72ae.mongodb.net/sales-control?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

  .then(() => console.log('DB is connected'))
  .catch(e => console.log(e));