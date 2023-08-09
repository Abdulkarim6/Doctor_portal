import Navber from "../ShareComponents/Navber/Navber";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [admin] = useAdmin(user?.email);
    return (
        <>
            <Navber></Navber>

            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content overflow-scroll">
                    {/* Page content here */}

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-xl font-medium text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        {
                            admin === true && <>
                                <li><Link to='/dashboard/Users'>All Users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>

        </>
    );
};

export default DashboardLayout;