import React from "react";
import Auth from "../Components/Auth.jsx";

const HomePage = () => {
    return (
        <section className="flex w-screen h-screen">
            <Auth />
            <img className={"rounded-tl-xl rounded-bl-xl"} src="/assets/CodingWorkshop.gif" alt="" />
        </section>
    )
}

export default HomePage;