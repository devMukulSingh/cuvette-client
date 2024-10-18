import VerifyOtpForm from "./components/VerifyOtpForm";

const VerifyOtp = () => {
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
      md:gap-32
      sm:gap-20
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
        <VerifyOtpForm />
      </div>
    </div>
  );
};

export default VerifyOtp;
