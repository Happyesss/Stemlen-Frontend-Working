import { Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import PostedJobCard from "./PostedJobCard";
import { useTheme } from "../../ThemeContext";

const PostedJobs = (props: any) => {
  const [activeTab, setActiveTab] = useState<string | null>('ACTIVE');
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setActiveTab(props.job?.jobStatus || 'ACTIVE');
  }, [props.job]);

  return (
    <div className="w-1/4.5 mt-5">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <div>
        <Tabs autoContrast variant="pills" value={activeTab} onChange={setActiveTab}>
          <Tabs.List className={`[&_button[aria-selected='false']]:${isDarkMode ? 'bg-cape-cod-900 text-cape-cod-100' : 'bg-white text-cape-cod-900'} font-medium `}>
            <Tabs.Tab value="ACTIVE">Active [{props.jobList?.filter((job: any) => job?.jobStatus === 'ACTIVE').length}]</Tabs.Tab>
            <Tabs.Tab value="DRAFT">Drafts [{props.jobList?.filter((job: any) => job?.jobStatus === 'DRAFT').length}]</Tabs.Tab>
            <Tabs.Tab value="CLOSED">Close [{props.jobList?.filter((job: any) => job?.jobStatus === 'CLOSED').length}]</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
      <div className="flex flex-col flex-wrap mt-5 gap-5">
        {props.jobList?.filter((job: any) => job?.jobStatus === activeTab)
          .map((item: any, index: any) => <PostedJobCard key={index} {...item} />)}
      </div>
    </div>
  );
};

export default PostedJobs;