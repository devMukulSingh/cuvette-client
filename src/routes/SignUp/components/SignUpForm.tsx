import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signUpSchema } from "../../../lib/schema.ts";
import { Form } from "../../../components/ui/form";
import NameField from "./NameField.tsx";
import PhoneField from "./PhoneField.tsx";
import CompanyName from "./CompanyNameField.tsx";
import CompanyEmailField from "./CompanyEmailField.tsx";
import EmployeeSizeField from "./EmployeeSize.tsx";
import { Button } from "../../../components/ui/button.tsx";

type TformValues = z.infer<typeof signUpSchema>;

export interface Iform {
  form: UseFormReturn<TformValues, any, undefined>;
  isMutating?: boolean;
}

const SignUpForm = () => {
  const form = useForm<TformValues>({
    resolver: zodResolver(signUpSchema),
  });
  const { control, handleSubmit, reset } = form;
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
          <NameField form={form} />
          <PhoneField form={form} />
          <CompanyName form={form} />
          <CompanyEmailField form={form} />
          <EmployeeSizeField form={form} />
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
      <Button>Proceed</Button>
    </form>
  );
};

export default SignUpForm;
