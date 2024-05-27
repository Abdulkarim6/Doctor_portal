import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from "react-hot-toast";
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null)
    }

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://hospital-server-code.vercel.app/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            console.log(data);
            return data;

        }
    });


    const deleteAction = doctor => {
        fetch(`https://hospital-server-code.vercel.app/doctor?_id=${doctor?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged === true) {
                    toast.success(`${doctor?.name} doctor delete successfull`);
                    refetch()
                }
            })
    }

    return (
        <section>
            <h3 className="text-2xl font-bold text-sky-500 text-left p-5">Manage Doctors : {doctors?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-2xl text-sky-500'>
                            <th className='text-center'>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.map((doctor, i) =>
                            <tr key={i} className='text-xl'>
                                <td>
                                    <div className="flex items-center space-x-3 pl-5">
                                        <div className="font-bold">{1 + i}</div>
                                        <div className="avatar">
                                            <div className=" rounded-full w-16 ">
                                                <img src={doctor?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h3 className=' font-bold'>{doctor?.name}</h3>
                                </td>
                                <td>{doctor?.specialty}</td>
                                <th>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation_Modal" className="btn btn-error btn-sm">Delete</label>
                                </th>
                            </tr>
                        )}

                    </tbody>

                </table>
            </div>
            {
                deletingDoctor &&
                <ConfirmationModal
                    deletingDoctor={deletingDoctor}
                    title={`Are you sure you want to delete ${deletingDoctor?.name} doctor ?`}
                    message={`if you delete the doctor! it can not be undone`}
                    deleteBtnText={`Delete`}
                    CencelBtnText={`Cencel`}
                    deleteAction={deleteAction}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </section>
    );
};

export default ManageDoctor;