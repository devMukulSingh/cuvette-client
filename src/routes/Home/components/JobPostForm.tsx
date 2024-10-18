import { Form } from "../../../components/ui/form";
import { jobPostSchema } from "../../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import JobTitleField from "./JobTitleField";
import JobDescriptionField from "./JobDescriptionField";
import ExperienceLevelField from "./ExperienceLevelField";
import AddCandidateField from "./AddCandidateField";
import EndDateField from "./EndDateField";
import { Button } from "../../../components/ui/button";

type TformValues = z.infer<typeof jobPostSchema>;

export interface Iform {
  form: UseFormReturn<TformValues, any, undefined>;
  isMutating?: boolean;
}

const JobPostForm = () => {
  const form = useForm<TformValues>({
    resolver: zodResolver(jobPostSchema),
  });
  const onSubmit = (data: TformValues) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="
      h-full
    flex
    flex-col
    gap-4
    sm:w-[50rem]
    w-full
    p-5
    
    "
    >
      <Form {...form}>
        <JobTitleField form={form} />
        <JobDescriptionField form={form} />
        <ExperienceLevelField form={form} />
        <AddCandidateField form={form} />
        <EndDateField form={form} />
      </Form>
      <Button className="self-end w-fit px-10 py-3 h-8 ">
        Send
      </Button>
    </form>
  );
};

export default JobPostForm;
