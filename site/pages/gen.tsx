import React from "react";
import styles from '../styles/Home.module.css'

type WordleProps = {
    current: number
}

interface UnixleProps {
    attempts: number,
    length: number
}

export default class Wordle extends React.Component<UnixleProps> {
    constructor(props: UnixleProps, key: string, attempts: number) {
        super(props);
    }

    public render() {
        return (
            <div className={styles.wordle}>
                {[...Array(this.props.attempts)].map((el, index) => <WordleRow length={this.props.length} key={index}/>)}
            </div>
        )
    }
}

interface UnixleRowProps {
    length: number
}

class WordleRow extends React.Component<UnixleRowProps> {
    constructor(props: UnixleRowProps) {
        super(props);
    }

    public render() {
        return (
            <div className={styles.wordleRow}>
                {[...Array(this.props.length)].map((el, index) => <WordleTile key={index}/>)}
            </div>
        )
    }
}

class WordleTile extends React.Component {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (<div className={styles.wordleTile}/>)
    }
}