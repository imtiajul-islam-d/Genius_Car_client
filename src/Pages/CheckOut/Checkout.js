import React, { useContext } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, title,price, img } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.firstName.value + form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.textArea.value || "No message"
    const order = {
      service : _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message
    }
    if(phone.length < 11){
      alert('Please enter a correct phone number!')
    }else{
      fetch('https://genious-car-server-mocha.vercel.app/orders', {
        method: 'POST',
        headers: {
          "content-type": 'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.acknowledged){
          form.reset()
          alert("Order placed successfully")
          navigate('/')
        }
      })
      .catch(error => console.log(error))
    }

    // console.log(name, email, phone, message)
  }
  return (
    <div className="container mx-auto">
      <div className="w-full max-h-[33vh] my-5 overflow-hidden relative ">
        <img className="w-full" src={img} alt="" />
        <div className="w-full h-full "></div>
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50">
          <div className="w-full h-full relative">
            <div className="flex items-center justify-center h-full  text-white font-bold text-3xl">
              <h2>{title}</h2>
            </div>
            <div className="absolute bottom-2 flex justify-center w-full">
              <Link to="/" className="btn bg-red-700 text-white">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleOnSubmit} className="my-4 bg-gray-400 px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between ">
          <input
            type="text"
            name="firstName"
            required
            placeholder="First name"
            className="input input-bordered input-secondary w-full mx-auto"
          />
          <input
            type="text"
            required
            name="lastName"
            placeholder="Last name"
            className="input input-bordered input-secondary w-full mx-auto"
          />
          <input
            type="text"
            required
            name="phone"
            placeholder="Phone"
            className="input input-bordered input-secondary w-full mx-auto"
          />
          <input
            type="text"
            required 
            name="email"
            placeholder="Email"
            defaultValue={user?.email}
            className="input input-bordered input-secondary w-full mx-auto"
            readOnly
          />
        </div>
        <div className="mt-5">
          <textarea
            name="textArea"
            type="textarea"
            rows="10"
            placeholder="Message"
            className="w-full mx-auto p-4 rounded-sm"
          />
          <button type="submit" className="w-full py-5 bg-red-700 text-white">
            Place order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
