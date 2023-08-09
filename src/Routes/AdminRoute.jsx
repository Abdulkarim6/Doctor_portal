import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [admin, adminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if (loading || adminLoading) {
        return <div className="card min-h-screen bg-accent text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl text-primary">Please Wait! <br /> Loading Data</h2>
                <div className="mt-5">
                    <span className="loading loading-bars loading-xs text-info"></span>
                    <span className="loading loading-bars loading-sm text-info"></span>
                    <span className="loading loading-bars loading-md text-info"></span>
                    <span className="loading loading-bars loading-lg text-info"></span>
                </div>
            </div>
        </div>
    }

    if (user && admin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;