import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import 'dotenv'

export default function EditPost(){
    const navigate = useNavigate();
    const location = useLocation();
    const [editBlog, setEditBlog] = useState({
        title: "",
        content: ""
    });

    useEffect(() => {
        setEditBlog({
            title: location.state.title,
            content: location.state.content
        });
    }, []);
    async function updatePost(){
        try{
            axios.defaults.headers.common['Authorization']= `Bearer ${localStorage.getItem('userToken')}`;
            await axios.patch(`${import.meta.env.VITE_API_URL}/api/blogs/${location.state.id}`,{
                title: editBlog.title,
                content: editBlog.content
            });
            navigate("/dashboard");
        }catch(error){
            console.log("error updating post: " , error);
        }
    }
    
    return(
        <>
        {/* <ReturnHeader /> */}
        <section className="flex flex-col m-4 gap-4">
            <input type="text" className="border" value={editBlog.title} onChange={(e) => setEditBlog({...editBlog,title : e.target.value})}/>
            <p className="text-gray-400">By {}· 2d ago</p>
            <textarea name="" id="" className="h-96 border" value={editBlog.content} onChange={(e) => setEditBlog({...editBlog,content : e.target.value})}></textarea>
            <button className="bg-blue-400 mt-4 text-white py-2 px-4 rounded-xl w-full" onClick={updatePost}>Update</button>
        </section>
        </>
    )
}