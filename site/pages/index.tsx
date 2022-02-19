import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Keyboard from 'react-simple-keyboard';
import UnixleSet from './unixle';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unixle</title>
        <meta name="description" content="A wordle for unix commands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UnixleSet attempts={5} cmds={["grep", "nano", "sudo", "nmap"]}/>
        <div className={styles.keyboardWrapper}>
          <Keyboard
            onChange={onChange}
            onKeyPress={onKeyPress}
            layout={{
                default: ["q w e r t y u i o p {bksp}", 
                          "a s d f g h j k l {enter}", 
                          "z x x c v b n m - ."]
            }}
          />
        </div>
      </main>
    </div>
  )
}

function onChange(input) {
  console.log("Input changed", input);

}

function onKeyPress(button) {
  document.getElementsByTagName('UnixleSet')
  console.log("Button pressed", button);
}

export default Home