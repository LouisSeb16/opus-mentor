import React from "react";
import LoginForm from "./LoginForm";
import OnboardingLayout from "@/components/layout/onboarding-layout";

const LoginComponent = (props: any) => {
  return (
    <>
      <OnboardingLayout>
        <LoginForm {...props} />
      </OnboardingLayout>
    </>
  );
};

export default LoginComponent;
