import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Keyboard from 'react-simple-keyboard';
import Wordle from './gen';

import {KeyboardLayoutObject} from 'react-simple-keyboard'
var kela: KeyboardLayoutObject = {
    default: ["q w e r t y u i o p {bksp}", "a s d f g h j k l {enter}", "z x x c v b n m - ."]
}

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
          <Wordle attempts={5} length={4}></Wordle>
          <Wordle attempts={5} length={4}></Wordle>
          <Wordle attempts={5} length={4}></Wordle>
          <Wordle attempts={5} length={4}></Wordle>
        </div>
        <div className={styles.keyboardWrapper}>
          <Keyboard
            onChange={onChange}
            onKeyPress={onKeyPress}
            layout={kela}
            
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
  console.log("Button pressed", button);
}

export default Home