import Person from "../../components/DashboardComps/Person";
import Posts from "../../components/DashboardComps/Posts";
import BottomNavigation from "../../components/Navigation/BottomNavigation/BottomNavigation";



export default function Dashboard(){
    return (
        <>
        <h1 className="flex justify-center font-semibold text-lg p-5">Profile</h1>
        <Person />
        <h1 className="font-semibold ml-5 text-lg">Posts</h1>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <BottomNavigation />
        </>
    )
}