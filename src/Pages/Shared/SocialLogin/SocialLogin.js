import React, { useContext } from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SocialLogin = ({navigate, from}) => {
    const {logInGoogle} = useContext(AuthContext)
    const handleOnClickGoogle = () => {
        logInGoogle()
        .then(result => {
            const user = result.user;
            console.log(user)
            // get jwt token
            const currentUser = {
                email: user.email
            }
            fetch('https://genious-car-server-mocha.vercel.app/jwt', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("geniousToken", data.token)
                navigate(from, {replace: true})
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
  return (
    <div>
      <p className="text-center">
        <button onClick={handleOnClickGoogle} className="btn btn-ghost text-red-500"><FaGoogle></FaGoogle></button>
        <button className="btn btn-ghost text-blue-700"><FaFacebook></FaFacebook></button>
      </p>
    </div>
  );
};

export default SocialLogin;
