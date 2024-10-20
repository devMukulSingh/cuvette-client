import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import SendMailsForm from "./SendMailsForm";
import { Ijob } from "../../../lib/types";
import { useState } from "react";

type Props = {
  job: Ijob;
};

const SendMailsDialog = ({ job }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="w-fit mt-auto">Send job alerts</Button>
      </DialogTrigger>
      <DialogContent className="space-y-5">
        <DialogHeader>
          <DialogTitle>Send Job alert mail</DialogTitle>
        </DialogHeader>
        <SendMailsForm job={job} setOpen={setOpen}/>
      </DialogContent>
    </Dialog>
  );
};

export default SendMailsDialog;
