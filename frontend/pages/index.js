import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { GetPics } from '../components/get-pictures'
//import { getAllCats, unsplash } from './api/unsplash'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <GetPics />
      </main>
    </div>
  )
}
