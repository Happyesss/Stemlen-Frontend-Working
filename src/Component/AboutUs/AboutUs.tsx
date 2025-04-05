import {
  IconUsers,
  IconCode,
  IconTrendingUp,
  IconPlant,
} from "@tabler/icons-react";
import { useTheme } from "../../ThemeContext";
import FAQs from "./FAQs";

export function AboutUs() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-cape-cod-950 text-white"
          : "bg-gradient-to-b from-indigo-50 to-purple-50 text-black"
      }`}
    >
      {/* Hero Section */}
      <div className="py-16 px-4 text-center sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <IconPlant size={48} className="mb-6 text-green-600 mx-auto" />
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Growing Together in the Digital Soil
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl mb-8 ${
              isDarkMode ? "text-cape-cod-200" : "text-gray-600"
            }`}
          >
            At Stemlen, we're cultivating an ecosystem where minds connect,
            collaborate, and climb new heights together. Like the stem of a
            plant, we support growth in every direction.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div
        className={`py-16 px-4 sm:px-6 md:px-10 ${
          isDarkMode ? "bg-cape-cod-900" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-center mb-12 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Connect",
                icon: <IconUsers size={36} className="text-indigo-600" />,
                desc: "Bridge brilliant minds across disciplines. Find mentors, collaborators, and friends who share your passion.",
                bg: "bg-indigo-100",
              },
              {
                title: "Collaborate",
                icon: <IconCode size={36} className="text-green-600" />,
                desc: "Build amazing projects through hackathons, team challenges, and open-source initiatives.",
                bg: "bg-green-100",
              },
              {
                title: "Grow",
                icon: <IconTrendingUp size={36} className="text-purple-600" />,
                desc: "Access curated opportunities, resources, and mentorship to accelerate your career growth.",
                bg: "bg-purple-100",
              },
            ].map((val, i) => (
              <div
                key={i}
                className={`rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow ${
                  isDarkMode ? "bg-cape-cod-800" : "bg-cape-cod-10"
                }`}
              >
                <div className="text-center">
                  <div
                    className={`${val.bg} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    {val.icon}
                  </div>
                  <h3
                    className={`mb-3 text-lg sm:text-xl font-semibold ${
                      isDarkMode ? "text-white" : ""
                    }`}
                  >
                    {val.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${
                      isDarkMode ? "text-cape-cod-200" : "text-gray-600"
                    }`}
                  >
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQs />

      {/* CTA Section */}
      <div
        className={`py-20 px-4 sm:px-6 md:px-10 text-center ${
          isDarkMode
            ? "bg-cape-cod-900"
            : "bg-gradient-to-r from-indigo-400 to-purple-400"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDarkMode ? "text-white" : ""
            }`}
          >
            Ready to Grow With Us?
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl mb-8 ${
              isDarkMode ? "text-cape-cod-200" : "text-indigo-100"
            }`}
          >
            Join our growing community of innovators, creators, and
            problem-solvers.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm sm:text-base py-3 px-5 sm:px-6 rounded-lg transition-colors flex items-center justify-center mx-auto gap-2">
            <span>Start Growing Today</span>
            <IconPlant size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
