import { useNavigate } from "react-router-dom";
import Header from "../../components/Main_header/Header";
import ReturnHeader from "../../components/Main_header/ReturnHeader";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    function toRegister(){
        navigate("/register");
    }

    async function loginUser(event) {
      try{
        const formEmail = event.get('email');
        const formPassword = event.get('password');
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, {
          email: formEmail,
          password: formPassword
        })
        console.log(response.data);
        localStorage.setItem('userToken', response.data.token)
        navigate('/home')
      }catch(error){
        console.log("error logging in: " , error)
      }
    }
  return (
    <>
      <ReturnHeader />
      <section>
        <form action={loginUser}>
          <div className="flex flex-col px-4 mt-4">
            <label htmlFor="email">Email</label>
            <input
              className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded"
              type="email"
              placeholder="Enter your full name"
              name="email"
            />
          </div>
          <div className="flex flex-col px-4 mt-6">
            <label htmlFor="password">Password</label>
            <input
              className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded"
              type="password"
              placeholder="Enter your password"
              name="password"
            />
            <button className="bg-blue-400 mt-10 text-white py-2 px-4 rounded-xl" onClick={() => navigate("/home")}>
              Log in
            </button>
          </div>
        </form>
        <p className="text-center mt-4 text-blue-500">
          Don't have an account?{" "}
          <span onClick={toRegister} className="text-blue-500 underline">
            Register here
          </span>
        </p>
      </section>
    </>
  );
}
