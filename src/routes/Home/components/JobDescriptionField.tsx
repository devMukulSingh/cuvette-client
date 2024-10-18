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
        <FormItem className="  flex gap-10  ">
          <FormLabel className="py-2 text-right w-[15rem] whitespace-nowrap   text-lg">
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
