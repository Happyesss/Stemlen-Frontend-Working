import React, { useEffect, useState } from 'react';
import { Button } from "@mantine/core";
import { getProfile } from "../../Services/ProfileServices";
import { Link } from 'react-router-dom';

const SmallCard = ({ applicantId }: { applicantId: string }) => {
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    if (applicantId) {
      getProfile(applicantId).then((res) => {
        setProfile(res);
      }).catch((err) => {
        console.error(err);
      });
    }
  }, [applicantId]);

  return (
    <div className="flex justify-between bg-cape-cod-900 items-center rounded-xl p-2">
      <div className="flex gap-2 items-center">
        <Link to={`/talent-profile/${profile?.id}`} className="p-1 bg-cape-cod-800 rounded-full">
          <img className="h-10 w-10 rounded-full" src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : require(`../../assets/avatar.png`)} alt={profile.name} />
        </Link>
        <div>
          <div className="font-semibold">{profile.name}</div>
          <div className="text-sm text-cape-cod-300">
            {profile.skills?.join(', ')}
          </div>
        </div>
      </div>
      <Button color="blue.4" size="xs" variant="light">Stem</Button>
    </div>
  );
};

export default SmallCard;