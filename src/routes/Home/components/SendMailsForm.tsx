import { useForm } from "react-hook-form";
import { sendMailsSchema } from "../../../lib/schema";
import { z } from "zod";
import { IapiResponse, Ijob } from "../../../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import MultiValueInput from "../../../routes/PostJob/components/MultiValueInput";
import useSWRMutation from "swr/mutation";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { base_url_server } from "../../../lib/utils";
import toast from "react-hot-toast";
import { Button } from "../../../components/ui/button";

type Props = {
  job: Ijob;
  setOpen: (open: boolean) => void;
};
type TformValues = z.infer<typeof sendMailsSchema>;

interface Iargs extends TformValues {
  job: Ijob;
}

const token = Cookies.get("token");

async function sendRequest(url: string, { arg }: { arg: Iargs }) {
  return await axios.post(url, arg, {
    withCredentials: true,
    headers: {
      Authorization: token,
    },
  });
}
const SendMailsForm = ({ job, setOpen }: Props) => {
  const { trigger,isMutating } = useSWRMutation<
    AxiosResponse<IapiResponse<{}>>,
    any,
    any,
    Iargs
  >(`${base_url_server}/user/send-mails`, sendRequest, {
    onError(e) {
      console.log(e);
      if (e.status === 400 || e.status === 403)
        toast.error(e.response.data.error);
      else if (e.status === 404) toast.error(e.response.statusText);
      else toast.error("Internal server error");
    },
    onSuccess() {
      setOpen(false);
      toast.success("Mails send succeessfully");
    },
  });
  const form = useForm<TformValues>({
    defaultValues: {
      candidatesEmail: [],
    },
    resolver: zodResolver(sendMailsSchema),
  });
  const onSubmit = (data: TformValues) => {
    trigger({
      job,
      ...data,
    });
  };

  return (
    <form className="flex flex-col gap-5">
      <Form {...form}>
        <FormField
          disabled={isMutating}
          name="candidatesEmail"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Candidates Emails</FormLabel>
              <FormControl>
                <MultiValueInput field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </Form>
      <Button
        disabled={isMutating}
        type="button"
        onClick={form.handleSubmit(onSubmit)}
      >
        Send
      </Button>
    </form>
  );
};

export default SendMailsForm;
