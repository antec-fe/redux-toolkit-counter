import { createSlice } from '@reduxjs/toolkit';
const toggleSlice = createSlice({
    name: 'toggle',
    initialState : {flag: true},
    reducers: {
        toggle(state){
            state.flag = !state.flag
        }
    }
})
export const ToggleActions  = toggleSlice.actions
export default toggleSlice