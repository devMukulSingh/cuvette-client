import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form.tsx";
import { Input } from "../../../components/ui/input.tsx";
import { Iform } from "./SignUpForm.tsx";
import  { Mail,  } from "lucide-react";


const CompanyEmailField = ({ form, isMutating }: Iform) => {
  return (
    <FormField
      disabled={isMutating}
      name="companyEmail"
      control={form.control}
      render={({ field }) => (
        <FormItem className=" w-full">
          <div className="bg-neutral-100 w-full h-9 items-center flex gap-2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
            <Mail className="text-neutral-500" />
            <FormControl>
              <Input
                className=" border-none"
                placeholder="Company Email"
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CompanyEmailField