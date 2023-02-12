import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove, motto}) => {
    if (!posts.length) {
        return (
            <h2 style={{textAlign: 'center', color: 'red'}}>
                Посты не найдены!
            </h2>
        )
    }
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>
                {title}.
            </h2>
            <h4 style={{textAlign: 'center', color: 'red'}}>
                {motto}.
            </h4> 
            {posts.map((item, index, arr) => 
            <PostItem 
            remove={remove} 
            number={index + 1} 
            post={item} 
            key={item.id}//для чего? PostItem его не использует?
            />
            )}
            
        </div>
    );
}
export default PostList;