'use client'
import styles from "./page.module.css";
import Link from "next/link";

import Image from "next/image";
import LoginImg from './imagens/Loginicon.png'
import Logo from './imagens/logo.png'
import  ImgRodape from  './imagens/imgAnteriorRodape.png'
import  Imgheader from  './imagens/PlantacaoMilho.png'


import Rodape from "./components/rodape/rodape";

export default function Home() {
  return (
    <div className={styles.Home}>

        <header className={styles.header}>

        <Image
            src={Imgheader}
            alt="plantação de milho imagem"
            width={1395}
            height={150}
          
          />

        </header>
     
        <div className={styles.acessoLogin}>
          <Image
            src={LoginImg}
            alt="Ícone de Login"
            width={50}
            height={45}
          
            
          />
          <Link className={styles.linkLogin} href="/routes/login">Fazer Login</Link>
        </div>

        

        <div className={styles.ParagrafoContainer}>

          <div className={styles.imgContainer}>
           <Image
            src={Logo}
            alt="CoperAgri logo"
            width={175}
            height={200}
          />
          </div>

          <p className={styles.Paragrafo}>
            Somos uma empresa de tecnologia focada em inovações logísticas para a agricultura familiar,
            priorizando soluções sustentáveis que beneficiam as famílias que dependem da agricultura.
            Nosso trabalho está alinhado com os Objetivos de Desenvolvimento Sustentável (ODS), especialmente
            com o ODS 2 (erradicação da fome) e o ODS 8 (crescimento econômico sustentável). Ao implementar
            tecnologias que otimizam a logística, fortalecemos a economia local e reduzimos desigualdades
            (ODS 10). Apoiamos a agricultura familiar, garantindo condições mais justas no mercado, aumentando
            a renda e melhorando a qualidade de vida. Também promovemos o uso responsável dos recursos naturais,
            contribuindo para o ODS 12. Nossa abordagem fortalece cadeias produtivas locais e incentiva um
            desenvolvimento econômico inclusivo e sustentável.
          </p>

          <div className='imgRodape'>
            <Image
            src={ImgRodape}
            alt="Imagem logo programas sociais"
            width={250}
            height={93}
            />

        </div> 

        </div>

        

        <Rodape className='rodape' />
     
    </div>
  );
}
