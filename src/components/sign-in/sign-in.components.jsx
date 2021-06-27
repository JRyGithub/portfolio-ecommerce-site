import React, { useState } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.component";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
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
        <CustomButton type="submit"> Sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
