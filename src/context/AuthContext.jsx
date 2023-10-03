import {createContext, useState, useContext, useEffect} from  "react"

import { auth } from '../Firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";

//CREATING THE CONTEXT
const AuthContext = createContext();

//PROVIDER CONTEXT
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setloading] = useState(true)

    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
      }


      //log out
    const logOut = ( ) => signOut(auth)

    const value = {
        currentUser,
        setCurrentUser,
        signInWithGoogle,
        logOut
    }

    //SET CURRENT USER

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user)
            setloading(false)
        })

        return unsubscribe
    }, [])

    
    

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
        
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext)
}