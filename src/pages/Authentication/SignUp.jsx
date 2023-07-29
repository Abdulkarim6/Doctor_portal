import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useNavigate, useLocation } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, googleSignUp, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignUp = data => {
        const { Name, email, password } = data;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // handleUpdateUser(Name)
                updateUser({ displayName: Name })
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err);
            })

        console.log(data, Name);
    };

    const handleGoogleSignup = () => {
        googleSignUp()
            .then(res => {
                const withGoogleSignUpUser = res.user;
                navigate(from, { replace: true })
                console.log(withGoogleSignUpUser);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <section className="flex flex-col items-center">
            <h3 className="text-3xl font-medium text-sky-500 mt-5">Wellcome to Doctors Portal</h3>
            <div className="w-96 p-5 shadow-xl rounded text-left">
                <form onSubmit={handleSubmit(handleSignUp)} >
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("Name", { required: 'Name is required' })} type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        {errors.Name && <p className='text-red-600'>{errors.Name?.message}</p>}
                    </div>
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
                        {errors.password && <p className="test-red-500">{errors.password?.message}</p>}
                    </div>
                    <input className="btn btn-accent w-full mt-6" type="submit" value="SignUp" />
                </form>
                <div className="divider">OR</div>
                <input onClick={handleGoogleSignup} className="btn btn-outline w-full mt-2" type="submit" value="CONTINUE WITH GOOGLE" />
            </div>
        </section>
    );
};

export default SignUp;