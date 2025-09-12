import { useNavigate } from "react-router-dom";
import FeaturedBlogs from "./FeaturedBlogs";

export default function LandingBody() {
    const navigate = useNavigate();

    function nextPage() {
        navigate("/register");
    }
    return (
        <>
        <main className="flex flex-col w-full">
            <section className="bg-[url('/landing.png')] w-full">
                <h1 className="mt-18 px-2 text-4xl font-bold text-white text-center">Welcome to Echo Space -&shy; Your Story Starts Here</h1>
            <p className="text-white text-center px-4 my-8">Join our community of writers and readers. Share your thoughts, explore new ideas, and connect with others through the power of words.</p>
            <div className="flex justify-center gap-4 mb-8">
                <button className="btn border-none bg-blue-600 " onClick={() => navigate("/explore")}>Blogs</button>
                <button className="btn" onClick={nextPage}>Register</button>
               
            </div>
            </section>
            <section className="flex flex-col ">
                <h1 className="flex pt-2 px-4 text-4xl">Featured Blogs</h1>
                <FeaturedBlogs />
            </section>
        </main>
        </>
    )
}