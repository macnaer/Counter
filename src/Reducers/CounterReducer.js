const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS":
            return {
                counter: state.counter += 1
            }
        default:
            return state;
    }
}

export default CounterReducer;