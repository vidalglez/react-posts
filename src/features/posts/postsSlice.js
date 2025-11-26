import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: '1', title: 'Music', content: 'Tosca'},
    {id: '2', title: 'Games', content: 'Nioh'},
    {id: '3', title: 'Television', content: 'Games of Thrones'}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postSlice.reducer;