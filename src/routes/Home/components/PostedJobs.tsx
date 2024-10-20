import axios, { AxiosResponse } from "axios";
import { base_url_server, fetcher } from "../../../lib/utils";
import { useAppSelector } from "../../../redux/hooks";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import useSWR from "swr";
import { IapiResponse, Ijob } from "@/lib/types";
import SingleJob from "./SingleJob";

const PostedJobs = () => {
  const { userData } = useAppSelector((state) => state);
  const token = Cookies.get("token");

  const { data, isLoading } = useSWR<IapiResponse<Ijob[]>>(
    { url: `${base_url_server}/user/get-jobs?id=${userData?.id}`, args: token },
    fetcher,
    {
      onError(e) {
        console.log(e);
        if (e.response.data) toast.error(e.response.data.error);
        else toast.error(`Internal server error`);
      },
    },
  );
  console.log(data);

  return (
    <div className="flex flex-col h-full w-full">
      {data?.data?.map((job: Ijob, index: number) => (
        <SingleJob job={job} key={index} />
      ))}
    </div>
  );
};

export default PostedJobs;
