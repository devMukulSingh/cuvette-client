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
import useSWRMutation from "swr/mutation";
import axios, { AxiosResponse } from "axios";
import { base_url_server } from "../../../lib/utils";
import toast from "react-hot-toast";
import { IapiResponse } from "../../../lib/types";
import { useAppSelector } from "../../../redux/hooks";
import Cookies from "js-cookie";

type TformValues = z.infer<typeof jobPostSchema>;

interface Iarg extends TformValues {
  id: string;
  token: string;
}

export interface Iform {
  form: UseFormReturn<TformValues, any, undefined>;
  isMutating?: boolean;
}

async function sendRequest(url: string, { arg }: { arg: Iarg }) {
  return await axios.post(url, arg, {
    withCredentials: true,
    headers: {
      Authorization: arg.token,
    },
  });
}

const JobPostForm = () => {
  const token = Cookies.get("token");
  const { userData } = useAppSelector((state) => state);
  const { trigger, isMutating } = useSWRMutation<
    AxiosResponse<IapiResponse>,
    any,
    any,
    Iarg
  >(`${base_url_server}/user/post-job`, sendRequest, {
    onSuccess() {
      toast.success(`Job added`);
      form.reset();
    },
    onError(e) {
      if (e.response.data) toast.error(e.response.data.error);
      else toast.error(`Internal server error`);
      console.log(e);
    },
  });
  const form = useForm<TformValues>({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      candidates: [],
      endDate: undefined,
      experienceLevel: "",
      jobDescription: "",
      jobTitle: "",
    },
  });
  const onSubmit = () => {
    try {
      const formData = form.getValues();
      const candidates = formData.candidates.map((cand) =>
        cand.replace("\n", "")
      );
      if (!userData) return console.error("userData in redux is null");
      if (!token) return console.error("token in cookie is null");

      trigger({
        ...formData,
        candidates,
        id: userData?.id,
        token,
      });
    } catch (e) {
      console.log(e);
    }
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
      <Button
        onClick={onSubmit}
        type="button"
        disabled={isMutating}
        className="self-end w-fit px-10 py-3 h-8 "
      >
        Send
      </Button>
    </form>
  );
};

export default JobPostForm;
