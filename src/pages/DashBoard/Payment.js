import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:4000/orders/${id}`;

  // fetch the data from server..............
  const { data, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { uName, pName, address, mobile, price, quantity } = data;
  const total = quantity * price;

  return (
    <Container>
      <Card className="p-5 mt-5">
        <div>
          <h2 className="mt-5 fs-1 fw-bold ">
          Hello <span style={{color:"#F47C7C"}}>{uName},</span> Thanks for make an Order.
          </h2>
        </div>
        <div>
          <p className="mt-3 fs-4 fw-bold">Your Order Details:</p>
          <ul>
            <li className="fs-5 ">Product: {pName}</li>
            <li className="fs-5 ">Price Per Unit: ${price}</li>
            <li className="fs-5 ">Quantity: {quantity}</li>
          </ul>
        </div>

        <div>
          <Button className="raw-btn"><span className="fs-3">You have to Pay: ${total}</span></Button>
        </div>
      </Card>
    </Container>
  );
};

export default Payment;
