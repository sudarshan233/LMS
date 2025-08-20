const Login = (props) => {
    const { setUserName, setPassword, setRole } = props;

    return (
        <form className={"flex flex-col gap-10"}>
            <section className={"flex flex-col gap-2"}>
                <h2 className="text-2xl font-bold">Login</h2>
                <p className={"opacity-50"}>Please login to continue</p>
            </section>
            <section className="flex flex-col gap-4">
                <label className={"text-sm"}>Email / Username</label>
                <input className={"bg-input text-sm px-4 py-2 rounded"} type='text'
                       placeholder='abc@gmail.com' onChange={(event) => setUserName(event.target.value)}/>
                <label className={"text-sm"}>Password</label>
                <input className={"bg-input text-sm px-4 py-2 rounded"} type='password'
                       placeholder='********' onClick={(event) => setPassword(event.target)}/>
                <button type="submit" className="hover:bg-hover bg-accent transition-bg duration-[0.4s] border-2 border-accent px-4 py-2 rounded">Login</button>
            </section>
        </form>
    )
}

export default Login;