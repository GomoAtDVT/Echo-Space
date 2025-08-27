import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Posts() {
    const navigate = useNavigate();
    const [myPosts, setMyPosts] = useState([]);
    async function fetchMyPosts(){
      try{
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
       const response = await axios.get('http://localhost:5000/api/myBlogs');
        setMyPosts(response.data);
        
      }catch(error){
        console.log("error fetching my posts: " , error);
      }
    }

    async function deletePost(id){
      try{
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
       await axios.delete(`http://localhost:5000/api/blog/${id}`);
       await fetchMyPosts();
      }catch(error){
        console.log("error deleting post: " , error);
      }
    }
    useEffect(()=>{
      fetchMyPosts();
    }, []);
  return (
    <>
      {myPosts.map((post , indx) => (
        <section key={indx} className="py-6 mx-5 flex flex-row justify-between gap-2 border-b-2 border-gray-700">
        <div className="flex flex-col gap-2">
          <p className="font-bold">{post.title}</p>
          <p className="line-clamp-3">{post.content}</p>
        </div>
        
        {/* <Link to={"/detailed-blog"} state={myPosts} > */}
        {/* <div className="avatar" > */}
  <div className="rounded flex flex-col gap-1">
    <Link to={`/detailed-blog`} state={post}><button className="btn w-15 h-8">View</button></Link>
    <Link to={`/edit-blog`} state={post}><button className="btn w-15 h-8" >edit</button></Link>
    <button className="btn w-15 h-8" onClick={() => deletePost(post.id)}>delete</button>
  </div>
{/* </div> */}
        {/* </Link> */}
      </section>)).reverse()}
    </>
  );
}
