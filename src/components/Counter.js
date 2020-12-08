import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        };
    }

    onIncrease = () => {
        this.setState(
           prevState => ({ 
               count : prevState.count + 1 
            })
        );

        this.props.increaseSum();
    }
    
    onDecrease = () => {
        this.setState(
            prevState => ({ 
                count : prevState.count - 1 
            })
        );

        this.props.decreaseSum(1);
    }

    componentWillUnmount = () => {
        this.props.decreaseSum(this.state.count);
    }
    
    render() {
        return (
            <div>
                <input type="button" onClick={this.onDecrease} value="-" />
                <span>{this.state.count}</span>
                <input type="button" onClick={this.onIncrease} value="+" />
            </div>
        );
    }
}

export default Counter;