'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import Rodape from "./components/rodape/rodape";

export default function Home() {
  return (
    <div className={styles.teste}>

     
        <div className='acessoLogin'>
          <Image
            src="/imagens/Loginicon.png"
            alt="Ícone de Login"
            width={50}
            height={50}
          />
          <Link className='linkLogin' href="/routes/login">Fazer Login</Link>
        </div>

        <div className='imgContainer'>
          <Image
            src="/imagens/1.png"
            alt="CoperAgri logo"
            width={200}
            height={100}
          />
        </div>

        <div className='ParagrafoContainer'>
          <p>
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
        </div>

        <Rodape className='rodape' />
     
    </div>
  );
}
