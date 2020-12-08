import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    updateSize = (event) => {
        var value = event.target.value;
        
        this.props.updateSize(value.length > 0 ? parseInt(value) : 0);
        this.props.resetSum();
    }

    render() {
        return (
            <div>
                <label>Input size : </label>
                <input type="number" min="0" onChange={this.updateSize} />
            </div>
        );
    }
}

export default CounterSizeGenerator;