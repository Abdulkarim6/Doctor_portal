import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../DashboardComponents/AddDoctor/AddDoctor";
import ManageDoctor from "../DashboardComponents/ManageDoctor/ManageDoctor";
import Users from "../DashboardComponents/Users/Users";
import MyAppointment from "../DashboardComponents/MyAppointment/MyAppointment";
import Contuct from "../HomeComponents/Contuct/Contuct";
import DentalCare from "../HomeComponents/DentalCare/DentalCare";
import Testimonials from "../HomeComponents/Testimonial/Testimonials";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import Appointment from "../pages/Appointment/Appointment";
import ForgetPassword from "../pages/Authentication/ForgetPassword";
import SignIn from "../pages/Authentication/LogIn";
import SignUp from "../pages/Authentication/SignUp";
import Home from "../pages/home/home";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AppointmentPayment from "../DashboardComponents/AppointmentPayment/AppointmentPayment";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/appointment', element: <Appointment></Appointment> },
            { path: '/about', element: <DentalCare></DentalCare> },
            { path: '/testimonials', element: <Testimonials></Testimonials> },
            { path: '/contuct', element: <Contuct></Contuct> },
            { path: '/logIn', element: <SignIn></SignIn> },
            { path: '/forgetPassword', element: <ForgetPassword></ForgetPassword> },
            { path: '/signup', element: <SignUp></SignUp> }
        ]
    },
    {
        path: '/dashboard', element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [

            { path: '/dashboard', element: <MyAppointment></MyAppointment> },
            { path: '/dashboard/Users', element: <AdminRoute><Users></Users></AdminRoute> },
            { path: '/dashboard/addDoctor', element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute> },
            { path: '/dashboard/manageDoctor', element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute> },
            {
                path: '/dashboard/payment/:id', element:<AppointmentPayment></AppointmentPayment>,
                loader: ({ params }) => fetch(`https://hospital-server-code.vercel.app/appointment/${params.id}`)
            },
        ]
    }
]);

export default router;