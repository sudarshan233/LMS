import {useState} from "react";
import NavBar from "../Components/NavBar.jsx";
import Courses from "../Components/Courses.jsx";
import Stats from "../Components/Stats.jsx";

const StudentPage = () => {
    const [navClicked, setNavClicked] = useState("");
    return (
        <div className={"flex"}>
            <NavBar setNavClicked={setNavClicked} />
            {navClicked === "Courses" ? <Courses /> : <Stats />}
        </div>
    );
}

export default StudentPage;