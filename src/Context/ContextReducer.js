// More about Reducers
// A reducer is a function that takes in the old state and an action and returns a new State.
// Simply: const Reducer = Old State + Action => New State ....not formula


const ContextReducer  = (state, action) => {
    let trasactions;
    switch(action.type){
        case 'ADD_TRANSACTION':
            trasactions = [action.payload, ...state];
            localStorage.setItem('transactions', JSON.stringify(trasactions))
            return trasactions;
            case 'DELETE_TRANSACTION':
            localStorage.setItem('transactions', JSON.stringify(trasactions))
            trasactions = state.filter(t => t.id !== action.payload);
            return trasactions;
        default:
            return state;
    }

}

export default ContextReducer;