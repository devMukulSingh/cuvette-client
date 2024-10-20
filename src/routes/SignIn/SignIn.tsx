import SignInForm from "./components/SignInForm";

const SignIn = () => {
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
      lg:w-5/6
      md:w-[90%]
      w-full
      flex
      md:gap-32
      sm:gap-10
      items-center
      h-full
      md:justify-normal
      justify-center
      "
      >
        <div className="w-1/2 md:block hidden">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            neque quaerat saepe minima exercitationem est deleniti blanditiis,
            ducimus temporibus corrupti, vitae quod doloribus nulla sunt
          </p>
          incidunt
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
