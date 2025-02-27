import { useEffect, useState } from "react";
import HackaSort from "./HackaSort";
import HackathonCard from "./HackathonCard";
import { getAllHackathons } from "../../Services/HackathonService";

const Hackathon = () => {
  const [hackathonList, setHackathonList] = useState<any[]>([]);

  useEffect(() => {
    getAllHackathons()
      .then((res) => {
        setHackathonList(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='p-5'>
      <div className='flex justify-between'>
        <div className='text-2xl font-semibold'>Hackathons</div>
        <HackaSort />
      </div>
      <div className='flex flex-wrap gap-5 mt-10 justify-center'>
        {hackathonList.map((hackathon: any, index: any) => (
          <HackathonCard key={index} {...hackathon} />
        ))}
      </div>
    </div>
  );
};

export default Hackathon;