import axios from "axios";
import Header from "../../components/Main_header/Header";
import ReturnHeader from "../../components/Main_header/ReturnHeader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateBlog() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
      console.log('Blogs data:', response.data); // Debug data
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError(error.response?.data?.message || 'Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  async function createBlog(event){
    const formTitle = event.get('title');
    const formMessage = event.get('message');

   try { 
    const token = localStorage.getItem('userToken'); // Get stored token
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/blog`, 
      { 
        title : formTitle,
        content: formMessage
      },
      {
        headers: {
          'authorization': `Bearer ${token}`, // Include auth token
          'Content-Type': 'application/json'
        }
      }
    );
    navigate('/home')
  }catch(error){
      console.log("error creating blog: " , error)
    }
  }

    return(
        <>
        <ReturnHeader />
        <section>
            <form action={createBlog}>
          <div className="flex flex-col px-4 mt-4">
            <label htmlFor="title">Title</label>
            <input
              className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded"
              type="text"
              name="title"
              placeholder="Enter your post title"
            />
          </div>
          <div className="flex flex-col px-4 mt-6">
            <label htmlFor="message">message</label>
            <textarea
              className="w-full min-h-70 bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded"
              type="type"
              name="message"
              placeholder="Enter your message"
            ></textarea>
            <button className="bg-blue-400 mt-10 text-white py-2 px-4 rounded-xl">
              Publish
            </button>
          </div>
        </form>
        </section>
        </>
    )
}