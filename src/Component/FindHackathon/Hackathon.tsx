import { useEffect, useState } from "react";
import HackaSort from "./HackaSort";
import HackathonCard from "./HackathonCard";
import { getAllHackathons } from "../../Services/HackathonService";
import { sortHackathonsByDaysLeft } from "./HackathonCard";
import { Divider, Loader, Title } from "@mantine/core"; // Import additional components
import { calculateDaysLeft } from "../../Services/Utilities"; // Import calculateDaysLeft

const Hackathon = () => {
  const [hackathonList, setHackathonList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [upcomingHackathons, setUpcomingHackathons] = useState<any[]>([]);
  const [pastHackathons, setPastHackathons] = useState<any[]>([]);
  useEffect(() => {
    getAllHackathons()
      .then((res) => {
        setHackathonList(res);
        
        // Separate upcoming and past hackathons
        const upcoming: any[] = [];
        const past: any[] = [];
        
        res.forEach((hackathon: any) => {
          const daysLeft = calculateDaysLeft(hackathon.eventDate);
          if (daysLeft >= 0) {
            upcoming.push(hackathon);
          } else {
            past.push(hackathon);
          }
        });
        
        // Sort upcoming hackathons by days left (ascending)
        setUpcomingHackathons(upcoming.sort((a, b) => 
          calculateDaysLeft(a.eventDate) - calculateDaysLeft(b.eventDate)
        ));
        
        // Sort past hackathons by how recently they ended (most recent first)
        setPastHackathons(past.sort((a, b) => 
          calculateDaysLeft(b.eventDate) - calculateDaysLeft(a.eventDate)
        ));
        
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
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader size="lg" color="blue" variant="dots" />
        </div>
      ) : (
        <>
          {/* Upcoming Hackathons */}
          <div className="mt-5">
            <Title order={3} className="mb-4">Upcoming Hackathons</Title>
            {upcomingHackathons.length > 0 ? (
              <div className='flex flex-wrap gap-5 justify-center'>
                {upcomingHackathons.map((hackathon: any, index: any) => (
                  <HackathonCard key={`upcoming-${index}`} {...hackathon} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">No upcoming hackathons available</div>
            )}
          </div>
          
          {/* Divider between upcoming and past hackathons */}
          {pastHackathons.length > 0 && (
            <>
              <Divider my="xl" size="md" label="Past Hackathons" labelPosition="center" />
              
              {/* Past Hackathons */}
              <div className='flex flex-wrap gap-5 justify-center'>
                {pastHackathons.map((hackathon: any, index: any) => (
                  <HackathonCard key={`past-${index}`} {...hackathon} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Hackathon;