// mdhossainjwel687@gmail.com<mdhossain ||
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const LogIn = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { userLogIn, googleSignUp } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' ;

    const handleSignIn = data => {
        const { email, password } = data;
        userLogIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from, { replace: true })
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            });
        console.log(data);
    }


    const handleGoogleLogin = () => {
        googleSignUp()
            .then(res => {
                const withGoogleLoginUser = res.user;
                navigate(from, { replace: true })
                console.log(withGoogleLoginUser);
            })
            .catch(err => {
                console.log(err);
            })
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
                        <input {...register("email", { required: 'Email is required' })} type="Email" placeholder="Your Email" className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: 'Password is required' })} type="Password" placeholder="Your Password" className="input input-bordered w-full " />
                        {errors.Password && <p className="test-red-500">{errors.password?.message}</p>}
                    </div>
                    <label className="label">
                        <Link to='/forgetPassword' className="label-text text-secondary">Forgot Password ?</Link>
                    </label>
                    <input className="btn btn-accent w-full mt-6" type="submit" value="Login" />
                </form>
                <p >New to Doctors Portal?<Link to="/signUp" className="text-sky-500">Create new account</Link> </p>
                <div className="divider">OR</div>
                <input onClick={handleGoogleLogin} className="btn btn-outline w-full mt-2" type="submit" value="CONTINUE WITH GOOGLE" />
            </div>
        </section>
    );
};

export default LogIn;