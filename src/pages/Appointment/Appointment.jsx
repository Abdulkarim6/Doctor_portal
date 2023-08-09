import { useState } from 'react';
import AppointmentBanner from "../../AppointmentComponents/AppointmentBanner/AppointmentBanner";
import AppointmentOptions from "../../AppointmentComponents/AvailableAppointment/AppointmentOptions";

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
   
    const handleDayClick = (res) => setSelectedDate(res);
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                // setSelectedDate={setSelectedDate}
                handleDayClick={handleDayClick}
            ></AppointmentBanner>
            <AppointmentOptions
                selectedDate={selectedDate}
            ></AppointmentOptions>
        </div>
    );
};

export default Appointment;