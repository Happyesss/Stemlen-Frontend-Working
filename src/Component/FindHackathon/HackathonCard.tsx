import { Divider, Text } from "@mantine/core";
import { IconUsers, IconCalendarEvent, IconMapPin, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import { calculateDaysLeft, deleteHackathon } from "../../Services/Utilities";

const HackathonCard = (props: any) => {
  const { isDarkMode } = useTheme();

  const daysLeft = calculateDaysLeft(props.eventDate);
  console.log(daysLeft);

  if (daysLeft < 0) {
    deleteHackathon(props.id);
    return null;
  }

  return (
    <Link to={`/hackathon/${props.id}`} className={`relative flex flex-col gap-1 rounded-xl p-2 w-72 hover:shadow-[0_0_5px_1px_blue] transition-all ${isDarkMode ? 'bg-cape-cod-900 !shadow-blue-300' : 'bg-white !shadow-gray-300'}`}>
      <div className="w-full h-[120px] rounded-lg overflow-hidden">
        <img
          src={`data:image/jpeg;base64,${props.bannerImage}`}
          alt="Hackathon Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`absolute top-[100px] ml-1 p-2 rounded-md shadow-md ${isDarkMode ? 'bg-cape-cod-800' : 'bg-gray-200'}`}>
        <img
          src={`data:image/jpeg;base64,${props.iconImage}`}
          alt="Hackathon Logo"
          className="h-10 w-10"
        />
      </div>
      <div className="px-1 ml-28">
        <div className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>{props.title}</div>
        <div className={`text-sm ${isDarkMode ? 'text-cape-cod-400' : 'text-gray-500'}`}>Hosted by {props.organizer}</div>
      </div>

      <div className={`flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:rounded-lg text-xs mt-1 ${isDarkMode ? '[&>div]:bg-cape-cod-800 [&>div]:text-blue-400' : '[&>div]:bg-gray-200 [&>div]:text-blue-600'}`}>
        <div className="inline-flex items-center">
          <IconCalendarEvent className="w-3 h-3 mr-1" />
          <span>{props.eventDate}</span>
        </div>
        <div className="inline-flex items-center">
          <IconUsers className="w-3 h-3 mr-1" />
          <span>{props.participants} Participants</span>
        </div>
        <div className="inline-flex items-center">
          <IconMapPin className="w-3 h-3 mr-1" />
          <span>{props.location}</span>
        </div>
      </div>
      <Text className={`!text-xs text-justify ${isDarkMode ? '!text-cape-cod-300' : '!text-gray-500'}`} lineClamp={3}>
        {props.about}
      </Text>
      <Divider size="xs" color={isDarkMode ? 'cape-cod.6' : 'gray.6'} />

      <div className="flex justify-between">
        <div className={`font-semibold p-1 rounded-lg ${isDarkMode ? 'text-cape-cod-200' : 'text-gray-700'}`}>
          Prize Money : {props.prize}
        </div>
        <div className={`flex gap-1 text-xs items-center ${isDarkMode ? 'text-cape-cod-400' : 'text-gray-500'}`}>
          <IconClockHour3 className="h-5 w-5" stroke={1.5} /> {daysLeft} Days Left
        </div>
      </div>
    </Link>
  );
};

export default HackathonCard;
