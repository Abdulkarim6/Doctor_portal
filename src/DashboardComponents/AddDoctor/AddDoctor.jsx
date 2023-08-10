import toast from "react-hot-toast";
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import sidePhoto from '../../assets/images/addBanner.jpg'

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostKey = import.meta.env.VITE_imgHost_key;
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    const navigate = useNavigate()
    const { data: specialties = [] } = useQuery({
        queryKey: ['specialties'],
        queryFn: async () => {
            const res = await fetch(`https://hospital-server-code.vercel.app/specialties`)
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        const formData = new FormData();
        const file = data.doctor[0];
        formData.append('image', file)
        //image host fetching
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                };
                //doctor data sent to DB
                fetch('https://hospital-server-code.vercel.app/doctor', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result?.acknowledged) {
                            toast.success(`${data?.name} is added as a doctor`);
                            navigate('/dashboard/manageDoctor')
                        }

                    })
            })

    }

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={sidePhoto} className="lg:w-1/2 h-auto rounded-lg shadow-2xl" />

                <div className=" p-5">
                    <h3 className="text-2xl font-bold text-sky-500">Add a new Doctor</h3>
                    <form onSubmit={handleSubmit(handleAddDoctor)} >
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: 'Name is required' })} type="text" placeholder="Your Name" className="input input-primary input-bordered w-full " />
                            {errors.Name && <p className='text-red-600'>{errors.Name?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: 'Email is required' })} type="Email" placeholder="Your Email" className="input input-primary input-bordered w-full " />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <select {...register("specialty", { required: 'Specialty is required' })} type="text" placeholder="Doctor Specialty" name='specialty' className="select select-primary input-bordered w-full">
                                {
                                    specialties && specialties.map((specialty, i) => <option key={i} value={specialty?.name}>{specialty?.name}</option>)
                                }
                            </select>
                            {errors.specialty && <p className='text-red-600'>{errors.specialty?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Doctor</span>
                            </label>
                            <input {...register("doctor", { required: 'photo is required' })} type="file" placeholder="Doctor photo" className="input input-primary input-bordered w-full " />
                            {errors.doctor && <p className='text-red-600'>{errors.doctor?.message}</p>}
                        </div>
                        <input className="btn btn-accent w-full mt-6" type="submit" value="Add Doctor" />
                    </form>
                </div>

            </div>
        </div>


    );
};

export default AddDoctor;