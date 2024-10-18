import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../../components/ui/popover.tsx";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form.tsx";
import { Button } from "../../../components/ui/button.tsx";

import { Iform } from "./JobPostForm.tsx";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../../components/ui/calendar.tsx";
import { cn } from "../../../lib/utils.ts";

const EndDateField = ({ form }: Iform) => {
  return (
    <FormField
      name="endDate"
      control={form.control}
      render={({ field }) => (
        <FormItem className="  flex gap-10 items-center ">
          <FormLabel className="w-[15rem] text-right whitespace-nowrap  text-lg">
            End Date
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full px-5 h-12 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default EndDateField;
