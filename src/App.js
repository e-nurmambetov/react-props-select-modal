import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
const [posts, setPosts] = useState([
    {body: 'apple', title: 'zero', id: 1},
    {body: 'apricot', title: 'sky', id: 2},
    {body: 'cloud', title: 'suny', id: 3}
  ]);
const [filter, setFilter] = useState({sort: '', query: ''});
const [modal, setModal] = useState(false);
 
  //------------Сортировка------------
     
const sortedPosts = useMemo(() => { console.log(' отработка sortrdPosts')
if (filter.sort) {
   return [...posts].sort((a, b) => 
   a[filter.sort].localeCompare(b[filter.sort]))
}
   return posts;
}, [filter.sort, posts])

  //----------Сортировочный поиск-------------
      
const sortedAndSearchedPosts = useMemo(() => {
   return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
}, [filter.query, sortedPosts])
      
  //----------Создание поста------------ 

const createPost = (newPost) => {
 setPosts([...posts, newPost])
 setModal(false)
           // console.log(newPost)
 }
         

  //------------Удаление----------------
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
 }

  return (
    <div className='App'>
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать 
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <hr style={{margin: '15px 0'}}/>
        
       <PostFilter
       filter={filter}
       setFilter={setFilter}
      />
      <PostList 
      remove={removePost}
      posts={sortedAndSearchedPosts} 
      title='Посты про JS'
      motto='item, index, arr'
      />
    </div>
  );
}

export default App;
  
  
      
