import { format } from "date-fns";

const AppointmentModal = ({ treatment, selectedDate }) => {
    // console.log(treatment);
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    return (
        <dialog id="booking_Modal" className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">{name}</h3>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <form className="grid grid-cols-1 gap-4 mt-6">
                    <input type="text" name="" placeholder="Date" value={date} disabled className="input input-bordered input-primary w-full" />
                    <select className="select select-primary w-full">
                        {
                            slots && slots.map((slot, i) => <option key={i} value={slot}>{slot} </option>)
                        }
                    </select>

                    <input type="text" name="" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <input type="text" name="" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <input type="text" name="" placeholder="Type here" className="input input-bordered input-primary w-full" />

                    <input type="submit" value="Submit" className="btn btn-accent" />
                </form>
            </form>
        </dialog>
    );
};

export default AppointmentModal;