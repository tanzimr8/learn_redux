import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/counters/posts/postsSlice';
const Posts = () => {
 const {posts} = useSelector(state => state.posts);
 const dispatch = useDispatch();
 
 useEffect(()=>{
    dispatch(fetchPosts());
 },[dispatch]);
 let isContent = false;
 if(posts.length > 0){
    isContent = true;
 }
 return (
    <>
        {
            isContent && posts?.map((post)=>{
                return (
                    <ul>
                        <li>
                        <h2 className='text-xl text-bold'>{post.title}</h2>
                        <p>{post.body}</p>
                        </li>
                        
                    </ul>
                    
                )
            })
        }
        {
            !isContent && 'No post found'
        }
    </>
  )
}

export default Posts