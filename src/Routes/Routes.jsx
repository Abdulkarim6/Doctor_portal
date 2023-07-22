import { createBrowserRouter } from "react-router-dom";
import Contuct from "../HomeComponents/Contuct/Contuct";
import DentalCare from "../HomeComponents/DentalCare/DentalCare";
import Testimonials from "../HomeComponents/Testimonial/Testimonials";
import MainLayout from "../Layout/MainLayout";
import Appointment from "../pages/Appointment/Appointment";
import SignIn from "../pages/Authentication/LogIn";
import Home from "../pages/home/home";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/appointment', element: <Appointment></Appointment> },
            { path: '/about', element: <DentalCare></DentalCare> },
            { path: '/testimonials', element: <Testimonials></Testimonials> },
            { path: '/contuct', element: <Contuct></Contuct> },
            { path: '/logIn', element: <SignIn></SignIn> }
        ]
    }
]);

export default router;