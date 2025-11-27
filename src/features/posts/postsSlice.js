import {createSlice, nanoid} from '@reduxjs/toolkit';
import {sub} from "date-fns"

const initialState = [
    {id: '1', title: 'Music', content: 'Tosca', userId: '1', date: sub(new Date(), {minutes: 10}).toISOString()},
    {id: '2', title: 'Games', content: 'Nioh', userId: '1', date: sub(new Date(), {minutes: 5}).toISOString() },
    {id: '3', title: 'Television', content: 'Games of Thrones', userId: '1', date: sub(new Date(), {minutes: 8}).toISOString()}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {addPost} = postsSlice.actions;

export default postsSlice.reducer;