const companies = ["Google",  "Netflix", "Meta", "Pinterest","Cisco", "Spotify", "Oracle", "Walmart"];

const jobCategory = [
    {
        "name": "Digital Marketing",
        "desc": "Promote brands online with marketing strategies",
        "jobs": "1k"
    },
    {
        "name": "Web Developer",
        "desc": "Build and maintain websites for clients",
        "jobs": "2k"
    },
    {
        "name": "Arts & Design",
        "desc": "Create visual content for branding and media",
        "jobs": "500"
    },
    {
        "name": "UI-UX Designer",
        "desc": "Design user interfaces and enhance user experience",
        "jobs": "800"
    },
    {
        "name": "Content Writing",
        "desc": "Write and edit content for various platforms",
        "jobs": "1.5k"
    },
    {
        "name": "Data Entry",
        "desc": "Input data into systems accurately and efficiently",
        "jobs": "1k"
    },
    {
        "name": "Customer Support",
        "desc": "Assist customers with inquiries and issues",
        "jobs": "1.2k"
    },
    {
        "name": "Sales",
        "desc": "Sell products and services to customers",
        "jobs": "900"
    },
    {
        "name": "Finance",
        "desc": "Manage financial records and transactions",
        "jobs": "700"
    },
    {
        "name": "Human Resource",
        "desc": "Recruit, manage, and support company employees",
        "jobs": "600"
    }
]

const work = [
    {
        "name": "Build Your Resume",
        "desc": "Create a standout resume with your skills."
    },
    {
        "name": "Apply for Job",
        "desc": "Find and apply for jobs that match your skills."
    },
    {
        "name": "Get Hired",
        "desc": "Connect with employers and start your new job."
    }
]


const testimonials = [
    {
        "name": "Shivam Patel",
        "testimonial": "This job portal made job search easy and quick. Recommended to all job seekers!",
        "rating": 5
    },
    {
        "name": "Abhishek Kullu",
        "testimonial": "Found my dream job within a week! The application process was smooth.",
        "rating": 5
    },
    {
        "name": "Swapnil Pandey",
        "testimonial": "I secured a job offer within days of applying. Exceptional user experience and support.",
        "rating": 4
    },
    {
        "name": "Pavan Barnana",
        "testimonial": "Highly efficient job portal with excellent resources. Helped me land a great position.",
        "rating": 4
    }
]
const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Find Job", url: "/find-jobs" },
        { name: "Find Hackathon", url: "/find-hackathon" },
        { name: "Post Hackathon", url: "/post-hackathon" },
        { name: "Posted Job", url: "/posted-job/0" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about-us" },
        { name: "Contact Us", url: "/contact" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms & Conditions", url: "/terms-of-service" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help & Support", url: "/help-support" },
        { name: "Feedback", url: "/feedback" },
        { name: "FAQs", url: "/about-us" }
      ]
    }
  ];
  
export { companies, jobCategory, work, testimonials, footerLinks };