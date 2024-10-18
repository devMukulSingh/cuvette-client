import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form.tsx";
import { Input } from "../../../components/ui/input.tsx";
import { Iform } from "./JobPostForm.tsx";

const AddCandidateField = ({ form }: Iform) => {
  return (
    <FormField
      name="candidates"
      control={form.control}
      render={({ field }) => (
        <FormItem className="  flex gap-10 items-center ">
          <FormLabel className="w-[15rem] text-right  whitespace-nowrap   text-lg">
            Add Candidate
          </FormLabel>
          <FormControl>
            <Input
              className="px-5 h-12 items-center flex gap-2 rounded-md !border-black !border-inherit bg-transparent  py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring "
              placeholder="x@gmail.com"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AddCandidateField;
