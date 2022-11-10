import { createContext, useContext,useEffect,useState} from "react";
import {GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth"
import { auth } from "../firebase"

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
      };

      const nologin = () => signOut(auth);

      useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log({ currentUser });
          setUser(currentUser);
        });;
        return () => unsubuscribe();
      }, [])


      return (
        <authContext.Provider
          value={{        
            loginWithGoogle,
            user,
            nologin
           // resetPassword,
          }}
        >
          {children}
        </authContext.Provider>
      );
    }