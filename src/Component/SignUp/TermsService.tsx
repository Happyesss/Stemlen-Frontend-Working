import { IconFileText } from "@tabler/icons-react";
import { useTheme } from "../../ThemeContext";

const TermsService = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? "bg-cape-cod-900" : "bg-white"}`}>
      <div className={`max-w-4xl mx-auto py-10 px-6 ${isDarkMode ? "bg-cape-cod-900 text-gray-300" : "bg-cape-cod-10 text-gray-800"}`}>
        <div className="flex items-center gap-2 mb-6">
          <IconFileText size={32} className="text-blue-500" />
          <div className={`text-3xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Terms of Service</div>
        </div>
        <div className={`text-lg font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Effective Date: March 20, 2025</div>
        <hr className="my-4 border-gray-500" />

        <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          Welcome to <strong>Stemlen</strong> ("we," "our," or "us"). These Terms of Service ("Terms") govern your
          access to and use of our platform, including our website, services, and features.
        </div>

        <div className={`my-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          By accessing or using Stemlen, you agree to comply with and be bound by these Terms. If you do not agree,
          please do not use our platform.
        </div>

        <div className={`text-xl font-semibold mt-10 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Acceptance of Terms</div>
        <ul className={isDarkMode ? "text-gray-300 list-disc pl-6" : "text-gray-700 list-disc pl-6"}>
          <li>Have read, understood, and accepted these Terms.</li>
          <li>Are at least 18 years old or have parental consent if under 18.</li>
          <li>Will comply with all applicable laws and regulations.</li>
        </ul>

        <div className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>User Responsibilities</div>
        <div className={`text-lg font-semibold mt-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}> - Providing Accurate Information</div>
        <ul className={isDarkMode ? "text-gray-300 list-disc pl-6" : "text-gray-700 list-disc pl-6"}>
          <li>Register with valid and truthful information.</li>
          <li>Keep account details up to date.</li>
          <li>Do not create multiple accounts or impersonate others.</li>
        </ul>

        <div className={`text-lg font-semibold mt-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}> - Respecting Other Users</div>
        <ul className={isDarkMode ? "text-gray-300 list-disc pl-6" : "text-gray-700 list-disc pl-6"}>
          <li>Interact respectfully with other users.</li>
          <li>Avoid harassment, discrimination, or abusive behavior.</li>
          <li>Report any suspicious or harmful activity.</li>
        </ul>

        <div className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Platform Usage</div>
        <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Stemlen provides job listings, hackathons, and collaboration opportunities.</div>
        <ul className={isDarkMode ? "text-gray-300 list-disc pl-6" : "text-gray-700 list-disc pl-6"}>
          <li>We may update or modify features at any time without notice.</li>
          <li>We are not responsible for third-party content or services.</li>
        </ul>

        <div className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Account Termination</div>
        <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          We may suspend or delete accounts if users violate these Terms, share misleading information,
          or attempt to disrupt the platform.
        </div>

        <div className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Intellectual Property</div>
        <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Stemlen and its content (logo, branding, text, and software) are owned by us.</div>

        <div className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Privacy & Data Protection</div>
        <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          Your use of Stemlen is also governed by our <strong><a href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</a></strong>, which explains how we
          collect, use, and protect your information.
        </div>

        <div className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Limitation of Liability</div>
        <ul className={isDarkMode ? "text-gray-300 list-disc pl-6" : "text-gray-700 list-disc pl-6"}>
          <li>Stemlen is provided "as is" without warranties.</li>
          <li>We are not liable for damages arising from third-party interactions.</li>
        </ul>

        <div className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Changes to These Terms</div>
        <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          We may update these Terms periodically. Continued use of Stemlen after updates means you accept the revised Terms.
        </div>

        <div className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Governing Law & Dispute Resolution</div>
        <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>These Terms are governed by the laws of [Your Country/State].</div>

        <div className={`text-xl font-semibold mt-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Contact Us</div>
        <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          <strong>Email:</strong> stemlen.co@gmail.com <br />
          <strong>Website:</strong> www.stemlen.com
        </div>
      </div>
    </div>
  );
};

export default TermsService;