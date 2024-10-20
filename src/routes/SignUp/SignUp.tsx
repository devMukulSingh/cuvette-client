import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  return (
    <div
      className="
    flex 
    h-[calc(100vh-5rem)] 
    w-full 
    sm:p-5
    p-3
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
      lg:gap-32
      gap-10
      items-center
          md:justify-normal
    justify-center
      h-full
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
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
