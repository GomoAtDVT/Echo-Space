import { useNavigate } from "react-router-dom";
import ReturnHeader from "../../components/Main_header/ReturnHeader";
import axios from 'axios'

export default function Register() {
  const navigate = useNavigate();
  
  function toLogin() {
    navigate("/login");
  }
  async function registerUser(event){
    try{const formDataName = event.get('name')
    const formDataEmail = event.get('email')
    const formDataPassword = event.get('password')
   await axios.post('http://localhost:5000/api/register', {
    username: formDataName,
    email: formDataEmail,
    password: formDataPassword
   })
    navigate("/login")}
    catch(error){
      console.log("couldn't register: ", error)
    }
  }

  return (
    <>
      <section className="flex flex-col justify-center  ">
        <ReturnHeader />
        <form action={registerUser}>
          <div className="flex flex-col px-4 mt-4">
          <label htmlFor="name">Full Name</label>
          <input className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded" name="name" type="text" placeholder="Enter your username" />
          </div>
          <div className="flex flex-col px-4 mt-6">
          <label htmlFor="email">Email</label>
          <input className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded" name="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col px-4 mt-6">
          <label htmlFor="password">Password</label>
          <input className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded" name="password" type="password" placeholder="Enter your password" />
          </div>
          <div className="flex flex-col px-4 mt-6">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded" name="confirm-password" type="password" placeholder="Confirm your password" />
          <button className="bg-blue-400 mt-10 text-white py-2 px-4 rounded-xl">Register</button>
          </div>
        </form>
        <p className="text-center mt-4 text-blue-500">Already have an account? <span onClick={toLogin} className="text-blue-500 underline">Login here</span></p>
      </section>
    </>
  );
}
