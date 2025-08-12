import { useNavigate } from "react-router-dom"

export default function FeaturedBlogs() {
    const navigate = useNavigate();
    function viewMore(){
        navigate("/detailed-blog")
    }
    return (
        <>
        <section className="flex flex-row py-6 mx-2 gap-1 border-b border-gray-700">
            <div className="w-[100%]">
                <p className="text-gray-600">Technology</p>
                <p className="text-xl font-medium">The Future of AI in everyday life</p>
                <p className="text-gray-600 ">Explore how artificial intelligence is transforming our daily routines, from smart homes to personalized healthcare</p>
                <button className="btn " onClick={viewMore}>Read More</button>
            </div>
            <div className="w-40  h-55 ">
                <img className="w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
        </section>
        </>
    )
}