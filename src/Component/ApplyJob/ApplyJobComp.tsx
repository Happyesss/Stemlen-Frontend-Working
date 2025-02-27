import { Divider } from "@mantine/core";
import ApplyForm from "./ApplyForm";
import { timeAgo } from "../../Services/Utilities";
import { useTheme } from "../../ThemeContext";

const ApplyJobComp = (props: any) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`w-2/3 mx-auto bs-mx:w-[92%] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : ' text-black'}`}>
      <div className="flex justify-between sm-mx:flex-wrap sm-mx:items-center">
        <div className="flex gap-2 items-center sm-mx:flex-wrap sm-mx:gap-1">
          <div className={`p-3 rounded-xl sm-mx:p-2 ${isDarkMode ? 'bg-cape-cod-800' : 'bg-gray-200'}`}>
            {props.company && (
              <img
                className="h-14 sm-mx:h-12 xs-mx:h-10"
                src={require(`../../assets/Icons/${props.company}.png`)}
                alt=""
              />
            )}
          </div>
          <div>
            <div className="font-semibold text-2xl sm-mx:text-xl xs-mx:text-lg">{props.title}</div>
            <div className={`text-lg ${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'} sm-mx:text-base xs-mx:text-sm`}>
              {props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants ? props.applicants.length : 0} Applicants
            </div>
          </div>
        </div>
      </div>
      <Divider my="xl" color={isDarkMode ? 'gray' : 'dark'} />
      <ApplyForm />
    </div>
  );
};

export default ApplyJobComp;
