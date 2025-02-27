import Sort from './Sort'
import JobCard from './JobCard'
import { useEffect, useState } from 'react';
import { getAllJobs } from '../../Services/JobService';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../../Slices/FilterSlice';
import { resetSort } from '../../Slices/SortSlice';

const Jobs = () => {
  const sort = useSelector((state: any) => state.sort);
  const dispatch = useDispatch();
  const [jobList, setJobList] = useState<any[]>([]);
  const filter = useSelector((state: any) => state.filter);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);

  useEffect(() => {
    dispatch(resetFilter());
    dispatch(resetSort());
    getAllJobs()
      .then((res) => {
        setJobList(res.filter((job: any) => job.jobStatus === 'ACTIVE'));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);
  useEffect(() => {
    if (sort === 'Recent posted') {
      setJobList([...jobList].sort((a:any,b:any)=>new Date(b.postTime).getTime()-new Date(a.postTime).getTime()));
    }
    else if(sort === 'Salary(High - Low)'){
      setJobList([...jobList].sort((a:any,b:any)=>b.packageOffered-a.packageOffered));
    }
    else if(sort === 'Salary(Low - High)'){
      setJobList([...jobList].sort((a:any,b:any)=>a.packageOffered-b.packageOffered));
    }
    else{
      setJobList(jobList);
    }
  }, [sort]);

  useEffect(() => {
    let filtered = jobList;

    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filtered = filtered.filter(
        (job: any) =>
          job.jobTitle &&
          filter["Job Title"].some(
            (title: any) =>
              title && job.jobTitle.toLowerCase().includes(title.toLowerCase())
          )
      );
    }
    if (filter.Location && filter.Location.length > 0) {
      filtered = filtered.filter(
        (job: any) =>
          job.location &&
          filter.Location.some(
            (location: any) =>
              location &&
              job.location.toLowerCase().includes(location.toLowerCase())
          )
      );
    }
    if (filter.Experience && filter.Experience.length > 0) {
      filtered = filtered.filter(
        (job: any) =>
          job.experience &&
          filter.Experience.some(
            (x: any) =>
              job.experience?.toLowerCase().includes(x.toLowerCase())
          )
      );
    }
    if (filter["Job Type"] && filter["Job Type"].length > 0) {
      filtered = filtered.filter(
        (job: any) =>
          job.jobType &&
          filter["Job Type"].some(
            (type: any) =>
              type && job.jobType.toLowerCase().includes(type.toLowerCase())
          )
      );
    }
    if (filter.salary && filter.salary.length > 0) {
      filtered = filtered.filter(
        (job: any) =>
          filter.salary[0] <= job.packageOffered && job.packageOffered <= filter.salary[1]
      );
    }

    setFilteredJobs(filtered);
  }, [filter, jobList]);

  return (
    <div className='p-5'>
      <div className='flex justify-between'>
        <div className='text-2xl font-semibold bs-mx:text-lg'>Recommended Jobs</div>
        <Sort sort="job" />
      </div>
      <div className='flex flex-wrap gap-5 mt-10 justify-center'>
        {filteredJobs.map((job: any, index: any) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;