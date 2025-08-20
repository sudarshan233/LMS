import { CircleUserRound, BookOpenText, ChartNoAxesCombined, Bolt } from 'lucide-react';

const NavBar = (props) => {
    const {setNavClicked} = props;
    return (
        <div className={"flex flex-col gap-10 justify-between w-1/5 h-screen p-4 fixed"}>
            <div className={"flex flex-col gap-6 justify-evenly"}>
                <div className={"flex gap-4 p-2"}>
                    <CircleUserRound className={"stroke-accent"}/>
                    <div>
                        <p className={"text-xl font-bold"}>JOHN</p>
                        <p className={"text-xs opacity-50"}>STUDENT</p>
                    </div>
                </div>
                <div className={"hover:bg-input bg-hover transition-bg duration-[0.4s] p-2 rounded w-full"}>
                    <button className={"flex gap-2"} onClick={() => setNavClicked("Courses")}>
                        <BookOpenText className={"stroke-accent"}/>
                        <p className={'text-sm'}>My Courses</p>
                    </button>
                </div>
                <div className={"hover:bg-input bg-hover transition-bg duration-[0.4s] p-2 rounded w-full"}>
                    <button className={"flex gap-2"} onClick={() => setNavClicked("Stats")}>
                        <ChartNoAxesCombined className={"stroke-accent"}/>
                        <p className={'text-sm'}>My Stats</p>
                    </button>
                </div>
            </div>
            <div className={"hover:bg-input bg-hover transition-bg duration-[0.4s] p-2 rounded"}>
                <button className={"flex gap-2"}>
                    <Bolt className={"stroke-accent"}/>
                    <p className={'text-sm'}>My Settings</p>
                </button>
            </div>
        </div>
    )
}

export default NavBar;