import {createSlice } from '@reduxjs/toolkit';

const initialState = {counter : 0}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state , action){
            state.counter = state.counter + action.payload
        }
    }
})

export const CounterActions = counterSlice.actions
export default counterSlice