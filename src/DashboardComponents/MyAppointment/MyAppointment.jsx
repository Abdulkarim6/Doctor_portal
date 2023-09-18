import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";
import { Link } from "react-router-dom";

const MyAppointment = () => {
    const [dataLoadingBydate, setdataLoadingBydate] = useState(false);
    const [patientAppointmentsByDate, setPatientAppointmentsByDate] = useState();
    const [patientAllAppointments, setPatientAllAppointments] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDayClick = (res) => {
        setPatientAppointmentsByDate();
        setSelectedDate(res);
        setdataLoadingBydate(true);
    };
    const date = format(selectedDate, 'PP');

    const [visible, setVisible] = useState(false);

    const handleDaypicker = () => {

        setVisible(current => !current)
    }

    const { user } = useContext(AuthContext);

    const { data: patientAppointments = [] } = useQuery({
        queryKey: ['patientAppointments', user?.email, date],
        queryFn: async () => {
            const res = await fetch(`https://hospital-server-code.vercel.app/patientAppointments?email=${user?.email}&date=${date}`, {
                headers: {
                    authorization: (`bearer ${localStorage.getItem('accessToken')}`)
                }
            })
            const data = await res.json()
            return data;
        }
    });
    useEffect(() => {
        if (patientAppointments?.length) {
            setPatientAllAppointments(patientAppointments[0]);
            setdataLoadingBydate(false);
        }
    }, [patientAppointments, patientAllAppointments]);


    useEffect(() => {
        if (visible === true && patientAppointments?.length) {
            setPatientAppointmentsByDate(patientAppointments[1]);
            setdataLoadingBydate(false);
        }
    }, [visible, patientAppointments]);


    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                {
                    patientAppointmentsByDate ?
                        <h3 className="text-xl lg:text-2xl font-bold text-sky-500 text-left p-5">{`${date} My Appointments : ${patientAppointmentsByDate?.length}`}</h3>
                        :
                        <h3 className="text-xl lg:text-2xl font-bold text-sky-500 text-left p-5">{`My total Appointments : ${patientAllAppointments?.length}`}</h3>
                }
                <div>
                    <button onClick={handleDaypicker} className="btn btn-accent btn-outline">{date}</button>
                </div>
                <div data-theme="garden" className="absolute top-16 right-0  font-medium rounded">
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
                <thead>
                    <tr className="md:text-xl lg:text-2xl text-sky-500">
                        <th>Q. Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {dataLoadingBydate ?
                        <tr><td><progress className="progress w-56"></progress></td></tr>
                        :
                        patientAppointmentsByDate ?
                            !patientAppointmentsByDate?.length ? <tr className="lg:text-xl text-base font-bold whitespace-nowrap"><td>{`You have No appoinment on ${date}`}</td></tr>
                                :
                                patientAppointmentsByDate?.map((patientAppointment, i) => <tr key={patientAppointment._id} className="hover whitespace-nowrap md:text-base lg:text-xl font-medium">
                                    <td>{i + 1}.<span className="ml-3">{patientAppointment?.patientName}</span></td>
                                    <td>{patientAppointment?.treatmentName}</td>
                                    <td>{patientAppointment?.appointmentDate}</td>
                                    <td>{patientAppointment?.slot.split('-')[0]}</td>
                                    <td>
                                        {
                                            !patientAppointment?.paid &&
                                            <Link to={`/dashboard/payment/${patientAppointment._id}`}><button className="btn btn-secondary btn-sm ">Pay</button></Link>
                                        }
                                        {
                                            patientAppointment?.paid &&
                                            <button className="btn btn-secondary btn-disabled">Paid</button>
                                        }
                                    </td>
                                </tr>)

                            :

                            patientAllAppointments?.map((patientAppointment, i) => <tr key={patientAppointment._id} className="hover whitespace-nowrap md:text-base lg:text-xl font-medium">
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