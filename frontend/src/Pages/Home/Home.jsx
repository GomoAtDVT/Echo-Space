import { useNavigate } from "react-router-dom";
import HomeBlog from "../../components/HomeComps/HomeBlog";
import BottomNavigation from "../../components/Navigation/BottomNavigation/BottomNavigation";

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <section className="flex flex-col h-screen">
            <div className="flex flex-row items-center dark:bg-gray-800 justify-between pl-38 pr-2 sticky top-0 bg-white">
                <h1 className=" text-xl py-2 dark:text-white">Echo space</h1>
                <button onClick={() => navigate("/create-blog")}><i className="bi bi-plus-lg"></i></button>
            </div>
            <article>
            <HomeBlog />
            <HomeBlog />
            <HomeBlog />
            <HomeBlog />
            <HomeBlog />
            <HomeBlog />
            <HomeBlog />
            <HomeBlog />
            <HomeBlog />
            </article>
            <BottomNavigation />
            </section>
        </>
    );
}