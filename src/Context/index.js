import React,{useReducer, createContext} from 'react';
import ContextReducer from './ContextReducer';


const initialState = [];

// Creating Context
export const ExpenseTrackerContext = createContext(initialState)


export const Provider = ({children}) => {

    // Adding Logic to Context
    const [transactions,dispatch] = useReducer(ContextReducer, initialState);
    // Q: What is a reducer?
    // A: A reducer is a single function that specifies how we will be changing our state.


    // Actions or Action Creators
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }


    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction,addTransaction,transactions}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}