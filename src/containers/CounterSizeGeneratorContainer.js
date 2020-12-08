import { connect } from 'react-redux';
import { updateSize, resetSum } from '../actions';
import CounterSizeGenerator from '../components/CounterSizeGenerator';

const mapDispatchToProps = (dispatch) => ({
    updateSize : (value) => {
        dispatch(updateSize(value));
    },
    resetSum : () => {
        dispatch(resetSum());
    }
})

const CounterSizeGeneratorContainer = connect(null, mapDispatchToProps)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;