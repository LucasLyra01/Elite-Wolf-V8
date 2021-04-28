import React, { useState, useContext } from 'react';
import axios from 'axios';

// import { useHistory } from 'react-router-dom';
// import StoreContext from 'components/Store/Context';
// import UIButton from 'components/UI/Button/Button';

// import './Login.css';

import { Link } from 'react-router-dom'
import { Input } from '../../components/Inputs';

import style from './Login.module.scss'

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {

  alert(user + password);

  axios.get('http://localhost:5000/api/cadastro')
    .then((response) => {
      let dados = response.data.message;
      for (let i = 0; i < dados.length; i++) {
        if(dados[i].email == user && dados[i].senha == password){
          console.log("logado com sucesso");
          return;
        }
      }
      return console.log("Dados incorretos");;
    });
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
//   const [error, setError] = useState(null);
//   const { setToken } = useContext(StoreContext);
//   const history = useHistory();

  function onChange(event) {

    console.log(event.target);

    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    // if (token) {
    //   setToken(token);
    //   return history.push('/');
    // }

    // setError(error);
    // setValues(initialState);
  }

  return (
    <div className={style.container}>
        
        <div className={style.containerLogo}>
                <img src="logo_lobo.svg" alt="Logo lobo"/>
        </div>
        
        <div className={style.containerConteudo}>

            <img src="logo_name.svg" alt="Logo ELite Wolf"/>
            <h1>Bem-vindo(a)</h1>

            <form onSubmit={onSubmit}>

                <button>
                    <img src="icone_google.svg" alt="Google"/>
                    <span>Entre com sua conta do Google</span> 
                </button>

                {/* <Input id={'user'} type={'text'} title={'Digite seu nome'} name={'user'} value={'user'}/> */}
                {/* <Input id={'password'} type={'password'} title={'Digite sua senha'} name={'password'}/> */}

                <input id='user' type='text' placeholder='Digite seu email' name='user' onChange={onChange} value={values.user}/>
                <input id='password' type='password' placeholder='Digite sua senha' name='password' onChange={onChange} value={values.password}/>

                <button type='submit'>Entrar</button>

                <Link to="/" className={style.link}>Esqueceu sua senha?</Link>

                <br/>

                <p>
                    Ainda não possui senha?{" "}
                    <Link to="/cadastro" className={style.link}>Cadastre-se</Link>
                </p>

            </form>

        </div>
    </div>
  );
};

export default UserLogin;
