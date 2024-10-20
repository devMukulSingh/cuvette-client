import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { verifyEmailOtpSchema } from "../../../../lib/schema.ts";
import { Form } from "../../../../components/ui/form";
import { Button } from "../../../../components/ui/button.tsx";
import useSWRMutation from "swr/mutation";
import { base_url_server } from "../../../../lib/utils.ts";
import toast from "react-hot-toast";
import { useForm, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input.tsx";
import { CircleCheckBig, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AxiosResponse } from "axios";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks.ts";
import { setUserData } from "../../../../redux/reducer.ts";
import Cookies from "js-cookie";
import { IapiResponse, IuserData } from "@/lib/types.ts";

type TformValues = z.infer<typeof verifyEmailOtpSchema>;

export interface Iform {
  form: UseFormReturn<TformValues, any, undefined>;
  isMutating?: boolean;
}

interface Iarg {
  companyEmail: string;
  emailOtp: number;
}

async function sendRequest(url: string, { arg }: { arg: Iarg }) {
  return await axios.post(url, arg, {
    withCredentials: true,
  });
}

const VerifyEmailOtpForm = () => {
  const { userData } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const { trigger, isMutating } = useSWRMutation<
    AxiosResponse<IapiResponse<IuserData>>,
    any,
    any,
    Iarg
  >(`${base_url_server}/auth/sign-in/verify-otp`, sendRequest, {
    onSuccess({ data: { data } }) {
      form.reset();
      if (data?.token)
        Cookies.set("token", data.token, {
          sameSite: "None",
          secure: true,
          expires: 7,
        });
      dispatch(
        setUserData({
          ...userData,
          isEmailVerified: true,
          token: data?.token,
        }),
      );
      navigate("/");
    },
    onError(e) {
      if (e.response.data) toast.error(e.response.data.error);
      else toast.error(`Internal server error`);
      console.log(e);
    },
  });

  const form = useForm<TformValues>({
    resolver: zodResolver(verifyEmailOtpSchema),
    defaultValues: {
      emailOtp: undefined,
    },
  });
  const onSubmit = async (data: TformValues) => {
    try {
      if (userData)
        await trigger({
          emailOtp: data.emailOtp,
          companyEmail: userData?.companyEmail,
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <Form {...form}>
          <div className="space-y-10">
            <FormField
              disabled={isMutating}
              name="emailOtp"
              control={form.control}
              render={({ field }) => (
                <FormItem className=" w-full">
                  <div className="bg-neutral-100 w-full h-9 items-center flex gap-2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                    <Mail size={20} className="text-neutral-500" />
                    <FormControl>
                      <Input
                        className=" border-none"
                        placeholder="Email Otp"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isMutating}>Verify</Button>
          </div>
        </Form>
      </form>
    </>
  );
};

export default VerifyEmailOtpForm;
