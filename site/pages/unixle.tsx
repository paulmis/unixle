import React from "react";
import styles from '../styles/Home.module.css'

interface UnixleSetProps {
    attempts: number,
    cmds: string[]
}

export default class UnixleSet extends React.Component<UnixleSetProps> {
    public render() {
        return <div className={styles.wordles}>
            {this.props.cmds.map((el: string, index: number) => <Unixle attempts={this.props.attempts} cmd={el} key={index}/>)}
        </div>
    }
}

interface UnixleProps {
    attempts: number,
    cmd: string
}
 
class Unixle extends React.Component<UnixleProps> {
    public render() {
        return (
            <div className={styles.unixle}>
                {[...Array(this.props.attempts)].map((el, index) => <UnixleRow length={this.props.cmd.length} key={index}/>)}
            </div>
        )
    }
}

interface UnixleRowProps {
    length: number
}

class UnixleRow extends React.Component<UnixleRowProps> {
    public render() {
        return (
            <div className={styles.unixleRow}>
                {[...Array(this.props.length)].map((el, index) => <UnixleTile key={index}/>)}
            </div>
        )
    }
}

class UnixleTile extends React.Component {
    public render() {
        return (<div className={styles.unixleTile}/>)
    }
}