import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem =({remove, number, post}) => {

  return (
    <div className='post'>
      <div className='post__content'>
        <strong style={{color: 'blue'}}>
            {number}.  
        </strong>
        <strong style={{color: 'orange'}}>
            {post.title}
        </strong>
        <div style={{color: 'red'}}>
             {post.body}
        </div>
      </div>
      <div>
        <MyButton onClick={() => remove(post)}>
            Delete
        </MyButton>
      </div>
    </div>
  );
}

export default PostItem;