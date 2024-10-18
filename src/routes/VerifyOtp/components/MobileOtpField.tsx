import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form.tsx";
import { Input } from "../../../components/ui/input.tsx";
import { Phone,  } from "lucide-react";
import { Iform } from "./VerifyOtpForm.tsx";

const MobileOtpField = ({ form }: Iform) => {
  return (
    <FormField
      name="mobileOtp"
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
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MobileOtpField;
