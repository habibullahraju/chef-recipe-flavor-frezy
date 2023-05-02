import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useLocation } from 'react-router-dom';
const auth = getAuth(app);


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();




const authProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);


    const handleRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const handleLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOutUser =()=>{
        return signOut(auth);
    }
    const GoogleSignIn = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const githubSignIn = ()=>{
        return signInWithPopup(auth,githubProvider)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

   
    const authInfo = {
        user,
        handleRegister,
        handleLogin,
        logOutUser,
        loading,
        GoogleSignIn,
        githubSignIn
     
    }

   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default authProvider;