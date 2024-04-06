import { createStore } from "redux";
import {configureStore } from '@reduxjs/toolkit';
import counterSlice from "./counterSlice";
import toggleSlice from "./toggleSlice";


// const reducerStore = (state = {counter : 0, flag: true} , action) =>{
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 counter : state.counter + 1,
//             }
//         case 'DECREMENT':
//             return {
//                 ...state,
//                 counter : state.counter - 1,
//             }
//         case 'INCREASE':
//             return {
//                 ...state,
//                 counter : state.counter + action.payload,
//             }
//         case 'TOGGLE':
//             return {
//                 ...state,
//                 flag : !state.flag ,
//             }
    
//         default:
//             return state;
//     }
// }

// redux
// const store = createStore(reducerStore);

// redux-toolkit
const store = configureStore({
    // reducer : counterSlice.reducer 
    reducer : {
        counter : counterSlice.reducer,
        toggle: toggleSlice.reducer
    }
});

// tek reducer olanda {counter : 0}
//  multiple reducer {
    // counter1: {
    //     counter: 0
    // },
    // toggle: {
    //     flag : false
    // }
// }

export default store;