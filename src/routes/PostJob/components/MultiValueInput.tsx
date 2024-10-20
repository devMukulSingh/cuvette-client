import { KeyboardEvent, useState } from "react";
import { X } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";
import { Textarea } from "../../../components/ui/textarea.tsx";

type Props = {
  field: ControllerRenderProps<
    {
      jobTitle: string;
      jobDescription: string;
      experienceLevel: string;
      candidates: string[];
      endDate: Date;
    },
    "candidates"
  >;
};

const MultiValueInput = ({ field }: Props) => {
  const [currValue, setCurrValue] = useState("");
  function removeValue(val: string) {
    console.log(val);
    const filtered = field.value.filter((multiValue) => multiValue !== val);
    field.onChange(filtered);
  }
  const handleOnKeyup = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      console.log(field.value);
      field.onChange([...field.value, e.currentTarget.value]);
      setCurrValue("");
    }
  };
  return (
    <div className="flex flex-col px-2 pt-2 overflow-x-auto w-full max-w-[765px]  border-2  gap-2 rounded-md bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
      <div className="flex gap-2 items-center">
        {field.value.map((val, index) => {
          if (val === "") return;
          return (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full border p-2 h-8"
            >
              <p>{val}</p>
              <X
                className="cursor-pointer"
                size={18}
                onClick={() => removeValue(val)}
              />
            </div>
          );
        })}
      </div>
      <Textarea
        onKeyUp={handleOnKeyup}
        className="border-none focus:outline-none focus-visible:ring-0 h-full shadow-none max-w-[765px] "
        placeholder="x@gmail.com"
        value={currValue}
        onChange={(e) => setCurrValue(e.target.value)}
      />
    </div>
  );
};

export default MultiValueInput;
