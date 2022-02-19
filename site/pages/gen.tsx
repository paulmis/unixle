import React from "react";

type WordleProps = {
    current: number
}

export default class Wordle extends React.Component {
    key: string;            // the answer
    attempts: number;       // no. of allowed attempts

    constructor(key: string, attempts: number) {
        super({current: 0});
        this.key = key;
        this.attempts = attempts;
    }

    public render() {
        return (
            <div className="wordle">
                {[...Array(this.attempts)].map((el, index) => <WordleRow key={index}/>)}
            </div>
        )
    }

    public check(guess: string) {

    }

    public get length() {
        return this.key.length;
    }
}

class WordleRow extends React.Component {
    length: number;

    constructor(length: number) {
        super({});
        this.length = length;
    }

    public render() {
        return (
            <div className="wordleRow">
                {[...Array(this.length)].map((el, index) => <WordleTile/>)}
            </div>
        )
    }
}

type WordleTileProps = {
    char: string
}

class WordleTile extends React.Component {
    public render() {
        return (<div className="wordleTile"/>)
    }
}