import { Link } from "react-router-dom";

const Navber = () => {

    const menuItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/appointment'}>Appoinment</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/testimonials'}>Reviews</Link></li>
        <li><Link to={'/contuct'}>Contuct us</Link></li>
        <li><Link to={'/logIn'}>Login</Link></li>
    </>

    return (
        <section>
            <div className="navbar bg-sky-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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