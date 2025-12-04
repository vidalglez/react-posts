import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewPost} from "./postsSlice"
import {selectAllUsers} from "../users/usersSlice";

const AddPostForm = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = (e) => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'; //Boolean(title) && Boolean(content) && Boolean(userId)

    const onSavePostClicked = () => {
        /*
        if(title && content) {
            //console.log('userId: ', userId)
            dispatch(addPost(title, content, userId));
            setTitle('');
            setContent('');
        }
        */
        if(canSave) {
            try{
                setAddRequestStatus('pending');
                dispatch(addNewPost({ title, body: content, userId})).unwrap();
                setTitle('');
                setContent('');
                setUserId('');
            }catch(err) {
                console.error('Failed to save the post', err);
            }finally {
                setAddRequestStatus('idle');
            }
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>AddPostForm</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    onChange={onAuthorChange} >
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Post Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </section>)
}

export default AddPostForm;