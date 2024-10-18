import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { verifyOtpSchema } from "../../../lib/schema.ts";
import { Form } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button.tsx";
import EmailOtpField from "./EmailOtpField.tsx";
import MobileOtpField from "./MobileOtpField.tsx";

type TformValues = z.infer<typeof verifyOtpSchema>;

export interface Iform {
  form: UseFormReturn<TformValues, any, undefined>;
  isMutating?: boolean;
}

const VerifyOtpForm = () => {
  const form = useForm<TformValues>({
    resolver: zodResolver(verifyOtpSchema),
  });
  const { handleSubmit } = form;
  const onSubmit = (data: TformValues) => {
    console.log(data);
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
        <h1 className="text-center text-2xl font-semibold">Sign Up</h1>
        <h1 className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </h1>
      </header>
      <Form {...form}>
        <div className="space-y-5 w-full">
          <div className="space-y-2">
            <EmailOtpField form={form} />
            <Button>Verify</Button>
          </div>
          <div className="space-y-2">
            <MobileOtpField form={form} />
            <Button>Verify</Button>
          </div>
        </div>
      </Form>
    </form>
  );
};

export default VerifyOtpForm;
