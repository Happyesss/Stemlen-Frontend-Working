import { IconShieldLock } from "@tabler/icons-react";
import { useTheme } from "../../ThemeContext";

const PrivacyPolicy = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? "bg-cape-cod-900" : "bg-white"}`}>
      <div className={`max-w-4xl mx-auto py-10 px-6 ${isDarkMode ? "text-gray-300" : "bg-cape-cod-10 text-gray-800"}`}>
        <div className="flex items-center gap-2 mb-6">
          <IconShieldLock size={32} className="text-green-500" />
          <h1 className={`text-3xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Privacy Policy</h1>
        </div>
        <p className={`text-lg font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Effective Date: March 20, 2025</p>
        <hr className="my-4" />

        <h2 className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Data Collection</h2>
        <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>We collect three types of information:</p>
        <ul className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          <li><strong>Provided Data:</strong> Email, profile info, payment details</li>
          <li><strong>Automatic Data:</strong> IP addresses, device info, usage patterns</li>
          <li><strong>Third-Party Data:</strong> Social media integrations, analytics services</li>
        </ul>

        <h2 className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Cookies & Tracking</h2>
        <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>We use both session and persistent cookies for:</p>
        <ul className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          <li>Authentication and security</li>
          <li>Personalized content delivery</li>
          <li>Advertising measurement (Google Analytics)</li>
        </ul>

        <h2 className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Data Sharing</h2>
        <ul className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          <li><strong>Service Providers:</strong> Payment processors, cloud hosting partners</li>
          <li><strong>Legal Requirements:</strong> When required by law enforcement</li>
          <li><strong>Business Transfers:</strong> During mergers or acquisitions</li>
        </ul>

        <h2 className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>International Transfers</h2>
        <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Data may be transferred to and processed in countries outside your residence, including the United States and EU member states.</p>

        <h2 className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Children's Privacy</h2>
        <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>We do not knowingly collect data from children under 13. Parents/guardians may request deletion of inadvertently collected data.</p>

        <h2 className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Data Retention</h2>
        <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>User data is retained for 3 years after account deletion for legal compliance purposes. Anonymized data may be kept indefinitely.</p>

        <h2 className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Your Rights</h2>
        <ul className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          <li>Request access to personal data</li>
          <li>Rectify inaccurate information</li>
          <li>Object to processing activities</li>
          <li>Export your data in machine-readable format</li>
        </ul>

        <h2 className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Contact Information</h2>
        <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          <strong>DPO:</strong> stemlen.co@gmail.com <br/>
          <strong>Website:</strong> www.stemlen.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;