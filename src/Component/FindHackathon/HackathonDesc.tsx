import { ActionIcon, Divider } from "@mantine/core";
import { card } from "../../assets/Data/HackaDescData";
import { IconListCheck } from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHackathon } from "../../Services/HackathonService";
//@ts-ignore
import DOMPurify from "dompurify"; // Prevents any XSS attack
import { useTheme } from "../../ThemeContext";

const HackathonDesc = () => {
  const { id } = useParams();
  const [hackathon, setHackathon] = useState<any>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
    getHackathon(id)
      .then((data: any) => setHackathon(data))
      .catch((error: any) => console.error(error));
  }, [id]);

  if (!hackathon) {
    return <div>Loading...</div>;
  }

  const desc = DOMPurify.sanitize(hackathon.description); // ✅ Ensure sanitization

  return (
    <div className={`w-2/3 bs-mx:w-full ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : ' text-black'}`}>
      <div className="relative">
        <img
          className="rounded-t-2xl w-full h-64 object-cover sm-mx:h-48 xs-mx:h-40"
          src={`data:image/jpeg;base64,${hackathon.bannerImage}`}
          alt="Hackathon Banner"
        />
        <img
          className={`w-20 h-20 rounded-3xl -bottom-1/4 absolute left-5 border-8 ${isDarkMode ? 'border-cape-cod-950 bg-cape-cod-950' : 'border-white bg-white'} sm-mx:w-16 sm-mx:h-16 xs-mx:w-12 xs-mx:h-12`}
          src={`data:image/jpeg;base64,${hackathon.iconImage}`}
          alt="Hackathon Logo"
        />
      </div>
      <div className="flex justify-between mt-20 ml-2 sm-mx:flex-wrap sm-mx:items-center sm-mx:mt-10">
        <div className="flex gap-2 items-center sm-mx:flex-col sm-mx:gap-1">
          <div>
            <div className="font-semibold text-2xl sm-mx:text-xl xs-mx:text-lg">{hackathon.title}</div>
            <div className={`text-lg ${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'} sm-mx:text-base xs-mx:text-sm`}>
              {hackathon.organizer} &bull; {hackathon.eventDate} &bull; {hackathon.participants} Participants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center sm-mx:mt-4">
          <button
            className="bg-blue-400 text-white px-4 py-2 rounded-lg sm-mx:px-3 sm-mx:py-1 xs-mx:px-2 xs-mx:py-1"
            onClick={() => {
              if (hackathon.applyUrl) {
                window.open(hackathon.applyUrl, "_blank", "noopener noreferrer");
              } else {
                alert("Apply URL is not available.");
              }
            }}
          >
            Apply
          </button>
        </div>
      </div>
      <Divider my="xl" color='dark' />
      <div className="flex justify-around sm-mx:flex-wrap sm-mx:gap-4">
        {card.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon className="!h-12 !w-12 sm-mx:!h-10 sm-mx:!w-10 xs-mx:!h-8 xs-mx:!w-8" color="blue.4" variant="transparent" radius="xl" aria-label="Settings">
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className={`text-sm ${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'} sm-mx:text-xs xs-mx:text-[10px]`}>{item.name}</div>
            <div className={`font-semibold ${isDarkMode ? 'text-cape-cod-200' : 'text-gray-700'} sm-mx:text-sm xs-mx:text-xs`}>{hackathon[item.id]}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" color='dark' />
      <div>
        <div className={`text-xl font-semibold mb-5 flex items-center gap-2 ${isDarkMode ? 'text-cape-cod-200' : 'text-gray-700'} sm-mx:text-lg xs-mx:text-base`}>
          <IconListCheck />
          Eligibility criteria
        </div>
        <div className="flex flex-wrap gap-2">
          {hackathon.eligibilityCriteria.map((item: any, index: number) => (
            <ActionIcon
              key={index}
              className="!h-fit font-medium !text-sm !w-fit sm-mx:!text-xs xs-mx:!text-[10px]"
              color="blue.4"
              p="xs"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" color='dark' />
      <div className={`[&_*]:${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'} [&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:${isDarkMode ? 'text-cape-cod-200' : 'text-gray-700'} [&_p]:text-justify [&_li]:marker:text-blue-400 [&_li]:mb-1 sm-mx:[&_h4]:text-lg sm-mx:[&_p]:text-sm xs-mx:[&_h4]:text-base xs-mx:[&_p]:text-xs`}
        dangerouslySetInnerHTML={{ __html: desc }} // ✅ Correct usage
      ></div>
    </div>
  );
};

export default HackathonDesc;
