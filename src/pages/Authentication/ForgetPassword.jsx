import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";


const ForgetPassword = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { resetPassword } = useContext(AuthContext);
    const [emailMessage, setEmailMessage] = useState(false)

    const handleResetPassword = data => {
        const { email } = data;
        resetPassword(email)
            .then(() => {
                setEmailMessage('The Email has been sent; Check your Inbox!')
            })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     console.log(errorCode, errorMessage);
            // });
    }

    return (
        <div className="h-[300px] flex items-center justify-center">
            <div className="w-[350px] p-6 rounded bg-secondary">
                {
                    emailMessage ?
                        <h3>{emailMessage}</h3> :
                        <form onSubmit={handleSubmit(handleResetPassword)}>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: 'Email is required' })} type="Email" placeholder="Your Email" className="input input-bordered w-full " />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <input className="btn btn-accent w-full mt-6" type="submit" value="Reset Your Password" />
                        </form>
                }
            </div>
        </div>
    );
};

export default ForgetPassword;