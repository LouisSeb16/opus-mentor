import React from "react";
import style from "@/styles/onboarding/index.module.scss";
import Link from "next/link";

const SignupForm = () => {
  return (
    <div className={style.formSection}>
      <h2>Get Started</h2>
      <p>
        Note that the details required of you are solely for identification
        purposes. You're not required to use your original credentials. Any
        dummy data would suffice.
      </p>

      <form action="">
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
        <button>Continue</button>
      </form>

      <h5>
        Already registered? <Link href={"/login"}>Login</Link>
      </h5>
    </div>
  );
};

export default SignupForm;
