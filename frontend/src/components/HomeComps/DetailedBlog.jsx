import { useLocation } from "react-router-dom";
import ReturnHeader from "../Main_header/ReturnHeader";

export default function DetailedBlog(){
    const location = useLocation();
    console.log(location.state)
    return(
        <>
        <ReturnHeader />
        {location.state.length > 1 ? location.state.map((blog , indx) => (<section className="flex flex-col m-4 gap-4">
            <h1 className="font-bold text-lg">{blog.title}</h1>
            <p className="text-gray-400">By Alex Turner · 2d ago</p>
            <p>{blog.content}</p>
        </section>)) :<section className="flex flex-col m-4 gap-4">
            <h1 className="font-bold text-lg">{location.state.title}</h1>
            <p className="text-gray-400">By Alex Turner · 2d ago</p>
            <p>{location.state.content || location.state.text}</p>
        </section>}
        </>
    )
}
// export default function MyDetailedBlog(){
//     const location = useLocation();
//     console.log(location.state)
//     return(
//         <>
//         {<ReturnHeader />
//         <section className="flex flex-col m-4 gap-4">
//             <h1 className="font-bold text-lg">{location.state.title}</h1>
//             <p className="text-gray-400">By Alex Turner · 2d ago</p>
//             <p>{location.state.content}</p>
//         </section>}
//         </>
//     )
// }