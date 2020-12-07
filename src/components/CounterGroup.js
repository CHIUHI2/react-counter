import React, { Component } from 'react';
import Counter from './Counter';

class CounterGroup extends Component {

    render() {
        const size = this.props.size;
        
        return (
            <div>
                {
                    [...Array(size)].map((_item, index) => <Counter key={index} />)
                }
            </div>
        );
    }
}

export default CounterGroup;