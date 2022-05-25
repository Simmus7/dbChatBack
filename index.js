const express = require ('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
const port = 3000;

 
//Conexión con la base de datos
const uri = "mongodb+srv://dbChat:dbChat@dbchatcluster.8ipneka.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true} );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const rutaMensaje = require ('../dbChat/routes/mensaje.js')


app.listen (port, () => {
    console.log ('App corriendo')
});
app.use ('/mensaje', rutaMensaje)
