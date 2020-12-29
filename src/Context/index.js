import React,{useReducer, createContext} from 'react';



const initialState = [];

// Creating Context
export const ExpenseTrackerContext = createContext(initialState)


export const Provider = ({children}) => {

    // Adding Logic to Context
    return (
        <ExpenseTrackerContext.Provider value={{appName: 'Expense Tracker'}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}