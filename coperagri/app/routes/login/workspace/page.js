'use client'

import {useState} from 'react'

import Rodape from "../../../components/rodape/rodape"
import PagInicial from '.././../../components/pagina-inicial/pagina-inicial'
import Cabecalho from '../../../components/header/cabecalho'

export default function Poslogin(){
    
    const [component, setComponent] = useState('')

    return(
        <>
         <div>
            <Cabecalho/>
         </div>

        <div>
            <PagInicial/>
        </div>

        <Rodape/>
        </>
    )
}