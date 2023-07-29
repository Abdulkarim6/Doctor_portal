import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navber = () => {
    const { user, userLogOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .then(error => console.log(error))
    }

    const menuItems = <>
        <li><Link to={'/'}>{user?.displayName}</Link></li>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/appointment'}>Appoinment</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/testimonials'}>Reviews</Link></li>
        <li><Link to={'/contuct'}>Contuct us</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <li><Link onClick={handleLogOut} to={'/'}>LogOut</Link></li>
                </>
                :
                <li><Link to={'/logIn'}>Login</Link></li>
        }
    </>

    return (
        <section>
            <div className="navbar bg-sky-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-circle swap swap-rotate lg:hidden">
                            <input type="checkbox" />
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                        </label>
                        <ul tabIndex={0} className="text-lg font-medium menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">Doctor Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-lg menu menu-horizontal px-1 font-medium">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navber;