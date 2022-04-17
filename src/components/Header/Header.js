import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import "./Header.css";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/Register">Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>sign out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
