
 {/* ----This component pass to parent component--- */}


// const AppointmentOption = ({ availableAppointmentOption, setTreatment }) => {
//     // console.log(availableAppointmentOption);
//     const { name, slots } = availableAppointmentOption;

//     function handleClick() {
//         setTreatment(availableAppointmentOption.name, availableAppointmentOption.slots)
//     }

//     return (
//         <div>
//             <div className="card bg-base-100 shadow">
//                 <div className="card-body items-center">
//                     <h2 className="card-title text-2xl font-medium text-sky-500">{name}</h2>
//                     <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
//                     <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
//                     <div className="my-2">

//                         <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary"
//                             onClick={() => {
//                                 window.booking_Modal.showModal()
//                                     ;
//                                 handleClick()
//                             }
//                             }>Book Appointment</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AppointmentOption;