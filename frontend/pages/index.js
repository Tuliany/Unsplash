import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { GetPics } from '../components/get-pictures'
//import { getAllCats, unsplash } from './api/unsplash'

export default function Home() {
  const [pics, setPics] = useState([]);
/*   useEffect(() => {
    fetch(`/api/cat`)
        .then(res => res.json())
        .then(json => setPics(json.results))
}, []) */
async function getAllCats() {

  const response = await fetch('/api/cat');
  return await response.json();
}

async function unsplash(data) {
  const response = await fetch(`/api/cat`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: data})
    })
  return await response.json();
  console.log(response.json)
}


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Unsplash!</a>
        </h1>
        {pics.map(pic => (
                <img src={`${pic.urls.regular}`} />
            ))}

       </main>
    </div>
  )
}
