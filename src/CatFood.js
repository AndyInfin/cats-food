import React, { Component } from 'react';
import './CatFood.css';
import BottomText from './BottomText';

class CatFood extends Component {
    constructor(props) {
        super(props);

        this.preText = 'Сказочное заморское яство';
        this.cancelText = 'Котэ не одобряет?';

        this.selectItem = this.selectItem.bind(this);
        this.hoverItem = this.hoverItem.bind(this);
        this.leaveItem = this.leaveItem.bind(this);

        this.state = {
            hover: false,
            selected: false,
            disabled: false,
        }
    }

    selectItem() {
        if (!this.props.disabled) {
            this.setState(prevState => ({ selected: !prevState.selected }));
        }
        if (!this.state.selected) {
            this.leaveItem();
        }
    }

    hoverItem() {
        this.setState({ hover: true });
    }

    leaveItem() {
        this.setState({ hover: false });
    }

    componentDidMount() {
        this.setState({ disabled: this.props.disabled });
    }

    render() {
        let pretitle;
        if (this.state.selected && this.state.hover) {
            pretitle = this.cancelText;
        } else {
            pretitle = this.preText;
        }

        let itemClass = 'Food-item ';
        if (this.state.disabled) { itemClass += 'Food-item__disabled ' } else {
            if (this.state.selected) { itemClass += 'Food-item__selected ' }
            if (this.state.hover) { itemClass += 'Food-item__hovered ' }
        }

        return (
            <div className="Food-card">
                <div className={itemClass}
                    onClick={this.selectItem}
                    onMouseEnter={this.hoverItem}
                    onMouseLeave={this.leaveItem}
                >
                    <div className="Food-content">
                        <div className="Food-text">
                            <p className="pre-text">{pretitle}</p>
                            <p className="title">{this.props.title}</p>
                            <p className="sub-title">{this.props.subtitle}</p>
                            <p className="amount-bonus"><b>{this.props.amount}</b> порций</p>
                            <p className="amount-bonus">{this.props.bonus}</p>
                            <p className="amount-bonus">{this.props.extra}</p>
                        </div>
                        <div className="Weight-circle">
                            <p className="Weight-number">{this.props.weight}</p>
                            <p className="Weight-unit">кг</p>
                        </div>
                    </div>
                </div>
                <BottomText
                    disabled={this.props.disabled}
                    subtitle={this.props.subtitle}
                    selected={this.state.selected}
                    description={this.props.description}
                    onClick={this.selectItem}
                />
            </div>
        );
    }
}

export default CatFood;