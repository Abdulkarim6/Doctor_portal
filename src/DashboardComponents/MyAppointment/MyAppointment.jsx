import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";
import { Link } from "react-router-dom";

const MyAppointment = () => {
    const [patientAppointmentsByDate, setPatientAppointmentsByDate] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDayClick = (res) => setSelectedDate(res);
    const date = format(selectedDate, 'PP');

    const [visible, setVisible] = useState(false);

    const handleDaypicker = () => {
        setVisible(current => !current)
    }

    const { user } = useContext(AuthContext);

    const { data: patientAppointments = [] } = useQuery({
        queryKey: ['patientAppointments', user?.email, date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/patientAppointments?email=${user?.email}&date=${date}`, {
                headers: {
                    authorization: (`bearer ${localStorage.getItem('accessToken')}`)
                }
            })
            const data = await res.json()
            return data;
        }
    });
    const patientAllAppointments = patientAppointments[0];

    useEffect(() => {
        const patientAppointmentsOnDate = patientAppointments[1];
        if (visible === true) {
            setPatientAppointmentsByDate(patientAppointmentsOnDate);
        }
    }, [visible, patientAppointments])

    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h3 className="text-base lg:text-2xl font-bold text-sky-500 text-left p-5">My total Appointments : {patientAllAppointments?.length}</h3>
                <div>
                    <button onClick={handleDaypicker} className="btn btn-accent btn-outline"> {date}</button>
                </div>
                <div data-theme="garden" className="absolute top-16 right-0 text-black font-medium rounded">
                    {
                        visible &&
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onDayClick={handleDayClick}
                        ></DayPicker>
                    }
                </div>
            </div>
            <table className="table ml-5 static">
                {/* head */}
                <thead>
                    <tr className="md:text-xl lg:text-2xl text-sky-500">
                        {/* <th className="hidden md:block lg:block">Quantity</th> */}
                        <th>Q. Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>PAYMENT</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        patientAppointmentsByDate ?
                            patientAppointmentsByDate?.map((patientAppointment, i) => <tr key={patientAppointment._id} className="hover whitespace-nowrap text-black md:text-base lg:text-xl font-medium">
                                <td>{i + 1}.<span className="ml-3"> {patientAppointment?.patientName}</span></td>
                                <td>{patientAppointment?.treatmentName}</td>
                                <td>{patientAppointment?.appointmentDate}</td>
                                <td>{patientAppointment?.slot.split('-')[0]}</td>
                                <td>
                                    {
                                        !patientAppointment?.paid &&
                                        <Link to={`/dashboard/payment/${patientAppointment._id}`}><button className="btn btn-secondary btn-sm ">Pay</button> </Link>
                                    }
                                    {
                                        patientAppointment?.paid &&
                                        <button className="btn btn-secondary btn-disabled">Paid</button>
                                    }
                                </td>
                            </tr>)

                            :

                             patientAllAppointments?.map((patientAppointment, i) => <tr key={patientAppointment._id} className="hover whitespace-nowrap text-black md:text-base lg:text-xl font-medium">
                                <td>{i + 1}.<span className="ml-3"> {patientAppointment?.patientName}</span></td>
                                <td>{patientAppointment?.treatmentName}</td>
                                <td>{patientAppointment?.appointmentDate}</td>
                                <td>{patientAppointment?.slot.split('-')[0]}</td>
                                <td>
                                    {
                                        !patientAppointment?.paid &&
                                        <Link to={`/dashboard/payment/${patientAppointment._id}`}><button className="btn btn-secondary btn-sm ">Pay</button> </Link>
                                    }
                                    {
                                        patientAppointment?.paid &&
                                        <button className="btn btn-secondary btn-disabled">Paid</button>
                                    }
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;