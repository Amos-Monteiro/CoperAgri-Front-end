'use client'
import { useState } from "react"
import Link from "next/link"

import Welcome from '../../components/welcome/welcome'
import Imagem from '../../components/imagem-direita-welcome/imagem'

import style from './login.css'

export default function Login(){
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const GoLogin = (e)=>{
        e.preventDefault()

        if(
            name.length > 0 &&
            cpf.length > 0 &&
            senha.length > 0 &&
            email.length > 0
        ){
            console.log(name, cpf, senha, email)
        }
        else{
            console.log('Preencha todos os campos!')
        }
    }

    return(
    <>
        <div className="login">
            <div id="left">
                <Link href='/'>Voltar</Link>
                <Welcome/>
                <h3>Faça o Login</h3>
                <form onSubmit={GoLogin}>
                    <label>
                        <span>Nome</span>
                        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                    </label>
                    <br/>
                    <label>
                        <span>CPF</span>
                        <input type="text" onChange={(e)=>{setCpf(e.target.value)}}/>
                    </label>
                    <br/>
                    <label>
                        <span>Email</span>
                        <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </label>
                    <br/>
                    <label>
                        <span>Senha</span>
                        <input type={showPassword ? 'text' : 'password'} onChange={(e)=>{setSenha(e.target.value)}}/>
                    </label>
                    <button onClick={(e)=>{setShowPassword(!showPassword)}}>{showPassword == true? 'esconder senha' : 'ver senha'}</button>
                    <br/>
                    <input type="submit" value="Entrar"/>
                </form>
            </div>
            <div id="right">
                <Imagem/>
            </div>
        </div>
    </>
    )
}