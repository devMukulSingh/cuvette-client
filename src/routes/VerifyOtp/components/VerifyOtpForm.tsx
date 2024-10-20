import VerifyEmailOtpForm from "./VerifyEmailOtpForm.tsx";
import VerifyPhoneOtpForm from "./VerifyPhoneOtpForm.tsx";

const VerifyOtpForm = () => {
  return (
    <div
      className="
    flex
    flex-col
    gap-8
    border
    rounded-md
    p-5
    items-center
    md:w-1/2
    w-full
    max-w-[25rem]
    "
    >
      <header>
        <h1 className="text-center text-2xl font-semibold">Sign Up</h1>
        <h1 className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </h1>
      </header>
      <VerifyEmailOtpForm />
      <VerifyPhoneOtpForm />
    </div>
  );
};

export default VerifyOtpForm;
