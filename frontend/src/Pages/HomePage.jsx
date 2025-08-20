import React from "react";
import Auth from "../Components/Auth.jsx";

const HomePage = (props) => {
    const { setUserName, setPassword, setRole } = props;
    return (
        <section className="flex w-screen h-screen">
            <Auth setUserName={setUserName} setPassword={setPassword} setRole={setRole} />
            <img className={"rounded-tl-xl rounded-bl-xl"} src="/assets/CodingWorkshop.gif" alt="" />
        </section>
    )
}

export default HomePage;