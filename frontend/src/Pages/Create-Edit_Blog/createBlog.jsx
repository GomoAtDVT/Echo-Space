import axios from "axios";
import Header from "../../components/Main_header/Header";
import ReturnHeader from "../../components/Main_header/ReturnHeader";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const navigate = useNavigate();
  async function createBlog(event){
    const formTitle = event.get('title');
    const formMessage = event.get('message');

   try { 
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("userToken")}`;
    await axios.post('http://localhost:5000/api/blog',
      { 
        title : formTitle,
        content: formMessage
      }
    )
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