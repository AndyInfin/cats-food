import React, { Component } from 'react';
import './App.css';

class BottomText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textDefault: 'Чего сидишь? Порадуй котэ',
            linktext: 'купи'
        }
    }

    render() {
        let bottomText;
        
        if (this.props.disabled) {
            bottomText = <p style={{ color: '#d1d152' }}>Печалька, {this.props.subtitle} закончился.</p>
        } else {
            if (this.props.selected) {
                bottomText = <p>{this.props.description}</p>;
            } else {
                bottomText = <p>{this.state.textDefault}, <span
                        className="Buy-link"
                        onClick={this.props.onClick}>{this.state.linktext}</span>
                    </p>;
            }
        }

        return (
            <div className="Food-card-bottom">{bottomText}</div>
        );
    }
}

export default BottomText;