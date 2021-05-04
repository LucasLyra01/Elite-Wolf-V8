import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar/index';
import { isAuthenticated } from '../../components/auth/auth';
import { Link } from 'react-router-dom';

import axios from 'axios';

import style from './PerfilEdit.module.scss';

function initialState(){
    return { new_name: '', new_sobrenome: '', new_email: '', new_selectOption: '', new_selectOptionMonth: '', new_selectOptionYear: ''}
}

const Perfil = () => {
    const [values, setvalues] = useState(initialState);
    const [count, setCount] = useState(true);
    const [name, setName] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        if(count){
            async function buscaDados(){
                await axios.get('http://localhost:5000/api/cadastro/' + isAuthenticated())
                    .then(async(response) => {
                        const dados = await response.data.message
                        console.log(dados);
                        setName(dados.nome_pessoa);
                        setEmail(dados.email);
                        setDataNascimento(dados.data_nascimento)
                        setSobrenome(dados.sobrenome)
                        setSenha(dados.senha);
                        setCount(false);
                });
            }
            buscaDados();
        }
    });

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
    };
    
    function funcAnos() {
        const anos = [];
    
        for (let index = 1921; index <= 2021; index++) {
          anos.push(index);
        }
    
        anos.reverse();
        return anos;
    };

    function Salvar(props){
        
        const dados = [];

        if(values.new_name != ""){
            dados.push({nome_pessoa: values.new_name});
        }else{
            dados.push({nome_pessoa: name});
        }
        if(values.new_sobrenome != ""){
            dados.push({sobrenome: values.new_sobrenome});
        }else{
            dados.push({sobrenome: sobrenome});
        }
        if(values.new_email != ""){
            dados.push({email: values.new_email});
        }else{
            dados.push({email: email});
        }

        dados.push({senha: senha})
        console.log(dados);
        console.log(dados.length);

        let contador = 0;
        if(contador == 0){
            for (let i = 0; i <= dados.length; i++) {
                axios.put('http://localhost:5000/api/cadastro/' + isAuthenticated(), dados[i])
                    .then((response) => {
                        console.log(response.data.message);
                });
            }
        }
        contador = contador + 1;
        console.log(contador);

        // alert(values.new_email);
        // if(
        // values.new_name == "" && 
        // values.new_sobrenome == "" &&
        // values.email == "" &&
        // values.new_selectOption == "" &&
        // values.new_selectOptionMonth == "" &&
        // values.new_selectOptionYear == ""){
        //     alert('Preencha todos os campos') 
        //     return
        // }
    }

    function onSubmit(event){
        event.preventDefault();

        // alert(values.new_name);

        Salvar();
        
    }

    function onChange(event){

        const { value, name } = event.target;

        setvalues({
            ...values,
            [name]: value
        });
    }



    return(
        <div>
            <div>
                <Sidebar text={"perfil"}/>
            </div>
            <div className={style.container}>
                
                <h1>Perfil</h1>

                <form onSubmit={onSubmit}>

                    <div className={style.floatLabel}>
                        <input 
                            className={style.upper} 
                            placeholder={name} 
                            id='new_name' 
                            type='text' 
                            name='new_name' 
                            onChange={onChange} 
                            value={values.new_name}/>
                        
                    </div>
                    <div className={style.floatLabel}>
                        <input 
                            className={style.upper} 
                            placeholder={sobrenome ? sobrenome : 'Definir Sobrenome'} 
                            id='new_sobrenome' 
                            type='text' 
                            name='new_sobrenome' 
                            onChange={onChange} 
                            value={values.new_sobrenome}/>
                        
                    </div>
                    
                    <div className={style.floatLabel}>
                        <input 
                            placeholder={email} 
                            id='new_email' 
                            type='email' 
                            name='new_email' 
                            onChange={onChange} 
                            value={values.new_email}/>
                        
                    </div>

                    <div className={style.floatLabel}>
                        <label>{dataNascimento ? 'Data de nascimento ' + dataNascimento : 'Definir data de nascimento'}</label>
                    </div>

                    <div className={style.dropdown}>
                        <div>
                            <select
                                className={style.buttonSelect}
                                name="new_selectOption"
                                onChange={onChange}
                                value={values.new_selectOption}
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
                                name="new_selectOptionMonth"
                                onChange={onChange}
                                value={values.new_selectOptionMonth}
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
                                name="new_selectOptionYear"
                                onChange={onChange}
                                value={values.new_selectOptionYear}
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

                    <div className={style.botoes}>
                        <button className={style.salvar} type="submit">Salvar</button>

                        <Link to='/profile'>
                            <button className={style.cancelar}>Cancelar</button>
                        </Link>
                    </div>

                </form>




            </div>
        </div>

    )
}

export default Perfil;