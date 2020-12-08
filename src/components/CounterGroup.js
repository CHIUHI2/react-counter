import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';
import { v4 as uuidv4 } from 'uuid';

class CounterGroup extends Component {
    render() {
        const { size } = this.props;

        return (
            <div>
                {
                    [...Array(size)].map(() => <CounterContainer key={uuidv4()} />)
                }
            </div>
        );
    }
}

export default CounterGroup;