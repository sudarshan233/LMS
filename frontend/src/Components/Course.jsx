import StudentProgressBar from "./StudentProgressBar.jsx";
import {useState} from "react";

const Course = (props) => {
    const { course, progress, description, index, role, enrolled } = props;
    const height = role === 'admin' ? "h-[450px]" : "h-[500px]";
    return (
        <div className={`hover:w-[24rem] w-80 transition-w flex flex-col ${height} gap-2 rounded bg-white p-4 shadow-lg`}>
            <img src='/assets/Learning.gif' alt="Icon for Course" />
            <p className={"text-xl font-bold text-accent"}>{course}</p>
            <p className={"text-sm"}>{description}</p>
            {role === "student" ?
                <div className={"flex gap-2 items-center"}>
                    <p className={"text-xs"}>Course Progress:</p>
                    <div className={'flex w-48'}>
                        <StudentProgressBar progress={progress}/>
                    </div>
                    <p className={"text-xs"}>{progress}%</p>
                </div> :  <div className={"flex gap-2 items-center"}>
                    <p className={"text-xs"}>Students enrolled:</p>
                    <p className={"text-xs"}>{enrolled.length === undefined ? 0 : enrolled.length} students</p>
                </div>}
        </div>
    )
}

export default Course;