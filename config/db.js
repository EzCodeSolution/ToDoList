const mongoose = require('mongoose')
const url = process.env.URL
mongoose.connect(url, {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('Database connected...')
}).catch(err => {
    console.log(`Connection failed... error ${err}`)
})