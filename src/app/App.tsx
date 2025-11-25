import './App.css'
import { MainLayout } from '../shared/layouts/MainLayout'
import type { Post } from '../entities/post/Post';


const posts : Post[] = [
  {id : 1, title : 'Пост1', body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, excepturi?'},
  {id : 2, title : 'Пост2', body : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, magnam.'},
  {id : 3, title : 'Пост3', body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident maxime distinctio vero, aperiam placeat!'},
  {id : 4, title : 'Пост4', body : 'Lorem ipsum dolor sit amet consectetur.'},
  {id : 5, title : 'Пост5', body : 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur.'},
];

function App() {

  return (
    <>
      <MainLayout posts={posts}/>
    </>
  )
}

export default App
