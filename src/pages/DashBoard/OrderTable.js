import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrderTable = ({ singleItem }) => {
  const { _id } = singleItem;
  const navigate = useNavigate();
  const [part, setPart] = useState([singleItem]);
  const [paid, setPaid] = useState(false);

  // delete item
  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Want to Delete?");
    if (proceed) {
      const url = `https://salty-refuge-93523.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingUser = part.filter((item) => item._id !== id);

            setPart(remainingUser);
          }
        });
    }
  };

  return (
    <>
      {part.map((item) => (
        <tr>
          <td>{item.pName}</td>
          <td>{item.quantity}</td>
          <td>${item.price}.0</td>

          <td>
            {!paid ? (
              <Button
                onClick={() => navigate(`/dashboard/payment/${_id}`)}
                className="btn btn-primary text-dark bg-warning px-4"
                style={{ border: "none" }}
              >
                Pay Now
              </Button>
            ) : (
              <span
                
                className="btn btn-primary text-light bg-success px-4"
                style={{ border: "none" }}
              >
                Paid
              </span>
            )}
          </td>
          <td>
            <Button
              onClick={() => handleDeleteItem(_id)}
              className="btn btn-danger text-light px-4"
              style={{ border: "none" }}
            >
              X
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default OrderTable;
