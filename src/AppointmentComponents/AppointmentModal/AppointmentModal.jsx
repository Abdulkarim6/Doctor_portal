import { format } from "date-fns";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const AppointmentModal = ({ treatment, setTreatment, selectedDate ,refetch}) => {
    const { user } = useContext(AuthContext);
    const { name, slots } = treatment;
    console.log(treatment);

    const date = format(selectedDate, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const from = e.target;
        const patientName = from.patientName.defaultValue;
        const patientEmail = from.patientEmail.defaultValue;
        const patientNumber = from.patientNumber.defaultValue;
        const slot = from.slot.value;
        // console.log(slot);

        const booking = {
            treatmentName: treatment?.name,
            appointmentDate: date,
            patientName, patientEmail, patientNumber, slot
        }
        console.log(booking);

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                'content-Type': "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged === true) {
                    setTreatment(null);
                    toast.success("Booked Successfull");
                    refetch();
                } else {
                    toast.error(data.message);
                    setTreatment(null);
                }
                console.log(data);
            })

    }
    return (
        <div>

            <input type="checkbox" id="booking_Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={handleBooking} >
                        <h3 name="treatmentName" className="font-bold text-lg">{name}</h3>
                        <div className="modal-action">
                            <label htmlFor="booking_Modal" className="btn btn-medium btn-circle btn-ghost bg-primary absolute right-2 top-2 text-2xl">✕</label>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                            <input type="text" name="" placeholder="Date" defaultValue={date} disabled className="input input-bordered input-primary w-full" />
                            <select name='slot' className="select select-primary w-full">
                                {
                                    slots && slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                                }
                            </select>

                            <input type="text" name="patientName" disabled defaultValue={user?.displayName} className="input input-bordered input-primary w-full" />
                            <input type="text" name="patientEmail" disabled defaultValue={user?.email} className="input input-bordered input-primary w-full" />
                            <input type="text" name="patientNumber" placeholder="Your Number" className="input input-bordered input-primary w-full" />

                            <input type="submit" defaultValue="Submit" className="btn btn-accent" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AppointmentModal;