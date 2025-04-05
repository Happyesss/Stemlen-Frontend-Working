import { useTheme } from "../../ThemeContext";

interface UserTestimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}

export default function AppTestimonials() {
  const { isDarkMode } = useTheme();

  const testimonials: UserTestimonial[] = [
    {
      id: 1,
      name: "Ankur Sharma",
      role: "Backend Developer ",
      text: "I recently started using this app, and I explored a legitimate way to find jobs. The user interface is clean and intuitive, making it easy to navigate. I love the personalized job recommendations based on my skills and preferences.",
      image: "https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
    },
    {
      id: 2,
      name: "Shanky",
      role: "Web Developer",
      text: "I'm a college student and was searching for Hackathons. This app has been a game-changer for me. The Hackathon listings are diverse, and this app helped me win my first hackathon, but I'm giving 4 stars because the site needs some improvement.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AOJvj0-O1jCA1beOWZmyaNMHMnoDSM_KdQ&s",
      rating: 4,
    },
    {
      id: 3,
      name: "Rishika Mathur",
      role: "SDE Intern",
      text: "Recently, I got an internship in a startup company. The app's job search feature is fantastic, allowing me to filter jobs by location, salary, and job type. I appreciate the ability to save my favorite listings for later review.",
      image: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg?w=1250&h=1120&crop=1",
      rating: 5,
    },
  ];

  return (
    <section
      className={`relative py-24 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? "text-white" : " text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Loved by 
            <span className="text-red-400"> 25,000+ </span>
             Users
          </h2>
          <p className="mt-4 text-lg">
            See what people say about our web app
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`relative rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                isDarkMode
                  ? "bg-cape-cod-800 border-gray-700"
                  : "bg-white border-gray-100"
              }`}
            >
              <div className="absolute top-0 right-0 -mt-4 mr-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDarkMode ? "bg-blue-600 text-gray-200" : "bg-blue-500 text-white"
                  }`}
                >
                  {testimonial.rating}/5
                </span>
              </div>
              <div className="flex items-center mb-6">
                <img
                  className={`w-12 h-12 rounded-full object-cover border-2 ${
                    isDarkMode ? "border-gray-600" : "border-indigo-100"
                  }`}
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mb-6 relative">
                <span
                  className={`absolute -left-4 text-3xl ${
                    isDarkMode ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  “
                </span>
                {testimonial.text}
                <span
                  className={`absolute -right-4 bottom-0 text-3xl ${
                    isDarkMode ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  ”
                </span>
              </p>
              <div className="flex items-center text-sm">
                <svg
                  className={`w-5 h-5 mr-1 ${
                    isDarkMode ? "text-indigo-400" : "text-indigo-500"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified User
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}