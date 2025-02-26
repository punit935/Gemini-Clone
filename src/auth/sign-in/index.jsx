import { SignIn } from "@clerk/clerk-react";
import React from "react";
import "./index.css";
function SignInPage() {
  return (
    <div className="signIn">
      <SignIn />
    </div>
  );
}

export default SignInPage;
