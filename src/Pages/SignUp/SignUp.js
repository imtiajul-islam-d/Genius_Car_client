import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import login from "./../../assets/images/login/login.svg";

const SignUp = () => {
  const [error, setError] = useState('')
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError('')
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirmPassword.value;
    if (password === confirm) {
      createUser(email, password)
        .then((user) => {
          console.log(user.user)
          form.reset()
          logOut()
          .then(() => {
            alert("Successfully registered! Now Please Login...")
            navigate('/login')
          })
          .catch(() => {
            
          })
          
        })
        .catch((err) => console.log(err));

    }else{
      setError('Password did not matched!!')
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex flex-col md:flex-row container mx-auto">
          <div className="flex items-center justify-center w-3/4 md:w-1/2">
            <img src={login} alt="" />
          </div>
          <div className="card my-3 md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleOnSubmit} className="card-body">
              <h3 className="text-center font-bold text-red-700 text-3xl">
                Sign Up
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label"></label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="input input-bordered"
                />
                <label className="label"></label>
              </div>
              <p className="text-red-700 font-bold">{error}</p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-error">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center font-bold py-6">
              Already have an account?{" "}
              <Link className="text-red-700 " to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
