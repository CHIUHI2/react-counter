import React, { Component } from 'react';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../containers/CounterGroupContainer';
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer';

class MultipleCounter extends Component {
    render() {
        return (
            <div>
                <CounterSizeGeneratorContainer />
                <CounterGroupSumContainer />
                <CounterGroupContainer />
            </div>
        );
    }
}

export default MultipleCounter;