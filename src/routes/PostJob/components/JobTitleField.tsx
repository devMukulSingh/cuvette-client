import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form.tsx";
import { Input } from "../../../components/ui/input.tsx";
import { Iform } from "./JobPostForm.tsx";

const JobTitleField = ({ form }: Iform) => {
  return (
    <FormField
      name="jobTitle"
      control={form.control}
      render={({ field }) => (
        <FormItem className="  flex sm:flex-row flex-col items-start sm:gap-10 sm:items-center ">
          <FormLabel
            className="
          w-[15rem]
          sm:text-right
         text-md sm:text-lg"
          >
            Job Title
          </FormLabel>
          <FormControl>
            <Input
              className="h-12 items-center flex gap-2 rounded-md !border-black !border-inherit bg-transparent px-5 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring "
              placeholder="Enter Job Title"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default JobTitleField;
