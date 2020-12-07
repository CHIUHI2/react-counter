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
    }
    
    onDecrease = () => {
        this.setState(
            prevState => ({ 
                count : prevState.count - 1 
            })
        );
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