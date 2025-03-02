import {Anchor,Button,Checkbox,Group,LoadingOverlay,PasswordInput,Radio,rem,TextInput,Modal, Divider,} from "@mantine/core";
import { IconAt, IconCheck, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { SignUpValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { errorNotification } from "../../Services/NotificationService";
import { GoogleButton } from "./GoogleButton";
import { TwitterButton } from "./GithubButton";
import { oauthLogin } from "../../Services/AuthService";
import { useTheme } from "../../ThemeContext";

const initialFormState: Record<string, string> = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [formData, setFormData] = useState<Record<string, string>>(initialFormState);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [termsModalOpened, setTermsModalOpened] = useState(false);
  const { isDarkMode } = useTheme();
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (event: any) => {
    if (typeof event === "string") {
      setFormData({ ...formData, accountType: event });
      return;
    }

    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const error = SignUpValidation(name, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
      confirmPassword:
        name === "password" && formData.confirmPassword && formData.confirmPassword !== value
          ? "Passwords do not match"
          : name === "confirmPassword" && formData.password && formData.password !== value
          ? "Passwords do not match"
          : "",
    }));
  };

  const handleSubmit = async () => {
    const newFormErrors: Record<string, string> = {};
    let isValid = true;

    for (const key in formData) {
      if (key === "accountType") continue;

      if (key === "confirmPassword") {
        if (formData[key] !== formData.password) {
          newFormErrors[key] = "Passwords do not match";
          isValid = false;
        }
      } else {
        const error = SignUpValidation(key, formData[key]);
        if (error) {
          newFormErrors[key] = error;
          isValid = false;
        }
      }
    }

    setFormErrors(newFormErrors);

    if (!termsAccepted) {
      errorNotification("You must accept the terms and conditions to register.", "Error");
      isValid = false;
    }

    if (isValid) {
      setLoading(true);
      try {
        const response = await registerUser(formData);
        console.log("Registration successful:", response);
        setFormData(initialFormState);
        notifications.show({
          title: 'Registration successful:',
          message: 'Redirecting to login page....',
          icon: <IconCheck style={{width:"90%",height:"90%"}} />,
          color: 'green',
          withBorder: true,
          className:"!border-green-500"
        })
        setTimeout(() => {
          setLoading(false);
          navigate("/login");
        }, 3000);
      }catch (error: any) {
        setLoading(false);
        if (error.response?.data?.errorMessage) {
          errorNotification(error.response.data.errorMessage, "Error");
        } else {
          errorNotification("An unexpected error occurred.", "Error");
        }
      }
      
    }
  };

  return (
    <>
      <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <div className="w-1/2 px-24 flex flex-col justify-center gap-1 mx-auto sm-mx:w-full sm-mx:px-4">
        <div className="text-2xl font-semibold sm-mx:text-xl">Create Account</div>

        <TextInput
          name="name"
          error={formErrors.name}
          value={formData.name}
          onChange={handleChange}
          withAsterisk
          label="Full Name"
          placeholder="Your name"
        />

        <TextInput
          name="email"
          error={formErrors.email}
          value={formData.email}
          onChange={handleChange}
          withAsterisk
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Email"
          placeholder="Your email"
        />

        <PasswordInput
          name="password"
          error={formErrors.password}
          value={formData.password}
          onChange={handleChange}
          withAsterisk
          leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
          label="Password"
          placeholder="Password"
        />

        <PasswordInput
          name="confirmPassword"
          error={formErrors.confirmPassword}
          value={formData.confirmPassword}
          onChange={handleChange}
          withAsterisk
          leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
          label="Confirm Password"
          placeholder="Confirm password"
        />

        <Radio.Group
          value={formData.accountType}
          onChange={handleChange}
          label="You are?"
          withAsterisk
        >
          <Group mt="xs" className="sm-mx:flex-col sm-mx:gap-2">
            <Radio
              className="py-4 px-6 border has-[:checked]:border-blue-400 border-cape-cod-800 rounded-lg"
              value="APPLICANT"
              label="Applicant"
            />
            <Radio
              className="py-4 px-6 border has-[:checked]:border-blue-400 border-cape-cod-800 rounded-lg"
              value="COMPANY"
              label="Company"
            />
          </Group>
        </Radio.Group>

        <Checkbox 
          checked={termsAccepted}
          onChange={(event) => setTermsAccepted(event.currentTarget.checked)}
          label={
            <>
              I accept <Anchor onClick={() => setTermsModalOpened(true)}>terms & conditions</Anchor>
            </>
          }
        />

        <Button loading={loading} onClick={handleSubmit} variant="filled">
          Sign up
        </Button>

        <div className="mx-auto">
          Have an account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
        </div>
        <Divider label="Or register with" labelPosition="center" mb="lg" />
        <Group grow mb="xl">
          <GoogleButton radius="md" size="md" onClick={() => oauthLogin("google")} className={isDarkMode ? "!bg-cape-cod-900 !text-white" : ""}>
            Google
          </GoogleButton>
          <TwitterButton radius="md" size="md" onClick={() => oauthLogin("github")} className={isDarkMode ? "!bg-cape-cod-900 !text-white" : ""}>
            Github
          </TwitterButton>
        </Group>
      </div>

      <Modal
        opened={termsModalOpened}
        onClose={() => setTermsModalOpened(false)}
        title="Terms and Conditions"
        size="lg"
      >
        <div style={{ maxHeight: '550px', overflowY: 'auto' }}>
          <h2 className="text-xl font-bold">Stemlen Terms and Conditions</h2>
          <p>Welcome to Stemlen (the “Platform”), a job and hackathon portal operated by Stemlen. By accessing or using our Platform, you agree to be bound by these Terms and Conditions (“Terms”). If you do not agree with these Terms, please do not use our Platform.</p>
          <br />
          <h3 className="text-lg font-semibold">Eligibility and User Accounts</h3>
          <p>Eligibility: Only verified companies are permitted to post job listings and hackathon events on Stemlen. The Platform is designed exclusively for these entities; individual applicants are not authorized to post content.</p>
          <p>Account Registration: When registering, you represent and warrant that you have the authority to act on behalf of your organization and that all information provided is accurate and current.</p>
          <br />
          <h3 className="text-lg font-semibold">Services Provided</h3>
          <p>Job and Hackathon Listings: Stemlen offers a free service that allows verified companies to post job opportunities and hackathon events. There is no paid subscription service available on the Platform.</p>
          <p>Direct Interaction: All postings and interactions occur directly between Stemlen and the verified companies. There is no third-party involvement in the services provided on the Platform.</p>
          <br />
          <h3 className="text-lg font-semibold">Data Collection and Privacy</h3>
          <p>Information Collected: We collect personal data including your name, email address, and, if provided, a photo. This information is collected solely for account management, verification, and to enhance your experience on our Platform.</p>
          <p>Usage of Data: Your personal data will be used in accordance with our Privacy Policy, which details how we collect, use, store, and protect your information.</p>
          <p>Consent: By using our Platform, you consent to the collection and use of your personal information as described.</p>
          <h3 className="text-lg font-semibold">User Responsibilities and Conduct</h3>
          <p>Lawful Use: You agree to use the Platform only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the Platform.</p>
          <p>Accuracy of Postings: As a verified company, you are responsible for ensuring that all job listings and hackathon events you post are accurate, not misleading, and comply with all applicable laws and regulations.</p>
          <p>Security: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          <h3 className="text-lg font-semibold">Intellectual Property Rights</h3>
          <p>Ownership: All content and materials on Stemlen, including but not limited to logos, trademarks, text, graphics, and software, are the property of Stemlen or its licensors.</p>
          <p>Restrictions: You may not reproduce, distribute, modify, or create derivative works from any of our content without obtaining prior written consent from Stemlen.</p>
          <h3 className="text-lg font-semibold">Disclaimers and Limitation of Liability</h3>
          <p>No Third-Party Interaction: Stemlen does not involve any third-party interactions. All job and hackathon listings are provided directly by verified companies.</p>
          <p>“As-Is” Basis: The Platform is provided on an “as-is” and “as available” basis without any warranties of any kind, either express or implied.</p>
          <p>Accuracy of Information: While we strive to ensure the accuracy of information on the Platform, we do not guarantee the completeness or reliability of any job or hackathon postings. Stemlen is not liable for any errors, omissions, or inaccuracies in the content provided by users.</p>
          <p>Limitation of Liability: In no event shall Stemlen be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the Platform, even if Stemlen has been advised of the possibility of such damages.</p>
          <h3 className="text-lg font-semibold">Modifications to the Terms</h3>
          <p>Stemlen reserves the right to update or modify these Terms at any time without prior notice. Changes will become effective immediately upon posting on the Platform. Your continued use of the Platform after any modifications constitutes your acceptance of the new Terms.</p>
          <h3 className="text-lg font-semibold">Termination</h3>
          <p>Stemlen may, at its sole discretion, suspend or terminate your access to the Platform at any time without notice if you violate these Terms or engage in conduct that is harmful to Stemlen, its users, or any third party.</p>
          <h3 className="text-lg font-semibold">Governing Law</h3>
          <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
          <h3 className="text-lg font-semibold">Indemnification</h3>
          <p>You agree to indemnify, defend, and hold harmless Stemlen, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from your use of the Platform or violation of these Terms.</p>
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
          <p>Email: stemlen.co@gmail.com</p>
          <p>By using the Stemlen Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
          <p>This document is a sample Terms and Conditions agreement intended for informational purposes only. It is not a substitute for professional legal advice. Please consult with a qualified attorney to ensure that your Terms and Conditions comply with all applicable laws and adequately protect your business.</p>
        </div>
      </Modal>
    </>
  );
};

export default SignUp;
