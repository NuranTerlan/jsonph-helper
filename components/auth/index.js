import React from "react";
import cn from "classnames";

import styles from "./login.module.scss";

import WelcomeBox from "./welcome-login";
import FormBtn from "../common/form/button";

const Login = ({ className, ...props}) => {

    // NOT SECRET. Don't do this on your own secure project !
    let key = "JSONPLACEHOLDER"

  return (
    <>
        <div className={cn(styles.container, className)} {...props}>
          <WelcomeBox appKey={key} />
          <FormBtn
            isLink
            url="https://my-json-server.typicode.com/NuranTerlan/blog-data"
            className={styles.server}
          >
            Application Server
          </FormBtn>
        </div>
    </>
  );
};

export default Login;
