import { useEffect, useState } from "react"
import Sort from "../FindJobs/Sort"
import TalentCard from "./TalentCard"
import { getAllProfiles } from "../../Services/ProfileServices"
import { useDispatch, useSelector } from "react-redux"
import { resetFilter } from "../../Slices/FilterSlice"

const Talents = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: any) => state.sort);
  const [talents, setTalents] = useState<any>([])
  const filter = useSelector((state:any) => state.filter)
  const [filteredTalents, setFilteredTalents] = useState<any>([])
  useEffect(() => {
    dispatch(resetFilter())
    getAllProfiles().then((res) => {
      setTalents(res)
    }).catch((error) => { 
      console.log(error)
    })
  }, [])
  useEffect(() => {
    
    if(sort === 'Experience(High - Low)'){
      setTalents([...talents].sort((a:any,b:any)=>b.totalExp-a.totalExp));
    }
    else if(sort === 'Experience(Low - High)'){
      setTalents([...talents].sort((a:any,b:any)=>a.totalExp-b.totalExp));
    }
    else{
      setTalents(talents);
    }
  }, [sort]);
  useEffect(() => {
    let filtered = talents;
    setFilteredTalents(talents);
  
    if (filter.name) {
      filtered = filtered.filter(
        (talent: any) => talent.name && talent.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    }
  
    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filtered = filtered.filter(
        (talent: any) =>
          talent.jobTitle &&
          filter["Job Title"].some(
            (title: any) => title && talent.jobTitle.toLowerCase().includes(title.toLowerCase())
          )
      );
    }
    if (filter.Location && filter.Location.length > 0) {
      filtered = filtered.filter(
        (talent: any) =>
          talent.location &&
          filter.Location?.some(
            (location: any) =>
              location && 
              talent.location.toLowerCase().includes(location.toLowerCase())
          )
      );
    }
    if (filter.Skills && filter.Skills.length > 0) {
      filtered = filtered.filter(
        (talent: any) =>
          filter.Skills?.some(
            (skill: any) =>
              talent.skills?.some((talentSkill: any) => talentSkill.toLowerCase().includes(skill.toLowerCase()))
          )
      );
    }
    if (filter.exp && filter.exp.length > 0) {
      filtered = filtered.filter(
        (talent: any) =>
          filter.exp[0] <= talent.totalExp && talent.totalExp <= filter.exp[1]);
    }

    
    setFilteredTalents(filtered);
  }, [filter, talents]);
  
  return (
    <div className='p-5'>
      <div className='flex justify-between'>
        <div className='text-2xl font-semibold' >Talents</div>
        <Sort />
      </div>
      <div className='flex flex-wrap gap-5 mt-10 justify-center'>
        {
          filteredTalents?.length?filteredTalents.map((talent:any, index:any) => <TalentCard key={index} {...talent} />):
          <div className="text-xl font-semibold items-center">No Candidates Found</div>
        }
      </div>
    </div>
  )
}

export default Talents