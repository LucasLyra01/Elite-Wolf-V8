const express = require('express');
const cors = require('cors');
const app = express();

var firebase = require('firebase/app');

require('firebase/auth');

var firebaseConfig = {
    apiKey: "AIzaSyCfZyv5wRVdUfJSD_INqadDbIR16HzTb1k",
    authDomain: "elite-wolf-v1.firebaseapp.com",
    projectId: "elite-wolf-v1",
    storageBucket: "elite-wolf-v1.appspot.com",
    messagingSenderId: "462919751100",
    appId: "1:462919751100:web:ab82e0e1ec901a0b2587b9",
    measurementId: "G-4M5MDKK8T1"
};

var teste = firebase.initializeApp(firebaseConfig);

// console.log(teste);

// var provider = new firebase.auth.GoogleAuthProvider();

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// provider.setCustomParameters({
//     'login_hint': 'user@example.com'
// });

const mongoose = require('mongoose');

const port = 5000;
const hostname = 'localhost';


const cadastroRoutes = require('./routes/cadastro-routes');

app.use(cors());

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

app.use('/api/cadastro', cadastroRoutes);


mongoose.connect('mongodb://root:root@localhost:27017/projeto1?authSource=admin', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Erro ao conectar no Mongo"));
db.once('open', function(){
    console.log("Banco de dados conectado com sucesso");
});

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: `O servidor da Elite Wolf está rodando`
    })
})

app.listen(port, hostname, () => {
    console.log(`O servidor da Elite Wolf está rodando em: http://${hostname}:${port}`);
});

