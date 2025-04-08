import Marquee from 'react-fast-marquee';

const HackathonBanner = () => {
    return (
        <div className="cursor-pointer">
            <Marquee pauseOnHover={true} speed={50}>
                <img src="https://d259t2jj6zp7qm.cloudfront.net/images/20250303091303/Salesforce-social-image-2.png" alt="Hackathon Banner 1" className="h-40 mx-2 rounded-lg shadow-lg sm-mx:h-32 xs-mx:h-28" />
                <img src="https://img.freepik.com/free-vector/digital-technology-banner-header-with-mesh-lines_1017-19583.jpg?t=st=1739384410~exp=1739388010~hmac=9157ba6eb099e385b17f30ed7d7fe2afe208e88b76aac1d5f5b7c27ce3ff603f&w=1060" alt="Hackathon Banner 2" className="h-40 mx-2 rounded-lg shadow-lg sm-mx:h-32 xs-mx:h-28" />
                <img
                    src="https://img.freepik.com/free-vector/hackathon-isometric-landing-software-development_107791-2860.jpg?t=st=1739384234~exp=1739387834~hmac=b79e0b3af21da22cf435a5188e6bf29c83336ded8527051d022189aba96263be&w=996"
                    alt="Hackathon Banner 3"
                    className="h-40 mx-2 rounded-lg shadow-lg sm-mx:h-32 xs-mx:h-28"
                />
                <img src={require(`../../assets/images/bgimg.jpg`)} alt="Hackathon Banner 4" className="h-40 mx-2 rounded-lg shadow-lg sm-mx:h-32 xs-mx:h-28" />
            </Marquee>
        </div>
    );
};

export default HackathonBanner;
