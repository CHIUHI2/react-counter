import React, { Component } from 'react';
import Counter from './Counter';

class CounterGroup extends Component {
    increaseSum = () => {
        this.props.onSumChange(this.props.sum + 1);
    }

    decreaseSum = (value) => {
        this.props.onSumChange(this.props.sum - value);
    }

    render() {
        const { size } = this.props;

        return (
            <div>
                {
                    [...Array(size)].map((_item, index) => <Counter key={index} increaseSum={this.increaseSum} decreaseSum={this.decreaseSum} />)
                }
            </div>
        );
    }
}

export default CounterGroup;