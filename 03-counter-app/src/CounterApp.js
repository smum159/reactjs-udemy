import PropTypes from 'prop-types';

const CounterApp = ({counterValue}) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counterValue}</h2>
        </>
    )
}

CounterApp.propTypes = {
    counterValue: PropTypes.number
}
CounterApp.defaultProps = {
    counterValue: "Missing counter value"
}

export default CounterApp;