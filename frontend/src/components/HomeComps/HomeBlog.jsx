import { useNavigate } from "react-router-dom"

export default function HomeBlog(){
    const navigate = useNavigate();
    function viewMore(){
        navigate("/detailed-blog")
    }
    return (
        <>
        <section className="flex flex-col m-4 my-10 ">
            <div className="flex flex-row items-center gap-5 mb-4">
                <img className="object-fill w-20 h-20 border border-gray-400 rounded-full" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div>
                    <p className="font-bold">TechPulse</p>
                    <p className="text-gray-400">2days ago</p>
                </div>
            </div>
            <article>
                <p className="line-clamp-2">The latest in Tech news and reviews. Stay ahead of the curve with our expert analysis of the latest advancements in technology.</p>
            </article>
            <div className="flex flex-row items-center justify-between">
                <button className="btn" onClick={viewMore}>read more</button>
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
        </section>
        </>
    )
}