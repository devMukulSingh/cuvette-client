import { Textarea } from "../../../components/ui/textarea.tsx";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form.tsx";
import { Iform } from "./JobPostForm.tsx";

const JobDescriptionField = ({ form }: Iform) => {
  return (
    <FormField
      name="jobDescription"
      control={form.control}
      render={({ field }) => (
        <FormItem className="  flex sm:flex-row flex-col  items-start sm:gap-10 sm:items-center   ">
          <FormLabel className="py-2 sm:text-right w-[15rem]   text-md sm:text-lg">
            Job Description
          </FormLabel>
          <FormControl>
            <Textarea
              rows={10}
              className="px-5   "
              placeholder="Enter Job Description"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default JobDescriptionField;
