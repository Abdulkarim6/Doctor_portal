// mdhossainjwel687@gmail.com<mdhossain ||
import loginBanner from '../../assets/images/login.png'
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const LogIn = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { userLogIn, googleSignUp } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const [token] = useToken(loginUserEmail);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [navigate, from, token]);


    const handleSignIn = data => {
        const { email, password } = data;
        userLogIn(email, password)
            // .then((userCredential) => {
            .then(() => {
                // const user = userCredential.user;
                setLoginUserEmail(email);
            })
            .catch(error => {
                setLoginError(error.message)
            });
    };


    const handleGoogleLogin = () => {
        googleSignUp()
            .then(res => {
                const withGoogleLoginUser = res.user;
                const data = { name: withGoogleLoginUser?.displayName, email: withGoogleLoginUser?.email, }
                UserDataPostDb(data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const UserDataPostDb = (data) => {
        const { name, email } = data;
        const user = { name, email }
        if (user) {
            fetch('https://hospital-server-code.vercel.app/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {

                    if (data?.isAllReadyFoundData === "AllReadyFoundData" || data?.acknowledged === true) {
                        toast.success(`${name} Login account Successfully`);
                        setLoginUserEmail(email)
                    }
                });
        }
    };


    return (
        <section className="mt-5 flex flex-col lg:flex-row items-center justify-center gap-x-5">
             <img src={loginBanner} className="hidden lg:block w-1/3 rounded-lg shadow-2xl" />
            <div className="w-96 p-7 shadow-xl rounded text-left">
                <h3 className="text-3xl font-medium text-sky-500 text-center mt-5">Please Login</h3>
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
                    {
                        loginError && <p className='text-red-500'>{loginError}</p>
                    }
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