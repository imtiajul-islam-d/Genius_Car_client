import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  //   const [loading, setLoading] = useState(false);
  // if(!user.email){
  //     return setLoading(true)
  
  // }
  //  using jwt token
  useEffect(() => {
    fetch(`https://genious-car-server-mocha.vercel.app/orders?email=${user?.email}`,{
      headers:  {
        authorization: `Bearer ${localStorage.getItem('geniousToken')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          return logOut()
          .then(()=> {})
          .then(() => {})
          
        }else{
          return res.json()
        }
        
      })
      .then((data) => {
        // console.log(data, 'inside data');
        setOrders(data)
      });
  }, [user?.email]);
//  using jwt token
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel the order?"
    );
    if (proceed) {
      fetch(`https://genious-car-server-mocha.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.deletedCount > 0){
            const remaining = orders.filter(odr => odr._id !== id)
            setOrders(remaining)
          }
        });
    }
  };
  // update status
  const handleStatusUpdate = id => {
    fetch(`https://genious-car-server-mocha.vercel.app/orders/${id}`, {
      method: "PATCH", 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: "Approved"})
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        const remaining = orders.filter(odr => odr._id !== id);
        const updatedData = orders.find(odr => odr._id === id);
              updatedData.status = "Approved"
        const newOrders = [...remaining, updatedData]
        setOrders(newOrders)
      }
      console.log(data)
    })
  }
 
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto w-full">
        <div className="w-full bg-red-700 text-white py-4 rounded-md text-center">
          You have placed {orders.length} {orders.length > 1 ? "items" : "item"}
        </div>
        <table className="table w-full min-h-[80vh]">
          {/* <!-- head --> */}

          <tbody>
            {orders.map((order) => (
              <OrderRow key={order._id} order={order} handleDelete={handleDelete} handleStatusUpdate= {handleStatusUpdate}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
