'use client'

import {useState} from 'react'
import styles from 'pagina-inicial.css'

export default function Paginainicial(){

    return(
        <>
        <div className={styles.PaginaInicialContainer}>

            <h2>Cadastramento</h2>
            <button>Fornecedor(a)</button>
            <button>Colaborador(a)</button>
            <button>Serviço</button>
            <button>Produto</button>
        </div>
        </>
    )
}