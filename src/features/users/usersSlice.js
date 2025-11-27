import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: '1', name: 'Servidor De Nadie'},
    {id: '2', name: 'Gustavo Cerati'},
    {id: '3', name: 'Enrique Bunbury'}
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;
