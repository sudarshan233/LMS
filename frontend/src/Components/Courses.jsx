import metrics from '../../mock/metrics.json';
import Course from "./Course.jsx";

const Courses = (props) => {
    const {admin, student} = metrics;
    const {progress} = student;
    const {users} = admin;
    const {role} = props;
    return (
        <div className={"bg-input w-full h-full flex gap-4 flex-wrap p-10 ml-96"}>
            {role === "student" ?
                progress.map((value, index) => {
                    return <Course course={value.course} progress={value.progress} description={value.description} index={index} key={index}
                                   role={role}/>
                }) : users.map((user, index) => {
                    return <Course course={user.course} enrolled={user.enrolled} description={user.description} index={index} key={index}
                                   role={role}/>
                })
            }

        </div>
    )
}

export default Courses;