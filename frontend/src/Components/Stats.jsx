import metrics from '../../mock/metrics.json';
import {Doughnut} from "react-chartjs-2";

const Stats  = (props) => {
    const {role} = props;
    const {admin, student} = metrics;
    const {orgUsage} = admin;
    const {activeUsers, totalCourses, completionRate} = orgUsage;
    return (
        <div className={"bg-input w-full h-full flex gap-4 flex-wrap p-10 ml-96"}>
            <div className={"flex flex-col items-center justify-center w-60 h-40 gap-2 rounded bg-white p-4 shadow-lg"}>
                <h1 className={"text-xl font-bold"}>Active Users</h1>
                <p className={"text-accent text-4xl"}>{activeUsers}</p>
            </div>
            <div className={"flex flex-col items-center justify-center w-60 h-40 gap-2 rounded bg-white p-4 shadow-lg"}>
                <h1 className={"text-xl font-bold"}>Completion Rate</h1>
                <p className={"text-accent text-4xl"}>{completionRate}</p>
            </div>
            <div className={"flex flex-col items-center justify-center w-60 h-40 gap-2 rounded bg-white p-4 shadow-lg"}>
                <h1 className={"text-xl font-bold"}>Total Courses</h1>
                <p className={"text-accent text-4xl"}>{totalCourses}</p>
            </div>
        </div>
    );
}

export default Stats;