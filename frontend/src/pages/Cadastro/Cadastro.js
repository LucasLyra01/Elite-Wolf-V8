import React, { useState, useContext } from "react";
import axios from 'axios';
// const axios = require('axios');

import { Link } from "react-router-dom";
import { Input } from "../../components/Inputs";

import style from "./Cadastro.module.scss";

function initialState() {
  return {
    username: "",
    user: "",
    password: "",
    selectOption: "",
    selectOptionMonth: "",
    selectOptionYear: "",
  };
}

async function login({
  username,
  user,
  password,
  selectOption,
  selectOptionMonth,
  selectOptionYear,
}) {
  alert(
    "Username: " +
      username +
      "\n" +
      "User: " +
      user +
      "\n" +
      "Password: " +
      password +
      "\n" +
      "Dia selecionado: " +
      selectOption +
      "\n" +
      "Mês selecionado: " +
      selectOptionMonth +
      "\n" +
      "Ano selecionado: " +
      selectOptionYear
  );

  const data_aniversario =
    selectOption + "/" + selectOptionMonth + "/" + selectOptionYear;

  const data = {
    "nome_pessoa": username,
    "data_nascimento": data_aniversario,
    "email": user,
    "password": password,
  };

  console.log(data.data_nascimento);

  axios.get('http://localhost:5000/api/cadastro/').then(function(response) {
    console.log(response.data);
  });

  console.log('finalizando');

  return { error: "Usuário ou senha inválido" };
}

const Cadastro = () => {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    login(values);
  }

  const ArrayData = {
    ArrayMeses: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  };

  function funcDias() {
    const dias = [];
    // dias.push('Dia')
    for (let index = 1; index <= 31; index++) {
      dias.push(index);
    }

    return dias;
  }

  function funcAnos() {
    const anos = [];

    for (let index = 1921; index <= 2021; index++) {
      anos.push(index);
    }

    anos.reverse();

    return anos;
  }

  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
        <img src="logo_lobo.svg" alt="Logo lobo" />
      </div>

      <div className={style.containerConteudo}>
        <img src="logo_name.svg" alt="Logo ELite Wolf" />
        <h1>Bem-vindo(a)</h1>

        <form onSubmit={onSubmit}>
          <button>
            <img src="icone_google.svg" alt="Google" />
            <span>Entre com sua conta do Google</span>
          </button>
          <div className={style.floatLabel}>
            <input
            
            id="username"
              type="text"
              placeholder="Digite seu nome"
              name="username"
              onChange={onChange}
              value={values.username}
              />

            </div>
          <div className={style.dropdown}>
            <div>
              <select
                className={style.buttonSelect}
                name="selectOption"
                onChange={onChange}
                value={values.selectOption}
              >
                <option selected hidden>
                  Dia
                </option>
                {funcDias().map((data) => (
                  <option>{data}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                className={style.buttonSelect}
                name="selectOptionMonth"
                onChange={onChange}
                value={values.selectOptionMonth}
              >
                <option selected hidden>
                  Mês
                </option>
                {ArrayData.ArrayMeses.map((data) => (
                  <option>{data}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                className={style.buttonSelect}
                name="selectOptionYear"
                onChange={onChange}
                value={values.selectOptionYear}
              >
                <option selected hidden>
                  Ano
                </option>
                {funcAnos().map((data) => (
                  <option>{data}</option>
                ))}
              </select>
            </div>
          </div>

          <input
            id="user"
            type="text"
            placeholder="Digite seu email"
            name="user"
            onChange={onChange}
            value={values.user}
          />
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            name="password"
            onChange={onChange}
            value={values.password}
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
