import React from 'react';
import './keyboardView.css';

const Alphabets1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const Alphabets2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const Alphabets3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];


export default class MainKeyboardView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenValue: ""
        }
    }
    values = (alp) => {
        return <button id={alp} key={alp} onClick={() => this.checkChange(alp)}>{alp}</button>
    }
    checkChange = (alp) => {
        var finalWord = this.state.screenValue + alp

        this.setState({
            screenValue: finalWord
        })
    }
    componentDidMount() {
        this.setState({
            screenValue:""
        })
    }

    componentWillUnmount() {
        this.setState({
            screenValue:""
        })
    
    }
    checkChangeBackSpace = () => {
        if (this.state.screenValue.length > 0) {
            var length = this.state.screenValue.length
            var finalWord = this.state.screenValue.substring(0, length - 1);
            this.setState({
                screenValue: finalWord
            })
        }
    }
    render() {
        return (
            <div className="MainDiv">
                {
                    Alphabets1.map((alp, idx) =>
                        this.values(alp)

                    )} &nbsp;
             <button name='space' value=' ' onClick={() => this.checkChangeBackSpace()}>BACK SPACE</button>
                <br />
                {
                    Alphabets2.map((alp) =>
                        this.values(alp)
                    )
                }<br />
                {
                    Alphabets3.map((alp) =>
                        this.values(alp)
                    )
                }
                <br />
                <button name='space' value=' ' onClick={() => this.checkChange(" ")}>SPACE</button>
                <br />
                {this.state.screenValue}
            </div>
        )
    };
}