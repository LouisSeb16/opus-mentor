import React from "react";
import SignupForm from "./SignupForm";
import OnboardingLayout from "@/components/layout/onboarding-layout";

const SignUpComponent = (props: any) => {
  return (
    <>
      <OnboardingLayout>
        <SignupForm {...props} />
      </OnboardingLayout>
    </>
  );
};

export default SignUpComponent;
