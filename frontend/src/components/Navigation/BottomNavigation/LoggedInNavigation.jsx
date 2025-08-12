import { useNavigate } from "react-router-dom"

export default function LoggedInNavigation() {
    const navigate = useNavigate();
    return (
        <>
        <footer className="sticky bottom-0 bg-white shadow-2xl rounded-t-2xl">
            <nav className="flex justify-around items-center py-4 pl-2">
                <div className="flex flex-col items-center">
                    <button onClick={() => navigate("/")}>
                    <img src="/home.png" alt="home icon" />
                    </button>
                    <p className="text-sm text-sky-900">Home</p>
                </div>
                <div className="flex flex-col items-center">
                <button >
                    <img src="/blog.png" alt="blog icon" />
                </button>
                <p className="text-sm text-sky-900">explore</p>
                </div>
                <div className="flex flex-col items-center">
                <button >
                    <img src="/blog.png" alt="blog icon" />
                </button>
                <p className="text-sm text-sky-900">My posts</p>
                </div>
                <div className="flex flex-col items-center">
                <button>
                    <img src="/profile.png" alt="profile icon" />
                </button>
                <p className="text-sm text-sky-900">Profile</p>
                </div>
            </nav>
        </footer>
        </>
    )
}