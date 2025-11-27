import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [
    {id: '1', title: 'Music', content: 'Tosca', userId: '1'},
    {id: '2', title: 'Games', content: 'Nioh', userId: '1'},
    {id: '3', title: 'Television', content: 'Games of Thrones', userId: '1'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action){
                state.push(action.payload);
            },
            prepare(title, content, userId){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;