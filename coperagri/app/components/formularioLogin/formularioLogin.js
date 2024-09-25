'use client'

import { useState } from "react"

import style from './formularioLogin.css'

export default function FormularioLogin(){

    const [name, setName] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const FunCadastro = (e)=>{
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
        <form onSubmit={FunCadastro}>
            <label>
                <span><strong>Email</strong></span>
                <input placeholder='Digite o email...' className="input-text" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
            <br/>
            <label>
                <span><strong>Senha</strong></span>
                <input placeholder="Digite a senha..." className="input-text" type={showPassword ? 'text' : 'password'} onChange={(e)=>{setSenha(e.target.value)}}/>
            </label>
            <button className="btn-versenha" onClick={()=>{setShowPassword(!showPassword)}}>{showPassword == true? 'esconder senha' : 'ver senha'}</button>
            <br/>
            <input className="input-submit" type="submit" value="Entrar"/>
            <br/>
            <a href="#">Esqueci a senha</a>
        </form>
    </>
)
}
