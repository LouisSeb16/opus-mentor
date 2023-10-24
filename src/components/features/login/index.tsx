import React from "react";
import LoginForm from "./LoginForm";
import OnboardingLayout from "@/components/layout/onboarding-layout";

const LoginComponent = () => {
  return (
    <>
      <OnboardingLayout>
        <LoginForm />
      </OnboardingLayout>
    </>
  );
};

export default LoginComponent;
