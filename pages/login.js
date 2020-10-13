import React, { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

import styles from "../styles/Login.module.scss";

import LayoutBuilder from "../components/layouts/layout";
import Login from "../components/auth/index";
import {connect} from "react-redux";

const LoginPage = ({ isLoggedIn }) => {
    useEffect(() => {
        if(isLoggedIn)
            Router.push("/posts");
    }, );

    return (
        <div className={styles.appContainer}>
            <Head>
                <title>JSONplaceholder &bull; UI &bull; Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LayoutBuilder>
                 <Login />
            </LayoutBuilder>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.repository.isLoggedIn
    }
}

export default connect(mapStateToProps)(LoginPage);