import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form.tsx";
import { Iform } from "./JobPostForm.tsx";
import MultiValueInput from "./MultiValueInput.tsx";

const AddCandidateField = ({ form }: Iform) => {
  return (
    <FormField
      name="candidates"
      control={form.control}
      render={({ field }) => (
        <FormItem className="  flex sm:flex-row flex-col items-start sm:gap-10 sm:items-center ">
          <FormLabel className="w-[15rem] sm:text-right  text-md sm:text-lg">
            Add Candidate
          </FormLabel>
          <FormControl>
            <MultiValueInput field={field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AddCandidateField;
