import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiMiniXMark, HiMiniBars3 } from "react-icons/hi2";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navber = () => {
    // Theme Toggle start
    const htmlElement = document.querySelector("html");

    let sunSwap;
    let moonSwap;
    let darkMode;

    if (localStorage.getItem("dark-mode")) {
        darkMode = localStorage.getItem("dark-mode");
    } else {
        darkMode = "garden"
    }
    localStorage.setItem("dark-mode", darkMode);

    if (localStorage.getItem("dark-mode") == 'garden') {
        htmlElement.setAttribute("data-theme", "garden");
        moonSwap = "swap-on"
        sunSwap = "swap-off"
    } else {
        htmlElement.setAttribute("data-theme", "dark");
        sunSwap = "swap-on"
        moonSwap = "swap-off"
    }


    const setToggleThemeMode = () => {
        if (localStorage.getItem("dark-mode") == 'garden') {
            htmlElement.setAttribute("data-theme", "dark");
            localStorage.setItem('dark-mode', 'dark');
        }
        else {
            htmlElement.setAttribute("data-theme", "garden");
            localStorage.setItem('dark-mode', 'garden');
        }
    }
    // Theme Toggle end
    const { user, userLogOut } = useContext(AuthContext);
    const [userName, setUserName] = useState('');
    console.log(userName);

    useEffect(() => {
        const userName = user?.displayName;
        setUserName(userName)
    }, [user?.displayName, user]);

    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .then(error => console.log(error))
    };

    // Toggole nav icon start
    const [toggleIcon, setToggleIcon] = useState(false);
    console.log(toggleIcon);
    

    const toggleHandle = () =>{
        setToggleIcon(current => !current);
    }

    const menuItems = <>
        <li>
            <label className="swap place-content-start swap-rotate">
                <input onChange={setToggleThemeMode} type="checkbox" />
                <svg className={`${sunSwap} fill-current w-7 h-7`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                <svg className={`${moonSwap} fill-current w-7 h-7`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
        </li>
        <li><Link to={'/'}>{userName}</Link></li>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/appointment'}>Appoinment</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/testimonials'}>Reviews</Link></li>
        <li><Link to={'/contuct'}>Contuct Us</Link></li>
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
            <div className="navbar flex justify-between items-center">
                <div className="navbar-start">
                    <details className="dropdown">
                        <summary onClick={() => toggleHandle()} className="btn px-2 m-1 btn-ghost lg:hidden">
                          {
                            toggleIcon ?
                                <HiMiniXMark className="h-6 w-6 md:h-7 md:w-7" />
                            :
                                <HiMiniBars3 className="h-6 w-6 md:h-7 md:w-7" />
                          }
                        </summary>

                        
                        <ul className="text-lg font-medium menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </details>
                   <a className="btn btn-ghost normal-case text-xl lg:text-2xl pl-0">Doctor Portal</a>
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