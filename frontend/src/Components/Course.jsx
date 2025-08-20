import StudentProgressBar from "./StudentProgressBar.jsx";

const Course = (props) => {
    const { course, progress, description, index } = props;
    return (
        <div className="flex flex-col h-[500px] w-80 gap-2 rounded bg-white p-4">
            <img src='/assets/Learning.gif' alt="Icon for Course" />
            <p className={"text-xl font-bold text-accent"}>{course}</p>
            <p className={"text-sm"}>{description}</p>
            <div className={"flex gap-2 items-center"}>
                <p className={"text-xs"}>Course Progress:</p>
                <div className={'flex w-48'}>
                    <StudentProgressBar progress={progress}/>
                </div>
                <p className={"text-xs"}>{progress}%</p>
            </div>
        </div>
    )
}

export default Course;