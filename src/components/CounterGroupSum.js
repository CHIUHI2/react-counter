import React, { Component } from 'react';

class CounterGroupSum extends Component {
    render() {
        return (
            <div>
                <span>Sum of counter : {this.props.sum}</span>
            </div>
        );
    }
}

export default CounterGroupSum;