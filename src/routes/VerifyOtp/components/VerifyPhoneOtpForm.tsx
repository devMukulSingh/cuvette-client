import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { verifyPhoneOtpSchema } from "../../../lib/schema.ts";
import { Form } from "../../../components/ui/form.tsx";
import { Button } from "../../../components/ui/button.tsx";
import useSWRMutation from "swr/mutation";
import { base_url_server } from "../../../lib/utils.ts";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form.tsx";
import { Input } from "../../../components/ui/input.tsx";
import { CircleCheckBig, Phone } from "lucide-react";
import { IapiResponse } from "../../../lib/types.ts";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AxiosResponse } from "axios";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks.ts";
import { setUserData } from "../../../redux/reducer.ts";
import Cookies from "js-cookie";

type TformValues = z.infer<typeof verifyPhoneOtpSchema>;

interface Iarg {
  phone: string;
  phoneOtp: number;
}

async function sendRequest(url: string, { arg }: { arg: Iarg }) {
  return await axios.post(url, arg, {
    withCredentials: true,
  });
}

const VerifyPhoneOtpForm = () => {
  const { userData } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { trigger, isMutating } = useSWRMutation(
    `${base_url_server}/auth/sign-up/verify-phoneotp`,
    sendRequest,
    {
      onSuccess(data: AxiosResponse<IapiResponse>) {
        form.reset();
        dispatch(
          setUserData({
            ...userData,
            isPhoneVerified: true,
            token: data?.data.data.token || "",
          }),
        );
        if (data.data.data && data.data.data.token !== "") {
          Cookies.set("token", data.data.data.token, {
            sameSite: "None",
            secure: true,
            expires: 7,
          });
          navigate("/");
        }
      },
      onError(e: any) {
        if (e) toast.error(e);
        else toast.error(`Internal server error`);
        console.log(e);
      },
    },
  );

  const form = useForm<TformValues>({
    resolver: zodResolver(verifyPhoneOtpSchema),
  });
  const onSubmit = async (data: TformValues) => {
    try {
      if (!userData) return console.error(`userData not found`);
      await trigger({
        ...data,
        phone: userData.phone,
      });
    } catch (e) {
      toast.error(`Something went wrong`);
      console.log(e);
    }
  };
  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <Form {...form}>
          <div className="space-y-2">
            <FormField
              disabled={userData?.isPhoneVerified || isMutating}
              name="phoneOtp"
              control={form.control}
              render={({ field }) => (
                <FormItem className=" w-full">
                  <div className="bg-neutral-100 w-full h-9 items-center flex gap-2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                    <Phone size={20} className="text-neutral-500" />
                    <FormControl>
                      <Input
                        className=" border-none"
                        placeholder="Mobile Otp"
                        {...field}
                      />
                    </FormControl>
                    {userData && userData.isPhoneVerified && (
                      <CircleCheckBig color="green" />
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isMutating || userData?.isPhoneVerified}>
              Verify
            </Button>
          </div>
        </Form>
      </form>
    </>
  );
};

export default VerifyPhoneOtpForm;
