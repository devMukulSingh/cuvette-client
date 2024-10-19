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
        <FormItem className="  flex gap-10 items-center ">
          <FormLabel className="w-[15rem] text-right  whitespace-nowrap   text-lg">
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
