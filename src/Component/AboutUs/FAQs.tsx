import { useState } from 'react';
import { useTheme } from "../../ThemeContext";

const faqs = [
  {
    question: "How do I build my resume?",
    answer: "Create a professional resume that highlights your skills and experience. Use our resume builder tool for assistance."
  },
  {
    question: "How can I search for jobs?",
    answer: "Use our search tool to find job listings that match your criteria. Filter by job type, location, and more."
  },
  {
    question: "How do I apply for jobs?",
    answer: "Submit your application directly through our portal. Follow the steps provided in the job listing."
  },
  {
    question: "What is Stemlen?",
    answer: "Stemlen is a platform that helps you grow in your career, skills, and opportunities. Connect with a community of like-minded individuals."
  },
  {
    question: "What are hackathons?",
    answer: "Participate in exciting hackathons by top leading companies and showcase your talent to the world."
  }
];

const FAQs = () => {
  const { isDarkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`mt-20 pb-20 ${isDarkMode ? 'bg-cape-cod-950 text-white' : 'bg-transparent text-black'}`}>
      <div className="text-center mb-16">
        <h1 className={`text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-cape-cod-900'}`}>
          Frequently Asked <span className="text-blue-400">Questions</span>
        </h1>
        <p className={`text-lg mt-4 ${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-300'} max-w-2xl mx-auto`}>
          Find answers to common questions about our platform.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-8">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <button
              className={`w-full text-left p-4 rounded-lg ${isDarkMode ? 'bg-cape-cod-800 text-white' : 'bg-white text-cape-cod-900'} focus:outline-none`}
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
            </button>
            {activeIndex === index && (
              <div className={`p-4 ${isDarkMode ? 'bg-cape-cod-900 text-cape-cod-200' : 'bg-cape-cod-50 text-cape-cod-700'}`}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
