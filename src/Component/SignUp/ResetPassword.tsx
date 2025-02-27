import { Button, Modal, TextInput, PinInput, Flex, PasswordInput, rem } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePassword, sendOtp, verifyOtp } from "../../Services/UserService";
import { SignUpValidation } from "../../Services/FormValidation";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [otp, setOtp] = useState("");
  const [emailError, setEmailError] = useState("");
  const [verified, setVerified] = useState(false);
  const [resendLoader, setResendLoader] = useState(false); 
  const [seconds, setSeconds] = useState(60);
  const interval = useInterval(() => {
    if (seconds === 0) {
      setResendLoader(false);
      setSeconds(60);
      interval.stop();
    } else {
      setSeconds((s) => s - 1);
    }
  }, 1000);

  const handleSendOtp = async () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email address.");
      return;
    }

    setEmailError(""); 
    setOtpSending(true);
    try {
      const res = await sendOtp(email);
      console.log("OTP sent successfully", res);
      successNotification("OTP sent successfully, please check your email");
      setOtpSent(true);
      setResendLoader(true);
      interval.start();
    } catch (err) {
      console.error("OTP send error", err);
      const errorMessage = (err as any)?.response?.data?.errorMessage || "User not found with this email";
      errorNotification(errorMessage, "OTP sending failed");
    } finally {
      setOtpSending(false);
    }
  };

  const handleVerifyOtp = (otp: string) => {
    verifyOtp(email, otp).then((res) => {
      console.log("OTP verified successfully", res);
      successNotification("OTP verified successfully", "Enter new password");
      setVerified(true); 
      setOtp("");
    }).catch((err) => {
      console.error("OTP verification error", err);
      errorNotification(err?.response?.data?.errorMessage || "Invalid OTP", "OTP verification failed");
    });
  };
  
  const resendOtp = () => {
    if (resendLoader) return;
    handleSendOtp();
  };

  const changeEmailS = () => {
    setOtpSent(false);
    setResendLoader(false);
    setSeconds(60);
    setVerified(false);
    setOtp(""); // Clear OTP state
    setPassword(""); // Clear password field
    setPassErr(""); // Clear password validation error
    interval.stop();
  };

  const handleResetPassword = () => {   
    changePassword(email, password).then((res) => {
      console.log("Password changed successfully", res);
      successNotification("Password changed successfully", "You can now login with new password");
      props.close();
      // Clear fields after password reset
      setEmail("");
      setPassword("");
      setOtpSent(false);
      setOtp("");
      setVerified(false);
    }).catch((err) => {
      console.error("Password change error", err);
      errorNotification(err?.response?.data?.errorMessage || "Password change failed", "Password change failed");
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password">
      <div>
        <TextInput
          value={email}
          name="email"
          size="md"
          onChange={(e) => setEmail(e.target.value)}
          leftSection={<IconAt size={16} />}
          label="Email"
          placeholder="Enter your email"
          withAsterisk
          error={emailError}
          rightSection={
            <Button
              loading={otpSending && !otpSent}
              onClick={handleSendOtp}
              size="xs"
              disabled={email === "" || otpSent}
              variant="filled"
            >
              {otpSent ? "Sent" : "Send"}
            </Button>
          }
          rightSectionWidth={90}
        />

        {otpSent && (
          <Flex mt="md" justify="center" align="center">
            <PinInput
              length={6}
              type="number"
              value={otp}
              onChange={setOtp}
              size="md"
              placeholder="0"
              onComplete={handleVerifyOtp}
            />
          </Flex>
        )}
        {otpSent && !verified && (
          <div className="flex gap-2 mt-4">
            <Button
              color="blue.4"
              fullWidth
              loading={otpSending}
              onClick={resendOtp}
              autoContrast
              variant="light"
            >
              {resendLoader ? `Resend in ${seconds}s` : "Resend OTP"}
            </Button>
            <Button
              fullWidth
              onClick={changeEmailS}
              autoContrast
              variant="filled"
            >
              Change Email
            </Button>
          </div>
        )}
        {verified && (
          <PasswordInput
            name="password"
            withAsterisk
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
              setPassErr(SignUpValidation("password", e.currentTarget.value));
            }}
            error={passErr}
            leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
            label="Password"
            placeholder="Password"
            mt="md"
          />
        )}
        {verified && (
          <Button
            fullWidth
            onClick={handleResetPassword}
            autoContrast
            variant="filled"
            mt="md"
          >
            Change Password
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ResetPassword;
