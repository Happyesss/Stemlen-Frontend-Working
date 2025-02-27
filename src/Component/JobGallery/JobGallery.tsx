import { Tabs } from "@mantine/core"
import Card from "./Card"
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/JobService";
import { useSelector } from "react-redux";
import NoJobsImage from "../../assets/images/404Error.png"; 

const JobGallery = () => {
    const profile = useSelector((state: any) => state.profile)
    const user = useSelector((state: any) => state.user)
    const [activeTab, setActiveTab] = useState<any>('APPLIED')
    const [jobList, setJobList] = useState<any>([])
    const [showList, setShowList] = useState<any>([])
    
    useEffect(() => {
        getAllJobs()
            .then((res) => {
                setJobList(res);
                const filteredJobs = res.filter((job: any) => {
                    return job.applicants?.some((applicant: any) => {
                        return (
                            applicant.applicantId === user.id &&
                            applicant.applicationStatus === "APPLIED"
                        );
                    });
                });
                setShowList(filteredJobs);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user.id]);
    
    const handleTabChange = (value: string | null) => {
        setActiveTab(value);
        
        if (value === "SAVED") {
            setShowList(jobList.filter((job: any) => profile.savedJobs?.includes(job.id)));
        } else {
            setShowList(jobList.filter((job: any) => 
                job.applicants?.some((applicant: any) => 
                    applicant.applicantId === user.id && applicant.applicationStatus === value
                )
            ));
        }
    };
    
    return (
        <div>
            <div className="text-2xl font-semibold mb-5 sm-mx:text-xl xs-mx:text-lg"> My Gallery</div>
            <div>
                <Tabs variant="outline" radius="lg" value={activeTab} onChange={handleTabChange}>
                    <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-blue-400 xs-mx:[&_button]:!px-2">
                        <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
                        <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
                        <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
                        <Tabs.Tab value="INTERVIEWING">Scheduled</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value={activeTab}>
                        {showList.length > 0 ? (
                            <div className='flex flex-wrap gap-5 mt-10 sm-mx:gap-3 xs-mx:gap-2 xs-mx:justify-center'>
                                {showList.map((item: any, index: any) => <Card key={index} {...item} {...{[activeTab.toLowerCase()]:true}} />)}
                            </div>
                        ) : (
                            <div className='flex flex-col items-center mt-10 bs-mx:mt-20'>
                                <img src={NoJobsImage} alt="No jobs available" className='w-[20%] h-[20%] bs-mx:w-[40%] bs-mx:h-[40%]' />
                                <p className='mt-4 text-lg font-semibold text-gray-500 text-center'>
                                    No jobs found in this category <br /> 
                                    Note: Only applications submitted through this portal will be displayed here , NO Redirected apply.
                                </p></div>
                        )}
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default JobGallery
