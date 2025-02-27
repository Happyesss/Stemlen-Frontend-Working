import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import TalentCard from "../FindTalent/TalentCard";
import { useEffect, useState } from "react";

const PostedJobDesc = (props: any) => {
    const [tab, setTab] = useState("overview");
    const [arr, setArr] = useState<any>([]);
    const handleTabChange = (value: any) => {
        setTab(value);
        if (value === "applicants") {
            setArr(props.applicants?.filter((x: any) => x.applicationStatus === "APPLIED"));
        }
        else if (value === "invited") {
            setArr(props.applicants?.filter((x: any) => x.applicationStatus === "INTERVIEWING"));
        }
        else if (value === "offered") {
            setArr(props.applicants?.filter((x: any) => x.applicationStatus === "OFFERED"));
        }
        else if (value === "rejected") {
            setArr(props.applicants?.filter((x: any) => x.applicationStatus === "REJECTED"));
        }
    }
    useEffect(() => {
        handleTabChange("overview");
    }, [props])
    return (
        <div className="mt-5 w-3/4 px-5 md-mx:w-full sm-mx:px-0">
            {props.jobTitle?<><div className="text-2xl font-semibold flex items-center">
                {props.jobTitle} <Badge variant="light" ml="sm" color="blue.4" size="sm">{props.jobStatus}</Badge>
            </div>
            <div className="font-medium text-cape-cod-300 mb-5">
                {props.location}
            </div>
            <Tabs variant="outline" radius="lg" value={tab} onChange={handleTabChange}>
                <Tabs.List className=" [&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-blue-400">
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    <Tabs.Tab value="offered">Offered</Tabs.Tab>
                    <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="overview" className="[&>div]:w-full">
                    <JobDesc {...props} edit={true} closed={ props.jobStatus=="CLOSED"} />
                </Tabs.Panel>
                <Tabs.Panel value="applicants">
                    <div className="flex mt-10 flex-wrap gap-7">
                        {
                           arr?.length?arr.map((talent: any, index: any) => index < 6 && <TalentCard key={index} {...talent} posted={true} />):<div className="text-2xl font-semibold">No Applicants</div>
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="invited">
                    <div className="flex mt-10 flex-wrap gap-7">
                        {
                            arr?.length?arr.map((talent: any, index: any) => index < 6 && <TalentCard key={index} {...talent} invited={true} />):<div className="text-2xl font-semibold">No Invited Applicants</div>
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="offered">
                    <div className="flex mt-10 flex-wrap gap-7">
                        {
                            arr?.length?arr.map((talent: any, index: any) => index < 6 && <TalentCard key={index} {...talent} offered={true} />):<div className="text-2xl font-semibold">No Offered Applicants</div>
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="rejected">
                    <div className="flex mt-10 flex-wrap gap-7">
                        {
                           arr?.length?arr.map((talent: any, index: any) => index < 6 && <TalentCard key={index} {...talent} rejected={true} />):<div className="text-2xl font-semibold ">No Rejected Applicants</div>
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>
            </>:<div className="text-2xl font-semibold flex items-center justify-center min-h-[70vh]">No Job Selected</div>}
        </div>
    );
};

export default PostedJobDesc;
