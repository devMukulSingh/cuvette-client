import { Ijob } from "../../../lib/types";
import { format } from "date-fns";
import SendMailsDialog from "./SendMailsDialog";

type Props = {
  job: Ijob;
};

const SingleJob = ({ job }: Props) => {
  return (
    <div className="flex  gap-2 justify-between border  rounded-md p-3 shadow-md">
      <div className="flex flex-col gap-2">
        <h6 className="text-2xl font-medium">{job.jobTitle}</h6>
        <p className="text-sm">{job.jobDescription}</p>
        <p>Experience level :{job.experienceLevel}</p>
        <p>End date: {format(job.endDate, "dd/MM/yyyy")}</p>
      </div>
      <SendMailsDialog job={job}/>
    </div>
  );
};

export default SingleJob;
