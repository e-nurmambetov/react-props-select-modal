import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, 
            id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: ''});
      }

    return (
        <div>
          <form>
            <MyInput
            onChange={e => setPost({...post, title: e.target.value})}
            type='text'
            placeholder='Название поста'
            required
            value={post.title}
            />
            <MyInput
            onChange={e => setPost({...post, body: e.target.value})}
            type='text'
            placeholder='Описание поста'
            required
            value={post.body}
            />
            <MyButton 
            onClick={addNewPost}>
              Создать пост
            </MyButton>
         </form>
        </div>
    );
};
        

export default PostForm;
