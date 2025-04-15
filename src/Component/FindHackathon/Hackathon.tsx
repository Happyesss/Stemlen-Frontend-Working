import { useEffect, useState } from "react";
import HackaSort from "./HackaSort";
import HackathonCard from "./HackathonCard";
import { getAllHackathons } from "../../Services/HackathonService";
import { sortHackathonsByDaysLeft } from "./HackathonCard";
import { Loader } from "@mantine/core"; // Import a loader component

const Hackathon = () => {
  const [hackathonList, setHackathonList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    getAllHackathons()
      .then((res) => {
        setHackathonList(res);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Ensure loading stops even if there's an error
      });
  }, []);

  return (
    <div className='p-5'>
      <div className='flex justify-between'>
        <div className='text-2xl font-semibold'>Hackathons</div>
        <HackaSort />
      </div>
      <div className='flex flex-wrap gap-5 mt-10 justify-center'>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader size="lg" color="blue" variant="dots" /> {/* Attractive loader */}
          </div>
        ) : (
          sortHackathonsByDaysLeft(hackathonList).map((hackathon: any, index: any) => (
            <HackathonCard key={index} {...hackathon} />
          ))
        )}
      </div>
    </div>
  );
};

export default Hackathon;