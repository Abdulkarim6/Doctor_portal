// https://github.com/stripe/react-stripe-js/blob/master/examples/hooks/0-Card-Minimal.js
// https://stripe.com/docs/payments/quickstart?client=react&lang=node
// https://stripe.com/docs/api/payment_intents/object
// https://stripe.com/docs/js/payment_intents/confirm_card_payment
// https://stripe.com/docs/testing

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckoutForm = ({ appopintment }) => {
    const { price, patientName, patientEmail, _id } = appopintment;
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://hospital-server-code.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }

        // const { error, paymentMethode } = await stripe.createPaymentMethod({
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError()
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail

                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            const paymentData = {
                paymentId: paymentIntent.id,
                appopintmentId: _id,
                price,
                patientEmail,
            }

            //store payment to db
            fetch('https://hospital-server-code.vercel.app/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats! You payment successfully')
                        setTransactionId(paymentIntent.id);
                        setProcessing(true) //for desabled pay button
                    }
                })
        }
        
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary my-4 btn-sm" type="submit"
                    disabled={!stripe || processing}
                >
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success &&
                <div>
                    <p className="text-xl text-green-500">{success}</p>
                    <p className="text-xl font-medium">Your payment Transaction Id : {transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;