import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ info }) => {
  const { title, price, img, _id } = info;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-60" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions flex items-center justify-between">
            <strong>${price}</strong>
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-error">
                <FaArrowRight></FaArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
