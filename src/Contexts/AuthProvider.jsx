import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { createContext, useEffect } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    };

    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    };

    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(Auth, googleProvider)
    };

    const userLogOut = () => {
        setLoading(true)
        return signOut(Auth)
    };

    const resetPassword = () => {
        return sendPasswordResetEmail(Auth)
    };

    const updateUser = (userInfo) => {
        return updateProfile(Auth.currentUser,userInfo)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (user) => {
            setUser(user);
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const AuthInfo = { createUser, userLogIn, user, userLogOut, loading, googleSignUp, resetPassword ,updateUser};

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;