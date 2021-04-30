const axios = require('axios');

const data = {
    "nome_pessoa": "Lucas",
    "data_nascimento": "09012000",
    "email": "lucaslyra3@gmail.com",
    "senha": "teste123"
}

axios.get('http://localhost:5000/api/cadastro').then((response) => {
    console.log(response);
});


// axios.get('http://localhost:5000/api/cadastro/', data).then(function(response) {
//     console.log(response.data);
// });