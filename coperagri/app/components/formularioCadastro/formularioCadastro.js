'use client'

import { useState } from "react"

import style from './formularioCadastro.css'

export default function FormularioCadastro() {

    const [nome, setName] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmSenha, setConfirmSenha] = useState('')
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const FunCadastro = async (e) => {
        e.preventDefault();

        const cadastrarData = {
            nome: nome,
            senha: senha,
            email: email
        };

        try {
            const response = await fetch('http://localhost:8080/users/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cadastrarData),
            });

            // Verifica se o login foi bem-sucedido
            if (response.ok) {
                const data = await response.json();
        
                localStorage.setItem('id', data.id);
                alert('Login bem-sucedido!' + data.nome);
            } else {
                setError("Login falhou. Verifique suas credenciais.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            setError("Ocorreu um erro ao tentar realizar o cadastro.");
        }
    }

    return (
        <>
            <form onSubmit={FunCadastro}>
                <label>
                    <span><strong>Nome</strong></span>
                    <input placeholder="Digite seu nome..." className="input-text" type="text" onChange={(e) => { setName(e.target.value) }} />
                </label>
                <br />
                <label>
                    <span><strong>Email</strong></span>
                    <input placeholder="Digite seu email..." className="input-text" type="email" onChange={(e) => { setEmail(e.target.value) }} />
                </label>
                <br />
                <label>
                    <span><strong>Senha</strong></span>
                    <input placeholder="Crie uma senha..." className="input-text" type={showPassword ? 'text' : 'password'} onChange={(e) => { setSenha(e.target.value) }} />
                </label>
                <br />
                <label>
                    <span><strong>Confimar Senha</strong></span>
                    <input placeholder="Confirme a senha..." className="input-text" type={showPassword ? 'text' : 'password'} onChange={(e) => { setConfirmSenha(e.target.value) }} />
                </label>
                <button className="btn-versenha" onClick={() => { setShowPassword(!showPassword) }}>{showPassword == true ? 'esconder senha' : 'ver senha'}</button>
                <br />
                <input className="input-submit" type="submit" value="Cadastrar" />
            </form>
        </>
    )
}
