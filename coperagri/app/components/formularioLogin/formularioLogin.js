'use client'

import { useState } from "react"

import style from './formularioLogin.css'

export default function FormularioLogin(){

    const [name, setName] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)

    const FunLogin =  async (e) => {
        e.preventDefault();
        
        // Configurando o body da requisição
        const loginData = {
            email: email,
            senha: senha
        };

        try {
            const response = await fetch('http://localhost:8080/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            // Verifica se o login foi bem-sucedido
            if (response.ok) {
                const data = await response.json();
                // Armazena o token JWT (por exemplo, no localStorage)
                localStorage.setItem('token', data.token);
                localStorage.setItem('id', data.id);
                alert('Login bem-sucedido!');
            } else {
                setError("Login falhou. Verifique suas credenciais.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            setError("Ocorreu um erro ao tentar realizar o login.");
        }
    
    }

    return(
    <>
        <form onSubmit={FunLogin}>
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
