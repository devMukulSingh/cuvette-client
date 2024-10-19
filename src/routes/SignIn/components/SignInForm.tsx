import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signUpSchema } from "../../../lib/schema.ts";
import { Form } from "../../../components/ui/form.tsx";
import NameField from "./NameField.tsx";
import PhoneField from "./PhoneField.tsx";
import CompanyName from "./CompanyNameField.tsx";
import CompanyEmailField from "./CompanyEmailField.tsx";
import EmployeeSizeField from "./EmployeeSize.tsx";
import { Button } from "../../../components/ui/button.tsx";
import { base_url_server } from "../../../lib/utils.ts";
import useSWRMutation from "swr/mutation";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { useSWRConfig } from "swr/_internal";
import { IapiResponse } from "@/lib/types.ts";
import { setUserData } from "../../../redux/reducer.ts";
import { useAppDispatch } from "../../../redux/hooks.ts";

type TformValues = z.infer<typeof signUpSchema>;

async function sendRequest(url: string, { arg }: { arg: TformValues }) {
  return await axios.post(url, arg, {
    withCredentials: true,
  });
}

export interface Iform {
  form: UseFormReturn<TformValues, any, undefined>;
  isMutating: boolean;
}
const SignInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { trigger, isMutating } = useSWRMutation<
    AxiosResponse<IapiResponse>,
    any,
    any,
    TformValues
  >(`${base_url_server}/auth/sign-up/send-otp`, sendRequest, {
    onSuccess(data) {
      dispatch(setUserData(data.data.data));
      if (data.status === 200) {
        toast.success("user already exists");
        navigate("/");
      } else {
        navigate("/sign-up/verify-otp");
      }
    },
    onError(e) {
      if (e) toast.error(e);
      else toast.error(`Internal server error`);
      console.log(e);
    },
  });
  const form = useForm<TformValues>({
    resolver: zodResolver(signUpSchema),
  });
  const { handleSubmit } = form;
  const onSubmit = async (data: TformValues) => {
    try {
      await trigger(data);
    } catch (e) {
      toast.error(`Something went wrong please try again later`);
      console.log(e);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
    flex
    flex-col
    gap-8
    border
    rounded-md
    p-5
    items-center
    min-h-[32rem]
    w-1/2
    max-w-[25rem]
    "
    >
      <header>
        <h1 className="text-center text-2xl font-semibold">Sign Up</h1>
        <h1 className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </h1>
      </header>
      <Form {...form}>
        <div className="space-y-5 w-full">
          <NameField form={form} isMutating={isMutating} />
          <PhoneField form={form} isMutating={isMutating} />
          <CompanyName form={form} isMutating={isMutating} />
          <CompanyEmailField form={form} isMutating={isMutating} />
          <EmployeeSizeField form={form} isMutating={isMutating} />
        </div>
      </Form>
      <footer className="text-xs">
        <p className="text-center">
          By clicking on proceed, you will accept our
        </p>
        <p className="text-center">
          <span className="text-blue-500 font-medium">Terms</span> &&nbsp;
          <span className="text-blue-500 font-medium">Conditions</span>
        </p>
      </footer>
      <Button disabled={isMutating} className="h-8">
        Proceed
      </Button>
    </form>
  );
};

export default SignInForm;
