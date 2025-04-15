import { useEffect, useState } from "react";
import HackathonCard from "./HackathonCard";
import { getAllHackathons } from "../../Services/HackathonService";
import { useParams } from "react-router-dom";

const RecommendedHacka = () => {
  const { id } = useParams();
  const [hackathonList, setHackathonList] = useState<any[]>([]);

  // Helper to shuffle an array
  const shuffleArray = (array: any[]) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  useEffect(() => {
    getAllHackathons()
      .then((res) => {
        const filtered = res.filter((hackathon: any) => hackathon.id !== Number(id));
        const shuffled = shuffleArray(filtered);
        setHackathonList(shuffled.slice(0, 5)); // only keep top 5 after shuffle
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4">
      <div className="text-xl font-semibold mb-5">Recommended Hackathons</div>
      <div className="flex flex-col flex-wrap gap-5">
        {hackathonList.map((hackathon) => (
          <HackathonCard key={hackathon.id} {...hackathon} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedHacka;