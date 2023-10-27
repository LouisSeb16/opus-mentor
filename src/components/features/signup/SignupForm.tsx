import React from "react";
import style from "@/styles/onboarding/index.module.scss";
import Link from "next/link";

const SignupForm = (props: any) => {
  const {
    store: { },
    action: { signIn },
  } = props;
  return (
    <div className={style.formSection}>
      <h2>Get Started</h2>
      <p>
        {`Note that the details required of you are solely for identification
        purposes. You are not required to use your original credentials. Any
        dummy data would suffice.`}
      </p>

      {/* <form action="">
        <div id={style.formGroup}>
          <label htmlFor="">Fullname</label>
          <input type="text" />
        </div>
        <div id={style.formGroup}>
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
        <div id={style.formGroup}>
          <label htmlFor="">Password</label>
          <input type="text" />
        </div>
      </form>
      <button>Continue</button>
      <hr /> */}
      <button id={style.google} onClick={signIn}>
        <div>
        <img src="/images/logo/google.png" alt="" />
        </div>
        <p>Sign up with Google</p>
      </button>

      <h5>
        Already registered? <Link href={"/login"}>Login</Link>
      </h5>
    </div>
  );
};

export default SignupForm;
