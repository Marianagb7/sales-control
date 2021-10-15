import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/salescontroldb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
})
    .then(db => console.log('Db is connect'))
    .catch(error => console.log(error))