import React from "react";
import style from "@/styles/onboarding/index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginForm = (props: any) => {
  const {
    store: {},
    action: { signIn },
  } = props;

  return (
    <div className={style.formSection}>
      <h2>Welcome Back</h2>
      <p>Welcome Back, Please enter your details</p>

      {/* <form action="">
        <div id={style.formGroup}>
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
        <div id={style.formGroup}>
          <label htmlFor="">Password</label>
          <input type="text" />
        </div>
      </form>
      <button onClick={() => push("/dashboard/overview")}>Continue</button>
      <hr /> */}
      <button id={style.google} onClick={signIn}>
      <div>
        <img src="/images/logo/google.png" alt="" />
        </div>
        <p>Login with Google</p>
      </button>
      <h5>
        Not yet registered? <Link href={"/signup"}>Sign up</Link>
      </h5>
    </div>
  );
};

export default LoginForm;
