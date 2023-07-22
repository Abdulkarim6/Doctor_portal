import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

const LogIn = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleSignIn = data => {
        const email = (data.Email);
        const password = (data.Password);
        console.log(email, password);
    }

    return (
        <section className="flex flex-col items-center">
            <h3 className="text-3xl font-medium text-sky-500 mt-5">Please Login</h3>
            <div className="w-96 p-5 shadow-xl rounded text-left">
                <form onSubmit={handleSubmit(handleSignIn)} >
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("Email", { required: 'Email is required' })} type="Email" placeholder="Your Email" className="input input-bordered w-full " />
                        {errors.Email && <p className='text-red-600'>{errors.Email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("Password", { required: 'Password is required' })} type="Password" placeholder="Your Password" className="input input-bordered w-full " />
                        {errors.Password && <p className="test-red-500">{errors.password?.message}</p>}
                    </div>
                    <label className="label">
                        <span className="label-text">Forgot Password</span>
                    </label>
                    <input className="btn btn-accent w-full mt-6" type="submit" value="Login" />
                </form>
                <p >New to Doctors Portal?<Link to="/SignUp" className="text-sky-500">Create new account</Link> </p>
                <div className="divider">OR</div>
                <input className="btn btn-outline w-full mt-6" type="submit" value="CONTINUE WITH GOOGLE" />
            </div>
        </section>
    );
};

export default LogIn;