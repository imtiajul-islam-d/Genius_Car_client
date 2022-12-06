import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // google login
    const logInGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password )
    }
    // sign out
    const logOut = () => {
        localStorage.removeItem('geniousToken')
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
            setLoading(false)
            // console.log(currentUser);
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        loading,
        user,
        createUser,
        logInGoogle,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;