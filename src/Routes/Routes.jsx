import { createBrowserRouter } from "react-router-dom";
import Contuct from "../HomeComponents/Contuct/Contuct";
import DentalCare from "../HomeComponents/DentalCare/DentalCare";
import Testimonials from "../HomeComponents/Testimonial/Testimonials";
import MainLayout from "../Layout/MainLayout";
import Appointment from "../pages/Appointment/Appointment";
import ForgetPassword from "../pages/Authentication/ForgetPassword";
import SignIn from "../pages/Authentication/LogIn";
import SignUp from "../pages/Authentication/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/home/home";
import PrivateRoute from "./PrivateRoute";

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
        path: '/dashboard', element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    }
]);

export default router;