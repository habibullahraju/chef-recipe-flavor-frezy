import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
const auth = getAuth(app);


export const AuthContext = createContext(null);





const authProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const handleRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const handleLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOutUser =()=>{
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

   
    const authInfo = {
        user,
        handleRegister,
        handleLogin,
        logOutUser
     
    }

   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default authProvider;