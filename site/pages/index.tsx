import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unixle</title>
        <meta name="description" content="A wordle for unix commands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wordles}>
          <div className={styles.wordle}>
            <div className={styles.wordleRow}>
              <div className={`${styles.wordleTile} ${styles.partial}`}>G</div>
              <div className={`${styles.wordleTile} ${styles.bad}`}>R</div>
              <div className={`${styles.wordleTile} ${styles.exact}`}>E</div>
              <div className={`${styles.wordleTile} ${styles.bad}`}>P</div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
          </div>
          <div className={styles.wordle}>
            <div className={styles.wordleRow}>
              <div className={`${styles.wordleTile} ${styles.bad}`}>G</div>
              <div className={`${styles.wordleTile} ${styles.bad}`}>R</div>
              <div className={`${styles.wordleTile} ${styles.exact}`}>E</div>
              <div className={`${styles.wordleTile} ${styles.exact}`}>P</div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
          </div>
          <div className={styles.wordle}>
            <div className={styles.wordleRow}>
              <div className={`${styles.wordleTile} ${styles.partial}`}>G</div>
              <div className={`${styles.wordleTile} ${styles.partial}`}>R</div>
              <div className={`${styles.wordleTile} ${styles.partial}`}>E</div>
              <div className={`${styles.wordleTile} ${styles.bad}`}>P</div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
          </div>
          <div className={styles.wordle}>
            <div className={styles.wordleRow}>
              <div className={`${styles.wordleTile} ${styles.partial}`}>G</div>
              <div className={`${styles.wordleTile} ${styles.bad}`}>R</div>
              <div className={`${styles.wordleTile} ${styles.bad}`}>E</div>
              <div className={`${styles.wordleTile} ${styles.bad}`}>P</div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
            <div className={styles.wordleRow}>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
              <div className={styles.wordleTile}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
