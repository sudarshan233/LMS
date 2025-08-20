import {useState} from "react";
import NavBar from "../Components/NavBar.jsx";
import Courses from "../Components/Courses.jsx";
import Stats from "../Components/Stats.jsx";

const MainPage = (props) => {
    const [navClicked, setNavClicked] = useState("");
    const {name, role} = props;
    return (
        <div className={"flex"}>
            <NavBar name={name} role={role} setNavClicked={setNavClicked} />
            {navClicked === "Courses" ? <Courses role={role}/> : <Stats role={role}/>}
        </div>
    );
}

export default MainPage;