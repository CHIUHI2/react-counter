import React, { Component } from 'react';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroup from './CounterGroup';
import CounterGroupSum from './CounterGroupSum';

class MultipleCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size : 0,
            sum : 0
        }
    }

   updateSize = (inputSize) => {
       this.setState(
            prevState => ({
                ...prevState,
                size : parseInt(inputSize)  
            })
       );
   }

   updateSum = (newSum) => {
        this.setState(
            prevState => ({
                ...prevState,
                sum : newSum
            })
        );
   }

    render() {
        const{ size, sum } = this.state;

        return (
            <div>
                <CounterSizeGenerator onSizeChange={this.updateSize} />
                {size > 0 ? <CounterGroupSum sum={sum} /> : null}
                <CounterGroup size={size} sum={sum} onSumChange={this.updateSum} />
            </div>
        );
    }
}

export default MultipleCounter;