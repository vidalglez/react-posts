import {createSlice, nanoid} from '@reduxjs/toolkit';
import {sub} from "date-fns"

const initialState = [
    {
        id: '1',
        title: 'Music',
        content: 'Tosca',
        userId: '1',
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        title: 'Games',
        content: 'Nioh',
        userId: '1',
        date: sub(new Date(), {minutes: 5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '3',
        title: 'Television',
        content: 'Games of Thrones',
        userId: '1',
        date: sub(new Date(), {minutes: 8}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }]

const postsSlice = createSlice({
    name: 'posts', initialState, reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
            }, prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded: {
            reducer(state, action) {
                const { postId, reaction} = action.payload;
                const existingPost = state.find(post => post.id === postId);
                if(existingPost) {
                    existingPost.reactions[reaction]++;
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {addPost, reactionAdded} = postsSlice.actions;

export default postsSlice.reducer;