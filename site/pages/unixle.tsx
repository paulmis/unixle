import React from "react";
import styles from '../styles/Home.module.css'

interface UnixleSetProps {
    attempts: number,
    cmds: Array<string>
}

interface UnixleSetState {
    ans: Array<string>,
    current: number
}

export default class UnixleSet extends React.Component<UnixleSetProps, UnixleSetState> {
    constructor(props: UnixleSetProps) {
        super(props);
        this.state = {
            ans: Array(this.props.attempts).fill(''),
            current: 0
        };
    }

    public render() {
        return <div className={styles.wordles}>
            {this.props.cmds
                .map((el: string, index: number) => 
                <Unixle 
                    attempts={this.props.attempts} 
                    cmd={el}
                    ans={this.state.ans} 
                    current={this.state.current} 
                    key={index}/>)}
        </div>
    }

    public onKeyPress(key: string) {
        let answer: string = this.state.ans[this.state.ans.length - 1];

        // Backspace -> delete last character
        if (key == "{bksp}") {
            if (answer && answer.length != 0) {
                let state = [...this.state.ans];
                state[this.state.ans.length - 1] = answer.slice(0, -1);
                this.setState({
                    ans: state,
                    current: this.state.current
                });
            }

        // Enter -> check the answer
        } else if (key == "{enter}") {
            if (answer && answer.length == this.length) {
                this.setState({
                    ans: this.state.ans,
                    current: this.state.current + 1
                });
            }
        }

        // Anything else -> input the character
        else {
            if (answer && answer.length < this.length) {
                let state = [...this.state.ans];
                answer += key;
                state[this.state.ans.length - 1] = answer;
                this.setState({
                    ans: state,
                    current: this.state.current
                });
            }
        }
    }

    public get length() {
        return this.props.cmds ? this.props.cmds[0].length : 0;
    }
}

interface UnixleProps {
    attempts: number,
    cmd: string,
    ans: Array<string>,
    current: number
}
 
class Unixle extends React.Component<UnixleProps> {
    constructor(props: UnixleProps) {
        super(props);
    }

    public render() {
        console.log(this.props);
        return (
            <div className={styles.unixle}>
                {[...Array(this.props.attempts)]
                    .map((el, index) => 
                    <UnixleRow 
                        cmd={this.props.cmd} 
                        ans={this.props.ans[index]}
                        locked={this.props.current > el}
                        current={this.props.current == el}
                        key={index}/>)}
            </div>
        )
    }

    public get length() {
        return this.props.cmd.length;
    }
}

interface UnixleRowProps {
    cmd: string
    ans: string,
    locked: boolean
    current: boolean
}

class UnixleRow extends React.Component<UnixleRowProps> {
    
    public render() {   
        console.log(this.props);
        return (
            <div className={styles.unixleRow}>
                {Array
                    .from(
                        {length: this.length}, 
                        (_, i) => this.props.ans[i] ?? "")
                    .map(
                        (el: string, index: number) => 
                        <UnixleTile colorClass={this.getClassName(el, index)} key={index}>el</UnixleTile>)
                }
            </div>
        )
    }

    public get length() {
        return this.props.cmd.length;
    }

    private getClassName(ans: string, idx: number) {
        if (this.props.current && this.props.locked) {
            if (this.props.cmd[idx] == ans) return styles.exact;
            if (this.props.cmd.includes(ans)) return styles.partial;
            return styles.none;
        }
        if (this.props.current)
            return styles.current;
        else return styles.empty;
    }
}

interface UnixleTileProps {
    colorClass: string
}

class UnixleTile extends React.Component<UnixleTileProps> {
    public render() {
        return (<div className={`${styles.unixleTile} ${this.props.colorClass}`}/>)
    }

    public setColorClass(colorClass: string) {
        this.setState({colorClass: colorClass});
    }
}