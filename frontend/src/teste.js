const axios = require('axios');

const data = {
    "nome_pessoa": "Lucas",
    "data_nascimento": "09012000",
    "email": "lucaslyra3@gmail.com",
    "senha": "teste123"
}

axios.post('http://localhost:5000/api/cadastro', data).then(function(response) {
    console.log(response.data);
});

// axios.get('http://localhost:5000/api/cadastro/', data).then(function(response) {
//     console.log(response.data);
// });