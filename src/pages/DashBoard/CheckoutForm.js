import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Loading from "../Loading";

const CheckoutForm = ({ orderedItem , total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { uName, pName, address, mobile, price, quantity } = orderedItem;

  // post price to backend..............
  useEffect(() => {
    fetch("https://salty-refuge-93523.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ total }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [total]);

  //   while clicking pay button..............
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true)
    // confirm card payment
    const { paymentIntent, error: intentError } =
     
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: uName,
            address: address,
          },
        },
      });
      

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setProcessing(false);
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Congrats! Your payment is completed.");
      
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        {
          processing && <Loading></Loading>
        }
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="raw-btn mt-4 w-25"
        >
          Pay Now
        </button>
      </form>

      {cardError && <p className="text-danger">{cardError}</p>}
      {success && (
        <div className="text-success fw-bold mt-3">
          <p>{success} </p>
          <p className="text-dark">
            Your transaction Id:{" "}
            <span className="text-primary">{transactionId}</span>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
