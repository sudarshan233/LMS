import metrics from '../../mock/metrics.json';
import Course from "./Course.jsx";

const Courses = (props) => {
    const {admin, student} = metrics;
    const {progress} = student;
    const {role} = props;
    return (
        <div className={"bg-input w-full h-full flex gap-4 flex-wrap p-10 ml-96"}>
            {progress.map((value, index) => {
                return <Course course={value.course} progress={value.progress} description={value.description} index={index} key={index} />
            })}
        </div>
    )
}

export default Courses;