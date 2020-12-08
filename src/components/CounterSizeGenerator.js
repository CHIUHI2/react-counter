import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    updateSize = (event) => {
        var input = event.target.value;
        
        this.props.onSizeChange(input.length > 0 ? input : 0);
    }

    render() {
        return (
            <div>
                <label>Input size : </label>
                <input type="number" onChange={this.updateSize} />
            </div>
        );
    }
}

export default CounterSizeGenerator;