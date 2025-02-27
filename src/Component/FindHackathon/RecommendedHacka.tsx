import { useEffect, useState } from "react";
import HackathonCard from "./HackathonCard";
import { getAllHackathons } from "../../Services/HackathonService";
import { useParams } from "react-router-dom";

const RecommendedHacka = () => {
  const { id } = useParams();
  const [hackathonList, setHackathonList] = useState<any[]>([]);

  useEffect(() => {
    getAllHackathons()
      .then((res) => setHackathonList(res))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4">
      <div className="text-xl font-semibold mb-5">Recommended Hackathons</div>
      <div className="flex flex-col flex-wrap gap-5">
        {hackathonList
          .filter((hackathon) => hackathon.id !== Number(id)) 
          .slice(0, 5)
          .map((hackathon) => (
            <HackathonCard key={hackathon.id} {...hackathon} />
          ))}
      </div>
    </div>
  );
};

export default RecommendedHacka;
