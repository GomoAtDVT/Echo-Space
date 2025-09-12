import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import   firstLetterUppercase   from "../../utils/reusables.js";
import firstLetterCaps from "../../utils/reusables.js";
import { useNavigate } from "react-router-dom";

export default function Person() {
const [me, setMe] = useState([]);
const navigate = useNavigate();
  async function fetchUser() {
    try{
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
    const response = await axios.get('https://echo-space-eecg.onrender.com/api/myProfile');
    setMe(response.data);
  }catch(error){
    console.log("error fetching user: " , error)
    navigate("/login")
  }
  }

  useEffect(()=> {
    fetchUser()
  }, [])
  return (
    <>
      {me.map((me , indx) =><section key={indx} className="flex flex-col items-center justify-center m-5">
        <div className="avatar">
          <div className="w-24 rounded-full bg-gray-200">
            {me.display_picture === null ? 
            <p className="font-bold text-3xl flex items-center justify-center mt-6">{firstLetterCaps(me.username)}</p>
            :<img src={ me.display_picture} />}
          </div>
        </div>
        <article className="flex flex-col items-center">
          <p className="font-bold">{me.username}</p>
          <p className="text-sm text-gray-500">{me.bio}</p>
          <div className="flex flex-row gap-4 text-gray-500">
            <p>123 followers</p>
            <p>45 posts</p>
          </div>
        </article>
      </section>)}
    </>
  );
}
