/* eslint-disable react/no-unescaped-entities */
import doctor from '../../assets/images/doctor-bulk.png'
import Button from '../../ShareComponents/Button/Button';
import bgimg from '../../assets/images/appointment.png';
import { Link } from "react-router-dom";

const MakeAppointment = () => {
    return (
        <section className='bg-fixed' style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="hero mt-12">
                <div className="hero-content flex-col lg:flex-row gap-6">
                    <img src={doctor} className="w-1/2 rounded-lg -mt-16 -mb-4"/>
                    <div className='text-left'>
                        <h1 className="lg:text-6xl text-4xl font-bold pb-3 text-sky-500">Appointment </h1>
                        <h1 className="text-white lg:text-5xl text-2xl font-bold">Make an appointment Today</h1>
                        <p className=" text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to='/appointment'><Button>Get Appointment</Button> </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;