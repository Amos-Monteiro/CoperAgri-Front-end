'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.teste}>
        <Link href='/routes/login'>Login</Link>
    </div>
  );
}
