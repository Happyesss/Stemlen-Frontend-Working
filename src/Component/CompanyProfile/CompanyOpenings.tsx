import { jobList } from "../../assets/Data/JobsData"
import JobCard from "../FindJobs/JobCard"

const CompanyOpenings = () => {
  return (
    <div className="flex mt-10 flex-wrap gap-3 ml-5">
        {
            jobList.map((job, index)=> <JobCard key={index} {...job}/>)
        }
    </div>
  )
}

export default CompanyOpenings