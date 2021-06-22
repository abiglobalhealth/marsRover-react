import React, { createContext, useContext, useReducer } from 'react';
import { ORIENTATION } from './actions';
import reducers from './reducers';

const StateContext = createContext();
const { N } = ORIENTATION;

const initialState = {
	orientation: {
		roverZ: N
	},
	position: {
		roverX: 0,
	  	roverY: 0
	}
}

export const StateProvider = ({ children }) => {
	return (
		<StateContext.Provider value={useReducer(reducers, initialState)}>
			{children}
		</StateContext.Provider>
	)
};

export const useStateContext = () => useContext(StateContext);
