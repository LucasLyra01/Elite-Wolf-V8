import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar/index';
import { isAuthenticated } from '../../components/auth/auth';
import { Link } from 'react-router-dom';

import axios from 'axios';

import style from './Perfil.module.scss';

const Perfil = () => {

    const [count, setCount] = useState(true);

    const [name, setName] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if(count){
            async function buscaDados(){
                await axios.get('http://localhost:5000/api/cadastro/' + isAuthenticated())
                    .then(async (response) => {
                        const dados = await response.data.message
                        console.log(dados);
                        setName(dados.nome_pessoa);
                        setEmail(dados.email);
                        setDataNascimento(dados.data_nascimento)
                        setCount(false);
                });
            }
            buscaDados();
        }
    })



    return(
        <div>
            <div>
                <Sidebar text={"perfil"}/>
            </div>
            <div className={style.container}>
                
                <h1>Perfil</h1>

                <div className={style.floatLabel}>
                    <label className={style.upper}>{name}</label>
                    <label>{email}</label>
                    {dataNascimento ? <label>{dataNascimento}</label> : 'Pendente'}
                </div>

                <div className={style.botoes}>
                    <Link to='/profile_edit'>
                        <button className={style.editar}>Editar</button>
                    </Link>
                </div>





            </div>
        </div>

    )
}

export default Perfil;