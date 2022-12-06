import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    
    if(loading){
        return <h1 className='text-5xl'>Loading...</h1>
    }

    if(user){
        return children;
    }
    // if(!user){
    //     return <Navigate to='/login' state={{from:location}} replace></Navigate>
    // }
    // return children;
    
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;