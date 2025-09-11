import { useNavigate } from "react-router-dom"

export default function ReturnHeader() {
    const navigate = useNavigate();

    function returnToPage() {
        navigate("/");
    }
    return (
        <>
        <div className="flex justify-between items-center py-2 pl-2 w-[64%] sticky top-0">
          {/* <button onClick={returnToPage} >
            <i className="bi bi-arrow-left"></i>
          </button> */}
          <p className="text-xl">Echo Space</p>
        </div>
        </>
    )
}