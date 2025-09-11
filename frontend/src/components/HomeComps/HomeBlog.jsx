import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom"

export default function HomeBlog(){
    const navigate = useNavigate();
    const [allBlogs, setAllBlogs] = useState([])
    function viewMore(){
        <Navigate to="/detailed-blog" replace={true} state={allBlogs}/>
    }
    window.location.reload
    async function AllBlogs(){
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
       const response = await axios.get('http://localhost:5000/api/blogs')
         setAllBlogs(response.data)}catch(error){
            console.log("error fetching blogs: " , error)
            navigate("/login")
         }
    }

    useEffect(() => {
        AllBlogs()
    }, [])
    return (
        <>
        {allBlogs.map((blog , indx) => (<section key={indx} className="flex flex-col m-4 my-10 ">
            <div className="flex flex-row items-center gap-5 mb-4">
                <img className="object-fill w-20 h-20 border border-gray-400 rounded-full" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div>
                    <p className="font-bold">{blog.title}</p>
                    <p className="text-gray-400">{blog.created_at.slice(0,10)}</p>
                </div>
            </div>
            <article>
                <p className="line-clamp-2">{blog.content}</p>
            </article>
            <div className="flex flex-row items-center justify-between">
                <Link to="/detailed-blog" state={blog} >
                <button className="btn" >read more</button>
                </Link>
                <div className="flex flex-row gap-4">
                <button className="flex gap-2" id="like">
                    <i className="bi bi-heart"></i>
                    <p>5284</p>
                </button>
                <button className="flex gap-2" id="comment">
                <i className="bi bi-chat-dots"></i>
                <p>564</p>
                </button>
                <button className="flex gap-2" id="share">
                    <i className="bi bi-bookmark"></i>
                    {/* <i class="bi bi-send"></i> */}
                    <p>29</p>
                </button>
                </div>
            </div>
        </section>)).reverse()}
        </>
    )
}