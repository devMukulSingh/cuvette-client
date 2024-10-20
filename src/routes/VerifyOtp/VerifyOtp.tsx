import VerifyOtpForm from "./components/VerifyOtpForm";

const VerifyOtp = () => {
  return (
    <div
      className="
    flex 
    h-[calc(100vh-5rem)] 
    w-full 
    md:p-5
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
      md:gap-32
      gap-10
      items-center
      h-full
      md:justify-normal
      justify-center
      "
      >
        <div className="w-1/2 hidden md:block">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            neque quaerat saepe minima exercitationem est deleniti blanditiis,
            ducimus temporibus corrupti, vitae quod doloribus nulla sunt
          </p>
          incidunt
        </div>
        <VerifyOtpForm />
      </div>
    </div>
  );
};

export default VerifyOtp;
