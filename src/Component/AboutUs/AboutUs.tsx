import { IconUsers, IconCode, IconTrendingUp, IconPlant, IconBrandLinkedin, IconBrandTwitter, IconMail } from '@tabler/icons-react';
import { useTheme } from "../../ThemeContext";
import FAQs from './FAQs';

export function AboutUs() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-cape-cod-950 text-white' : 'bg-gradient-to-b from-indigo-50 to-purple-50 text-black'}`}>
      {/* Hero Section */}
      <div className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <IconPlant size={64} className="mb-6 text-green-600 mx-auto" />
          <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Growing Together in the Digital Soil
          </h1>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-cape-cod-200' : 'text-gray-600'}`}>
            At Stemlen, we're cultivating an ecosystem where minds connect, collaborate, and climb new heights together. 
            Like the stem of a plant, we support growth in every direction.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-cape-cod-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Connect Card */}
            <div className={`rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow ${isDarkMode ? 'bg-cape-cod-800' : 'bg-cape-cod-10'}`}>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconUsers size={36} className="text-indigo-600" />
                </div>
                <h3 className={`mb-4 text-xl font-semibold ${isDarkMode ? 'text-white' : ''}`}>Connect</h3>
                <p className={`${isDarkMode ? 'text-cape-cod-200' : 'text-gray-600'}`}>
                  Bridge brilliant minds across disciplines. Find mentors, collaborators, and friends who share your passion.
                </p>
              </div>
            </div>

            {/* Collaborate Card */}
            <div className={`rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow ${isDarkMode ? 'bg-cape-cod-800' : 'bg-cape-cod-10'}`}>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconCode size={36} className="text-green-600" />
                </div>
                <h3 className={`mb-4 text-xl font-semibold ${isDarkMode ? 'text-white' : ''}`}>Collaborate</h3>
                <p className={`${isDarkMode ? 'text-cape-cod-200' : 'text-gray-600'}`}>
                  Build amazing projects through hackathons, team challenges, and open-source initiatives.
                </p>
              </div>
            </div>

            {/* Grow Card */}
            <div className={`rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow ${isDarkMode ? 'bg-cape-cod-800' : 'bg-cape-cod-10'}`}>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconTrendingUp size={36} className="text-purple-600" />
                </div>
                <h3 className={`mb-4 text-xl font-semibold ${isDarkMode ? 'text-white' : ''}`}>Grow</h3>
                <p className={`${isDarkMode ? 'text-cape-cod-200' : 'text-gray-600'}`}>
                  Access curated opportunities, resources, and mentorship to accelerate your career growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQs />

      {/* Team Section 
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-cape-cod-950' : 'bg-indigo-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Meet Our Gardeners
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'Alex Chen', role: 'CEO', color: 'blue' },
              { name: 'Maria Gonzalez', role: 'CTO', color: 'green' },
              { name: 'Samir Patel', role: 'COO', color: 'purple' },
            ].map((member) => (
              <div key={member.name} className={`w-64 text-center rounded-lg shadow-sm p-6 ${isDarkMode ? 'bg-cape-cod-800' : 'bg-white'}`}>
                <div 
                  className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 bg-${member.color}-100`}
                >
                  <span className={`text-2xl font-bold text-${member.color}-600`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className={`mb-1 text-xl font-semibold ${isDarkMode ? 'text-white' : ''}`}>{member.name}</h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-cape-cod-200' : 'text-gray-600'}`}>{member.role}</p>
                <div className="flex justify-center gap-3">
                  <IconBrandLinkedin size={20} className="text-blue-600 cursor-pointer" />
                  <IconBrandTwitter size={20} className="text-sky-500 cursor-pointer" />
                  <IconMail size={20} className={`${isDarkMode ? 'text-cape-cod-200' : 'text-gray-600'} cursor-pointer`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}

      {/* CTA Section */}
      <div className={`py-20 px-4 text-center ${isDarkMode ? 'bg-cape-cod-900' : 'bg-gradient-to-r from-indigo-400 to-purple-400'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : ''}`}>
            Ready to Grow With Us?
          </h2>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-cape-cod-200' : 'text-indigo-100'}`}>
            Join our growing community of innovators, creators, and problem-solvers.
          </p>
          <button 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center mx-auto gap-2"
          >
            <span>Start Growing Today</span>
            <IconPlant size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}