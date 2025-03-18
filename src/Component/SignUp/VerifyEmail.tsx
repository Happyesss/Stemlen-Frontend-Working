import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyEmail, resendVerificationEmail } from "../../Services/UserService";
import { Button, Loader, Alert, TextInput } from "@mantine/core";
import { IconAlertCircle, IconCheck, IconMail } from "@tabler/icons-react";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState<string>("Verifying your email...");
  const [cooldown, setCooldown] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const hasRun = useRef(false); // Prevent duplicate requests

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link. Please check your email.");
      return;
    }

    if (hasRun.current) return;
    hasRun.current = true;

    const verifyToken = async () => {
      try {
        const res = await verifyEmail(token);
        console.log("Verification response:", res);
        setStatus("success");
        setMessage("Your email has been successfully verified!");
      } catch (error: any) {
        setStatus("error");
        const errorMessage = error.response?.data?.message ||
          "Verification failed. The link may be expired or already used.";
        setMessage(errorMessage);
      }
    };

    verifyToken();
  }, [token]);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleResend = async () => {
    if (!email) {
      setEmailError("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setStatus("loading");
    try {
      await resendVerificationEmail(email);
      setCooldown(30);
      setStatus("success");
      setMessage("A new verification email has been sent. Please check your inbox.");
    } catch (error: any) {
      setStatus("error");
      const errorMessage =
        error.response?.data?.message ||
        "We couldn't resend the verification email. Please try again later.";
      setMessage(
        `${errorMessage} This email is already verified or not found in our system, please consider signing up again.`
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="w-full max-w-md space-y-6">
        {status === "loading" ? (
          <div className="flex flex-col items-center space-y-4">
            <Loader size="xl" variant="dots" />
            <p className="text-lg font-semibold text-gray-700">Sending verification email...</p>
          </div>
        ) : (
          <Alert color={status === "success" ? "green" : "red"} icon={status === "success" ? <IconCheck /> : <IconAlertCircle />} className="w-full">
            <p className="text-sm text-gray-700">{message}</p>
            {status === "error" && (
              <div className="mt-4 space-y-4">
                <TextInput
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  className="w-full"
                  required
                />
                <Button onClick={handleResend} color="blue" className="w-full" disabled={cooldown > 0} leftSection={<IconMail size={18} />}>
                  {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend Verification"}
                </Button>
              </div>
            )}
          </Alert>
        )}

        {status === "success" && (
          <Button component="a" href="/login" variant="outline" color="teal" className="w-full mt-4">
            Continue to Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
