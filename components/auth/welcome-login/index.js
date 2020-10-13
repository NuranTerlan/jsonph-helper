import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../../store/actions/repositoryActions";
import cn from "classnames";

import styles from "./welcome-login.module.scss";
import FormInput from "../../common/form/input";
import FormBtn from "../../common/form/button";

const WelcomeBox = ({ login, className }) => {

    const [key,setKey] = useState("");
    const [typeError,setTypeError] = useState("");

    const handleChange = (e) => {
        setKey(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE === key) {
            setTypeError("");
            login();
            // console.log("Logged in !")
        }
        else if (key === "")
            setTypeError(`Please fill the clip area above !`);
        else
            setTypeError(`Please type correctly !`);
    }

  return (
    <div className={cn(styles.box, className)}>
      <h1>Welcome</h1>
      <h2>
        Please type our key : “ <span>JSONPLACEHOLDER</span> ”
      </h2>
      <form>
        <FormInput onChange={(e) => handleChange(e)} value={key} isDashed />
          {typeError && <div className={styles.inputError}>{typeError}</div>}
        <div className={styles.buttons}>
          <FormBtn className={styles.info}>What is it?</FormBtn>
          <FormBtn onClick={(e) => handleSubmit(e)}>Login</FormBtn>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login: login
    }, dispatch)
}

export default connect(null,mapDispatchToProps)(WelcomeBox);
