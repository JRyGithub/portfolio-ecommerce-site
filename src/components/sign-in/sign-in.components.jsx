import React, { useState } from "react";

import { auth, signInWithGoogleMethod } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email,password);
      setEmail("");
      setPassword("");
    }catch (error){
      console.log(error);
    }
    
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          handleChange={handleChange}
          required
          type="email"
          label="Email"
        />
        <FormInput
          name="password"
          value={password}
          required
          type="password"
          handleChange={handleChange}
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogleMethod} isGoogleSignIn>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
