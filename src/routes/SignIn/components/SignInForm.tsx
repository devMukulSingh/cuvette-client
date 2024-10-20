import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signInSchema } from "../../../lib/schema.ts";
import { Form } from "../../../components/ui/form.tsx";
import CompanyEmailField from "./CompanyEmailField.tsx";
import { Button } from "../../../components/ui/button.tsx";
import { base_url_server } from "../../../lib/utils.ts";
import useSWRMutation from "swr/mutation";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { IapiResponse, IuserData } from "../../../lib/types.ts";
import { setUserData } from "../../../redux/reducer.ts";
import { useAppDispatch } from "../../../redux/hooks.ts";

type TformValues = z.infer<typeof signInSchema>;

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
    AxiosResponse<IapiResponse<IuserData>>,
    any,
    any,
    TformValues
  >(`${base_url_server}/auth/sign-in/send-otp`, sendRequest, {
    onSuccess({ data: { data }, status }) {
      dispatch(setUserData(data));
      toast.success("Otp send");
      navigate("/sign-in/verify-otp");
    },
    onError(e) {
      if (e.response.data) toast.error(e.response.data.error);
      else toast.error(`Internal server error`);
      console.log(e);
    },
  });
  const form = useForm<TformValues>({
    resolver: zodResolver(signInSchema),
  });
  const { handleSubmit } = form;
  const onSubmit = async (data: TformValues) => {
    try {
      await trigger(data);
    } catch (e) {
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
    w-1/2
    max-w-[25rem]
    "
    >
      <header>
        <h1 className="text-center text-2xl font-semibold">Sign In</h1>
        <h1 className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </h1>
      </header>
      <Form {...form}>
        <div className="space-y-5 w-full">
          <CompanyEmailField form={form} isMutating={isMutating} />
        </div>
      </Form>
      <div className="text-xs">
        <p className="text-center">
          By clicking on proceed, you will accept our
        </p>
        <p className="text-center">
          <span className="text-blue-500 font-medium">Terms</span> &&nbsp;
          <span className="text-blue-500 font-medium">Conditions</span>
        </p>
      </div>
      <footer className="space-y-3">
        <Link className="text-sm text-neutral-500" to={"/sign-up"}>Don't have an account ? Sign Up</Link>
        <Button disabled={isMutating} className="h-8">
          Proceed
        </Button>
      </footer>
    </form>
  );
};

export default SignInForm;
