import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select.tsx";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form.tsx";
import { Iform } from "./JobPostForm.tsx";

const ExperienceLevelField = ({ form }: Iform) => {
  const experienceLevel = ["Fresher","Experienced"]
  return (
    <FormField
      name="experienceLevel"
      control={form.control}
      render={({ field }) => (
        <FormItem className="gap-10  flex items-center ">
          <FormLabel className="text-right w-[15rem] whitespace-nowrap   text-lg">
            Experience Level
          </FormLabel>
          <Select onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="px-5 h-12">
                <SelectValue  placeholder="Select Experience Level"/>
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {
                experienceLevel.map( (exp,index) => (
                  <SelectItem   value={exp} key={index}>
                      {exp}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ExperienceLevelField;
