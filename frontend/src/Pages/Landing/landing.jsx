import { useNavigate } from "react-router-dom"
import Header from "../../components/Main_header/Header";
import LandingBody from "../../components/LandingComps/LandingBody";
import BottomNavigation from "../../components/Navigation/BottomNavigation/BottomNavigation";

export default function Landing(){
    const navigate = useNavigate();
    function nextPage(){
        navigate("/login");
    }
    return(
        <>
        <Header />
        <LandingBody />
        <BottomNavigation />
        </>
    )
}

