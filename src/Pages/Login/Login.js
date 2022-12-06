import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import login from "./../../assets/images/login/login.svg";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [error, setError] = useState('')
  const {signInUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError('')
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const currentUser = {
        email: user.email
      }
      // get jwt token
      fetch('https://genious-car-server-mocha.vercel.app/jwt', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        // local storage is not the best place to store jwt token
        localStorage.setItem('geniousToken', data.token)
        navigate(from, {replace: true})
        // console.log(data);
      })
      // jwt token
      form.reset()
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      setError(errorMessage)
    });
  
  }
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
                Login
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
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
                <label className="label">
                  <Link
                    to=""
                    className="label-text-alt underline link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <p className="text-red-700">{error}</p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-error">
                  Login
                </button>
              </div>
            </form>
            <div className="w-2/5 mx-auto text-center">
              <p className="pb-2">Or</p>
              <hr />
              <SocialLogin navigate = {navigate} from = {from}></SocialLogin>
            </div>
            <p className="text-center font-bold py-6">
              New to Genius Car?{" "}
              <Link className="text-red-700 " to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
