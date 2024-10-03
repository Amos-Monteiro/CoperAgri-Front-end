'use client'
import Image from "next/image"
import Plantacao from '../../imagens/PlantacaoMilho.png'
import styles from 'cabecalho.css'

export default function Cabecalho(params) {

    return(


        <header className={styles.cabecalho}>
            <Image
            src={Plantacao}
            alt="plantação de milho imagem"
            />
            <div>
                <button onClick={()=>setComponent(1)}>Página Inicial</button>
                <button onClick={()=>setComponent}>Fornecedor</button>
                <button onClick={()=>setComponent}>Colaborador</button>
                <button onClick={()=>setComponent}>Serviço</button>
                <button onClick={()=>setComponent}>Relatório</button>
                <button onClick={()=>setComponent}>
                 <link href="/"> Sair </link>
                </button>
            </div>
            <labe>
                <span>Pesquisar</span>
                <input placeholder="Pesquisar..." type='text'/>
            </labe>

        </header>
    )
    
}


