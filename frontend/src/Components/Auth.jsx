import {useState} from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

const Auth = (props) => {
    const [auth, setAuth] = useState('login');
    const { setUserName, setPassword, setRole } = props;
    return (
        <div className="flex flex-col justify-center gap-10 w-full h-full box-border p-52">
            <h1 className="text-5xl self-center my-5">LMS</h1>
            {auth === "login" ? <Login setUserName={setUserName} setPassword={setPassword} setRole={setRole}/> : <Signup/> }
            <p className={"self-center flex gap-2"}>{auth === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}
                <button className={"text-blue-500 underline"}
                onClick={() => {
                    setAuth((prevState) => prevState === 'login' ? 'signup' : 'login');
                }}>{auth === "login" ? 'Get it now!!' : 'Let\'s get started!!'}</button>
            </p>
        </div>
    );
}

export default Auth;