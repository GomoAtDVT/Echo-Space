import { useNavigate } from "react-router-dom";
import ReturnHeader from "../../components/Main_header/ReturnHeader";

export default function Register() {
  const navigate = useNavigate();
  
  function tologin() {
    navigate("/login");
  }

  return (
    <>
      <section className="flex flex-col justify-center  ">
        <ReturnHeader />
        <form action="">
          <div className="flex flex-col px-4 mt-4">
          <label htmlFor="username">Username</label>
          <input className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded" type="text" placeholder="Enter your username" />
          </div>
          <div className="flex flex-col px-4 mt-6">
          <label htmlFor="email">Email</label>
          <input className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded" type="email" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col px-4 mt-6">
          <label htmlFor="password">Password</label>
          <input className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded" type="password" placeholder="Enter your password" />
          </div>
          <div className="flex flex-col px-4 mt-6">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input className="w-full bg-gray-100 dark:bg-gray-700 mt-2 p-2 py-3 rounded" type="password" placeholder="Confirm your password" />
          <button className="bg-blue-400 mt-10 text-white py-2 px-4 rounded-xl" onClick={() => navigate("/login")}>Register</button>
          </div>
        </form>
        <p className="text-center mt-4 text-blue-500">Already have an account? <span onClick={tologin} className="text-blue-500 underline">Login here</span></p>
      </section>
    </>
  );
}
