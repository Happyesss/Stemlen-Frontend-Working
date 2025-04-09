import Marquee from 'react-fast-marquee';

const HackathonBanner = () => {
    return (
        <div className="cursor-pointer">
            <Marquee pauseOnHover={true} speed={50}>
                <img src="https://d259t2jj6zp7qm.cloudfront.net/images/20250303091303/Salesforce-social-image-2.png" alt="Hackathon Banner 1" className="h-40 mx-2 rounded-lg shadow-lg sm-mx:h-32 xs-mx:h-28" />
                <img src="https://pbs.twimg.com/media/GoBTZe4b0AE8kda.jpg" alt="Hackathon Banner 2" className="h-40 mx-2 rounded-lg shadow-lg sm-mx:h-32 xs-mx:h-28" />
                <img
                    src="https://ci3.googleusercontent.com/meips/ADKq_NboCFhFwj7z3DjNXlFcxWmAUAZUS-NbOVPotcYnWiN11HLVSbozswB4a0EjoUqKYvModjnnRh_fd7aXGqCDaVmr4DAz1NmYxH0UbHc59_aRHmz5OOBMsJsiRhk9ElYW=s0-d-e1-ft#https://static.figma.com/uploads/94b911151e968b30c5ed990aaccf4cc1bc3bcb24"
                    alt="Hackathon Banner 3"
                    className="h-40 mx-2 rounded-lg shadow-lg sm-mx:h-32 xs-mx:h-28"
                />
                <img src="https://nflq.nism.ac.in/downloadTemplateFile/1.0%20NFLQ%202025%20Web%20Banner%20(1600X420).jpg" alt="Hackathon Banner 4" className="h-40 mx-2 rounded-lg shadow-lg sm-mx:h-32 xs-mx:h-28" />
            </Marquee>
        </div>
    );
};

export default HackathonBanner;
