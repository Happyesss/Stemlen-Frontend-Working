import React, { useEffect, useState } from 'react';
import SmallCard from '../FindTalent/SmallCard';
import { getAllProfiles } from '../../Services/ProfileServices';
import { useSelector } from 'react-redux';

const SmallCardRecommend = () => {
  const [profiles, setProfiles] = useState<any[]>([]);
  const currentUserId = useSelector((state: any) => state.user.id); // Assuming user ID is stored in Redux

  useEffect(() => {
    getAllProfiles()
      .then((res) => {
        // Filter out the current user's profile
        const filteredProfiles = res.filter((profile: any) => profile.id !== currentUserId);
        setProfiles(filteredProfiles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentUserId]);

  return (
    <div className="w-full lg:w-1/4">
      <div className="text-xl font-semibold mb-5">Recommended Profiles</div>
      <div className="flex flex-wrap lg:flex-col gap-5">
        {profiles.slice(0, 5).map((profile: any, index: number) => (
          <SmallCard key={profile.id || index} applicantId={profile.id} />
        ))}
      </div>
    </div>
  );
};

export default SmallCardRecommend;
