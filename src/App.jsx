import React from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import Main from "./Components/Main/Main";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
const App = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
