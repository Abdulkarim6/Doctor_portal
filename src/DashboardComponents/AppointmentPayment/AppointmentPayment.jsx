import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_key);

const AppointmentPayment = () => {
    const appopintment = useLoaderData();
    const { treatmentName, patientName, appointmentDate, slot, price } = appopintment;
   
    return (
            <div className="w-[376px] lg:w-full flex flex-col items-center mt-2 pl-2">
                <div className="mt-5 text-left">
                    <h3 className="text-2xl text-secondary font-bold"> Hello {patientName}</h3>
                    <h3 className="text-xl font-medium"> Payment for {treatmentName}</h3>
                    <h3 className="text-base lg:text-xl font-medium">Your appointment :  {appointmentDate} at {slot} </h3>
                    <p className='text-xl'>Please pay <strong>${price}</strong> for your appointment </p>
                </div>
                <div className="w-full lg:w-96 my-4">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            appopintment={appopintment}
                        />
                    </Elements>
                </div>
            </div>
    );
};

export default AppointmentPayment;