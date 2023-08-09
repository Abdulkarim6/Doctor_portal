import { format } from "date-fns";
import { Fragment, useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import { useQuery, } from '@tanstack/react-query'
// import AppointmentOption from "./AppointmentOption";

const AppointmentOptions = ({ selectedDate }) => {
    // const [availableAppointmentOptions, setAvailableAppointmentOptions] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:5000/appointmentOptions")
    //         .then(res => res.json())
    //         .then(data => setAvailableAppointmentOptions(data))

    // }, []);

    // treatment is availableAppointmentOption
    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'PP');

    const { data: availableAppointmentOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data;
        }
    })



    return (
        <section className="my-6‌">
            <p className='text-2xl font-medium text-sky-500 mb-6'> Available Appointments on {format(selectedDate, 'PP')}. </p>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 m-2'>
                {
                    availableAppointmentOptions && availableAppointmentOptions.map((availableAppointmentOption, i) => <Fragment key={i}>
                        {/* ----------availableAppointmentOption start---------- ----------*/}
                        <div className="card bg-base-100 shadow">
                            <div className="card-body items-center">
                                <h2 className="card-title text-2xl font-medium text-sky-500">{availableAppointmentOption.name}</h2>
                                <p>{availableAppointmentOption.slots.length > 0 ? availableAppointmentOption.slots[0] : "Try another day"}</p>
                                <p>{availableAppointmentOption.slots.length} {availableAppointmentOption.slots.length > 1 ? 'spaces' : 'space'} available</p>
                                <p>Price : <strong>$ {availableAppointmentOption.price}</strong></p>
                                <div className="my-2">
                                    <label onClick={() => setTreatment(availableAppointmentOption)} htmlFor="booking_Modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Book Appointment</label>
                                </div>
                            </div>
                        </div>
                        {/* ----------availableAppointmentOption End---------- -------------*/}
                    </Fragment>
                    )
                }
            </div>
            {treatment &&
                <AppointmentModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></AppointmentModal>
            }
        </section>
    );
};

export default AppointmentOptions;