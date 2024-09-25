'use client'

import { useState } from "react"

import style from './formularioCadastro.css'

export default function FormularioCadastro(){

    const [name, setName] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmSenha, setConfirmSenha] = useState('')
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const FunLogin = (e)=>{
        e.preventDefault()

        if(
            name.length <= 0 ||
            senha.length <= 0 ||
            email.length <= 0
        ){
            console.log('Preencha todos os campos!')
        }
        else if(senha != confirmSenha){
            console.log('As senhas não são iguais!')
        }
        else{
            console.log(name, senha, email)
        }
    }

    return(
    <>
        <form onSubmit={FunLogin}>
            <label>
                <span><strong>Nome</strong></span>
                <input placeholder="Digite seu nome..." className="input-text" type="text" onChange={(e)=>{setName(e.target.value)}}/>
            </label>
            <br/>
            <label>
                <span><strong>Email</strong></span>
                <input placeholder="Digite seu email..." className="input-text" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
            <br/>
            <label>
                <span><strong>Senha</strong></span>
                <input placeholder="Crie uma senha..." className="input-text" type={showPassword ? 'text' : 'password'} onChange={(e)=>{setSenha(e.target.value)}}/>
            </label>
            <br/>
            <label>
                <span><strong>Confimar Senha</strong></span>
                <input placeholder="Confirme a senha..." className="input-text" type={showPassword ? 'text' : 'password'} onChange={(e)=>{setConfirmSenha(e.target.value)}}/>
            </label>
            <button className="btn-versenha" onClick={()=>{setShowPassword(!showPassword)}}>{showPassword == true? 'esconder senha' : 'ver senha'}</button>
            <br/>
            <input className="input-submit" type="submit" value="Cadastrar"/>
        </form>
    </>
)
}
