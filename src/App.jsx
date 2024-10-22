

import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header';

function App() {

  const [bookmarks,setBookmarks]= useState([]);
const [readingTime,setReadingTime]=useState(0)


  const handleAddToBookmark=blog=>{

    const newBookmark=[...bookmarks,blog];
    setBookmarks(newBookmark);
    
  }

  const handleMarkAsRead= time =>{
    console.log("ami vamo na re",);
  }


  return (
    <>
     
     <Header></Header>
 <div className="md:flex max-w-7xl mx-auto">
 <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} ></Blogs>

 <Bookmarks bookmarks={bookmarks}></Bookmarks>

 </div>bookmarks
     
    </>
  )
}

export default App;
