import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();


    return(
        <>
        <header className="py-2 bg-white dark:bg-gray-800 flex justify-end sticky top-0">
            <section className="flex justify-between  w-[60%]">
                <p className="text-xl dark:text-white">Echo Space</p>
                <div>
                    <button className=" text-green-700  font-bold mt-1 mr-2" onClick={() => navigate("/login")}>
                    Login
                    </button>
                {/* <button className=" text-gray-500 mx-2 font-bold">
                    &#9776;
                </button> */}
                </div>
            </section>
        </header>
        </>
    )
}

export default Header;