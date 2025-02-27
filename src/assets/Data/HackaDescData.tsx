import { IconCalendarDue, IconClockHour3, IconMapPin, IconTrophy } from "@tabler/icons-react"

const card = [
    { name: "Duration", icon: IconClockHour3, value: "48 Hours", id: "duration" },
    { name: "Prize", icon: IconTrophy, value: "₹10 Lakhs", id: "prize" },
    { name: "location", icon: IconMapPin, value: "AI & Sustainability", id: "location" },
    { name: "Event Date", icon: IconCalendarDue, value: "10.02.2025", id: "eventDate" },
]
const eligibilityCriteria = [
    "Proficiency in React for frontend development",
    "Experience with Spring Boot for backend development",
    "Strong knowledge of Java programming",
    "Familiarity with Python for scripting or backend development",
    "Hands-on experience with Node.js for server-side applications",
    "Experience working with MongoDB for database management",
    "Knowledge of Express.js for building APIs",
    "Familiarity with Django for web development",
    "Experience with PostgreSQL for relational database management",
];
const desc = `
<h4 style="font-size: 1.7rem;">All That You Need to Know About Hackathon</h4>
    <h4 style="color:lightgreen" >Hackathon Guidelines :</h4>
    
    <h4>Event Name: Hackathon</h4>
    <p><strong>Duration:</strong> 12 hours</p>
    
    <h4>Description:</h4>
    <p>This is a development hackathon where participants are required to build a fully functioning website within the given time frame.<br>
    The problem statement will be provided at the start of the event.</p>
    
    <h4>Participation Guidelines</h4>
    
    <h4>Team Specifications:</h4>
    <ul>
        <li>A team can consist of 1 to 4 members.</li>
        <li>Participants can be from the same or different institutes.</li>
    </ul>
    
    <h4>Registration:</h4>
    <ul>
        <li>Participants need to register their teams before the deadline mentioned on the official website or communication channels.</li>
        <li>Each team must provide valid contact details of a team captain who will serve as the primary point of contact.</li>
    </ul>
    
    <h4>Eligibility:</h4>
    <ul>
        <li>The hackathon is open to all students and professionals.</li>
        <li>All participants must carry valid identification proof.</li>
    </ul>
    
    <h4>Hackathon Format</h4>
    
    <h4>Problem Statement:</h4>
    <p>The problem statement will be disclosed at the start of the event.<br>
    Teams are expected to develop a solution adhering to the problem statement's requirements and constraints.</p>
    
    <h4>Development Guidelines:</h4>
    <ul>
        <li>The solution must be a fully functional website.</li>
        <li>Teams are free to use any programming languages, frameworks, and tools, provided they comply with the event's rules.</li>
        <li>All development must be completed within the 10-hour timeframe.</li>
    </ul>
    
    <h4>Submission Requirements:</h4>
    <ul>
        <li>Teams must submit their project code, deployment link (if applicable), and a brief write-up explaining the solution before the deadline.</li>
        <li>The code must be uploaded to a GitHub repository, and access should be granted to the judging panel.</li>
    </ul>
    
    <h4>Judging Criteria</h4>
    <p>The following parameters will be used to evaluate the submissions:</p>
    <ul>
        <li><strong>Functionality (40%):</strong> The website should be fully functional and align with the problem statement.</li>
        <li><strong>Innovation (20%):</strong> Creative and unique approaches to solving the problem.</li>
        <li><strong>UI/UX Design (20%):</strong> The website's interface should be user-friendly and visually appealing.</li>
        <li><strong>Code Quality (10%):</strong> Clean, well-structured, and documented code.</li>
        <li><strong>Presentation (10%):</strong> Clear and concise explanation of the solution during the final presentation.</li>
    </ul>
    
    <h4>Event Rules</h4>
    <ul>
        <li>Teams must arrive at the venue 30 minutes before the start of the hackathon.</li>
        <li>The use of pre-built templates or code is strictly prohibited unless explicitly allowed by the organizers.</li>
        <li>Internet access will be provided; however, teams must not engage in any unethical practices like plagiarism or copying solutions from others.</li>
        <li>All submissions must be original and developed during the hackathon. Any team found violating this rule will be immediately disqualified.</li>
        <li>Teams are encouraged to bring their own laptops, chargers, and other necessary equipment. Basic amenities like Wi-Fi, power outlets, and refreshments will be provided.</li>
    </ul>
    
    <h4>An Important Note</h4>
    <ul>
        <li>The organizers reserve the right to modify the rules or guidelines at any time. Any such changes will be communicated to the participants promptly.</li>
        <li>Decisions made by the judging panel will be final and binding on all teams. No appeals or queries regarding the judgment will be entertained.</li>
        <li>Prize pool is subjected to the number of participants and on the discretion of the organizing committee.</li>
        <li>Teams are responsible for ensuring their submission complies with the guidelines.</li>
        <li>Cliffesto'25 reserves the right to disqualify any team at any stage for non-compliance with the rules or misconduct.</li>
        <li>For any queries or clarifications, participants are encouraged to contact the Cliffesto'25 organizing team.</li>
    </ul>
`;

export { card, eligibilityCriteria, desc };