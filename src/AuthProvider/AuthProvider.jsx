import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const Update = (displayName, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: url,
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Inside of OnauthStateChange", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    user,
    createUser,
    signInWithEmail,
    logout,
    Update,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
