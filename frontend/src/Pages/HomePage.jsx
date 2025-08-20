import React from "react";
import Auth from "../Components/Auth.jsx";

const HomePage = (props) => {
    const { username, role, password, setUserName, setPassword, setRole, setName } = props;
    return (
        <section className="flex w-screen h-screen">
            <Auth username={username} setUserName={setUserName}
                  password={password} setPassword={setPassword}
                  role={role} setRole={setRole} setName={setName}/>
            <img className={"rounded-tl-xl rounded-bl-xl"} src="/assets/CodingWorkshop.gif" alt="" />
        </section>
    )
}

export default HomePage;