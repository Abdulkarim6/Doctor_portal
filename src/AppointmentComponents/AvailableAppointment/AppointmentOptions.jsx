import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
// import AppointmentOption from "./AppointmentOption";

const AppointmentOptions = ({ selectedDate }) => {
    const [availableAppointmentOptions, setAvailableAppointmentOptions] = useState([]);

    // treatment is availableAppointmentOption
    const [treatment, setTreatment] = useState({});

    useEffect(() => {
        fetch("appointmentOptions.json")
            .then(res => res.json())
            .then(data => setAvailableAppointmentOptions(data))

    }, []);

    return (
        <section className="my-6">
            <p className='text-2xl font-medium text-sky-500 mb-6'>Available Appointments on {format(selectedDate, 'PP')}. </p>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 m-2'>
                {
                    availableAppointmentOptions && availableAppointmentOptions.map((availableAppointmentOption) => <>
                        {/* ----------availableAppointmentOption start---------- ----------*/}
                        <div className="card bg-base-100 shadow">
                            <div className="card-body items-center">
                                <h2 className="card-title text-2xl font-medium text-sky-500">{availableAppointmentOption.name}</h2>
                                <p>{availableAppointmentOption.slots.length > 0 ? availableAppointmentOption.slots[0] : "Try another day"}</p>
                                <p>{availableAppointmentOption.slots.length} {availableAppointmentOption.slots.length > 1 ? 'spaces' : 'space'} available</p>
                                <div className="my-2">
                                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary"
                                        onClick={() => {
                                            window.booking_Modal.showModal();
                                            setTreatment(availableAppointmentOption)
                                        }
                                        }>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                        {/* ----------availableAppointmentOption End---------- -------------*/}
                    </>
                    )
                }
            </div>
            {
                <AppointmentModal
                selectedDate={selectedDate}
                    treatment={treatment}
                ></AppointmentModal>
            }
        </section>
    );
};

export default AppointmentOptions;