import React from "react";
import style from "@/styles/onboarding/index.module.scss";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className={style.formSection}>
      <h2>Welcome Back</h2>
      <p>Welcome Back, Please enter your details</p>

      <form action="">
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

      <h5>
        Not yet registered? <Link href={"/signup"}>Sign up</Link>
      </h5>
    </div>
  );
};

export default LoginForm;
