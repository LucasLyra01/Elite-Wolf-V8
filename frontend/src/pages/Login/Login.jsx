import React, { useState, useContext } from 'react';
import axios from 'axios';

import { loginToken, logout, isAuthenticated } from '../../components/auth/auth';

import { Link } from 'react-router-dom'
import { Input } from '../../components/Inputs';

import style from './Login.module.scss'

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {

  // alert(user + ' ' + password);

  // const TOKEN_KEY = localStorage;

  // const isAuthenticated = () => localStorage.getItem(TOKEN_KEY);
  
  // console.log(isAuthenticated());

  // const login_token = token_novo => {
  //   localStorage.setItem(TOKEN_KEY, token_novo="asdasd");
  // }

  // login_token();

  // console.log(isAuthenticated());

  // const logout = () => {
  //   localStorage.removeItem(TOKEN_KEY);
  // };
  // logout();

  console.log(isAuthenticated());

  // loginToken();

  // console.log(isAuthenticated());

  axios.get('http://localhost:5000/api/cadastro')
    .then((response) => {
      let dados = response.data.message;
      for (let i = 0; i < dados.length; i++) {
        if(dados[i].email == user && dados[i].senha == password){
          console.log("logado com sucesso");
          loginToken(dados[i]._id);
          console.log(dados[i]._id);
          console.log(isAuthenticated());
          return;
        }
      }
      return console.log("Dados incorretos");;
    });
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);

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
        
        <div className={style.conteinerConteudo}>

            <img src="logo_name.svg" alt="Logo ELite Wolf"/>
            <h1>Bem-vindo(a)</h1>

            <form onSubmit={onSubmit}>

                <button>
                    <img src="icone_google.svg" alt="Google"/>
                    <span>Entre com sua conta do Google</span> 
                </button>

                {/* <Input id={'user'} type={'text'} title={'Digite seu nome'} name={'user'} value={'user'}/> */}
                {/* <Input id={'password'} type={'password'} title={'Digite sua senha'} name={'password'}/> */}

                <div className={style.floatLabel}>
                  <input id='user' type='text' placeholder='Digite seu email' name='user' onChange={onChange} value={values.user}/>
                </div>

                <div className={style.floatLabel}>
                  <input id='password' type='password' placeholder='Digite sua senha' name='password' onChange={onChange} value={values.password}/>
                </div>

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
