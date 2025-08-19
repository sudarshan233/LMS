
const Signup = () => {
    return (
        <div className={"flex flex-col gap-10"}>
            <section className={"flex flex-col gap-2"}>
                <h2 className="text-2xl font-bold">Signup</h2>
                <p className={"opacity-50"}>Set your credentials</p>
            </section>
            <section className="flex flex-col gap-4">
                <label className={"text-sm"}>Email / Username</label>
                <input className={"bg-input text-sm px-4 py-2 rounded"} type='text' placeholder='abc@gmail.com' />
                <label className={"text-sm"}>Password</label>
                <input className={"bg-input text-sm px-4 py-2 rounded"} type='password' placeholder='********' />
                <label className={"text-sm"}>Confirm Password</label>
                <input className={"bg-input text-sm px-4 py-2 rounded"} type='password' placeholder='********' />
                <button className="hover:bg-hover bg-accent transition-bg duration-[0.4s] border-2 border-accent px-4 py-2 rounded">Signup</button>
            </section>
        </div>
    )
}

export default Signup;