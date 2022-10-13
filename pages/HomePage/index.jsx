import Header from "../../components/Header";
import Intro from "../../components/Intro";

import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>zero one</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.gif" />
      </Head>
      <Header />
      <Intro />
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}