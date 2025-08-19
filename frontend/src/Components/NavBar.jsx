import { CircleUserRound, BookOpenText, ChartNoAxesCombined, Bolt } from 'lucide-react';

const NavBar = () => {
    return (
        <div className={"flex flex-col gap-10 justify-between w-1/5 h-screen py-2 px-4"}>
            <div className={"flex flex-col gap-10 justify-evenly"}>
                <div className={"flex gap-4"}>
                    <CircleUserRound />
                    <div>
                        <p className={"text-xl font-bold"}>JOHN</p>
                        <p className={"text-xs opacity-50"}>STUDENT</p>
                    </div>
                </div>
                <div className={"flex gap-2"}>
                    <BookOpenText />
                    <p className={'text-sm'}>My Courses</p>
                </div>
                <div className={"flex gap-2"}>
                    <ChartNoAxesCombined />
                    <p className={'text-sm'}>My Stats</p>
                </div>
            </div>
            <div className={"flex gap-2"}>
                <Bolt />
                <p className={'text-sm'}>My Settings</p>
            </div>
        </div>
    )
}

export default NavBar;