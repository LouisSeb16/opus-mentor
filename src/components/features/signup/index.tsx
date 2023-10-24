import React from "react";
import SignupForm from "./SignupForm";
import OnboardingLayout from "@/components/layout/onboarding-layout";

const SignUpComponent = () => {
  return (
    <>
      <OnboardingLayout>
        <SignupForm />
      </OnboardingLayout>
    </>
  );
};

export default SignUpComponent;
