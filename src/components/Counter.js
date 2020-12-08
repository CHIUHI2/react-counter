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
            }),
            this.props.increaseSum()
        );
    }
    
    onDecrease = () => {
        this.setState(
            prevState => ({ 
                count : prevState.count - 1 
            }),
            this.props.decreaseSum()
        );
    }
    
    render() {
        const { count } = this.state;

        return (
            <section>
                <input type="button" onClick={this.onDecrease} value="-" />
                <span>{count}</span>
                <input type="button" onClick={this.onIncrease} value="+" />
            </section>
        );
    }
}

export default Counter;