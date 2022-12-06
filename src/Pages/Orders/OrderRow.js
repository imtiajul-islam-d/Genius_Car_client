import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { serviceName, price, email, customer, phone, service, _id, status } =
    order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`https://genious-car-server-mocha.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);
  //   delete item

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
          X
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {orderService?.img && (
                  <img
                    src={orderService.img}
                    alt="Avatar rounded Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{customer}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
