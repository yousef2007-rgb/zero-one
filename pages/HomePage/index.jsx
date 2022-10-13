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
      <main className=" flex flex-col items-center mt-52 min-h-screen">
        <h2 className="bg-myorange inline-block text-gray7 px-6 py-4 text-6xl shadow-xl text-robot w-fit">
          who are we?
        </h2>
        <span
          className="animate-bounce text-3xl block cursor-pointer mt-8"
          onClick={() => window.scrollTo(0, 1000)}
        >
          👇
        </span>
        <p className="text-5xl text-gray3 px-4 text-normal text-center mt-52">
          we are a group of AlredwanSchool's student's who's itrested in{" "}
          <span className="text-red-500 animate-pulse font-display">
            Robots
          </span>{" "}
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
