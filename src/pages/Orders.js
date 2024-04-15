import React from "react";
import { useContext, useEffect, useState, useCallback, useMemo } from "react";
import { LoginContext } from "../Context/LoginContext";
import axios from "axios";

export default function Orders() {
  const [activeUser] = useContext(LoginContext);
  const [orders, setOrders] = useState([]);

  let token = localStorage.getItem("token");
  const headers = useMemo(() => {
    return {"Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
  },[token]);




  // const url = "https://rebound-shoes-api.adaptable.app/";


  
  const getOrders = useCallback(async () => {

    
    const userOrders = await axios
      .get(
        `"https://rebound-shoes-api.adaptable.app/orders/${activeUser._id}`,
        {
          headers,
        }
      )
      .catch((error) => {
        console.log(error);
        return error;
      });
    console.log(userOrders);
    setOrders(userOrders.data.data);
  },[headers,activeUser._id]);

  useEffect(() => {
    if (activeUser._id) {
      getOrders();
    }
  }, [activeUser, getOrders]);

  return (
    <>
      {!activeUser.username ? (
        <h1 className="pt-40 flex justify-center items-center">
          Login to see your orders
        </h1>
      ) : orders ? (
        <div className="pt-40 flex justify-center items-center flex-col">
          <h1 className="pb-24">Orders for {activeUser.username}</h1>
          <div className="flex justify-center items-center flex-col gap-y-10">
            {orders.map((order) => (
              <div
                className="flex justify-center items-start flex-col"
                key={order._id}
              >
                <h3>Order Number: {order._id}</h3>
                <div className="flex justify-start flex-col">
                  <h3>Items in Order</h3>
                  <div className="flex">
                    {order.products.map((product) => {
                      return (
                        <div>
                          <div className="flex flex-col gap-y-2">
                            {product.name}-{product.color}
                          </div>

                          <img
                            className={" w-[100px] rounded-xl"}
                            alt={`shoe-${product.name}-${product.color}`}
                            crossorigin="anonymous"
                            src={product.image}
                          />
                          <p>Quantity: {product.quantity}</p>

                          <p>Price: ${product.price}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <h3>Total order cost: ${order.totalPrice}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
