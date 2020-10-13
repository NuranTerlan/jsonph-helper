import React from "react";
import cn from "classnames";

import styles from "./login.module.scss";

import WelcomeBox from "./welcome-login";
import FormBtn from "../common/form/button";

const Login = ({ className, ...props}) => {
  return (
    <>
        <div className={cn(styles.container, className)} {...props}>
          <WelcomeBox />
          <FormBtn
            isLink
            url="https://jsonplaceholder.typicode.com/"
            className={styles.server}
          >
            Application Server
          </FormBtn>
        </div>
    </>
  );
};

export default Login;
