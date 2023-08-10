import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Users = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("https://hospital-server-code.vercel.app/users", {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = (user) => {
        fetch(`https://hospital-server-code.vercel.app/users/makeAdmin/${user?._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    toast.success(`created a admin${user?.name} successful `);
                    refetch();
                }
            })
    };

    const handleDelete = user => {
        fetch(`https://hospital-server-code.vercel.app/user?_id=${user?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged === true) {
                    toast.success(`${user?.name} delete successfull`);
                    refetch()
                }
            })

    }

    return (
        <div className="w-full overflow-scroll">
            <h3 className="text-2xl font-bold text-sky-500 text-left p-5">All Users : {users?.length}</h3>
            <table className="table ml-5">
                {/* head */}
                <thead>
                    <tr className="md:text-xl lg:text-2xl text-black">
                        <th className="hidden md:block lg:block">Quantity</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) => <tr key={user?._id} className="hover text-black md:text-base lg:text-xl font-medium">
                            <th className="hidden md:block lg:block text-center">{i + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            {
                                user?.role !== 'admin' ?
                                    <td> <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm btn-primary">Make Admin</button ></td>
                                    :
                                    <td> <button className="btn btn-sm btn-primary text-black" disabled> Admin</button ></td>
                            }
                            <td><button onClick={() => handleDelete(user)} className="btn btn-sm btn-error" >delete</button ></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;