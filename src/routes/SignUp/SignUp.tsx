import React from "react";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  return (
    <div
      className="
    flex 
    h-[calc(100vh-5rem)] 
    w-full 
    p-5
    sm:gap-10
    items-center
    justify-center
    "
    >
      <div
        className="
      md:w-5/6
      w-full
      flex
      gap-10
      items-center
      h-full
      "
      >
        <div className="w-1/2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            neque quaerat saepe minima exercitationem est deleniti blanditiis,
            ducimus temporibus corrupti, vitae quod doloribus nulla sunt
          </p>
            incidunt
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
