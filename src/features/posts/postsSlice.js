import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: '1', title: 'Music', content: 'Tosca'},
    {id: '2', title: 'Games', content: 'Nioh'},
    {id: '3', title: 'Television', content: 'Games of Thrones'}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postSlice.actions;

export default postSlice.reducer;