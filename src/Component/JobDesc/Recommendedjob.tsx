import { useParams } from "react-router-dom";
import JobCard from "../FindJobs/JobCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/JobService";
import AtsChecker from "./AtsChecker";

const Recommendedjob = () => {
  const { id } = useParams(); 
  const [jobList, setJobList] = useState<any>(null);

  useEffect(() => {
    getAllJobs()
      .then((res) => {
        setJobList(res);
      })
      .catch((error) => {
        console.log("Error fetching jobs:", error);
      });
  }, []);

  return (
    <div className="w-full lg:w-1/4">
      <AtsChecker jobId={id || ''} />
      <div className="text-xl font-semibold my-5 ">Recommended Jobs</div>
      <div className="flex flex-wrap lg:flex-col gap-5 bs-mx:justify-center">
        {jobList
          ?.filter((job: any) => String(job.id) !== String(id))
          .slice(0, 5)
          .map((job: any, index: number) => (
            <JobCard key={job.id || index} {...job} />
          ))}
      </div>
    </div>
  );
};

export default Recommendedjob;
