import React, { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

import styles from "../styles/Users.module.scss";

import LayoutBuilder from "../components/layouts/layout";
import {connect} from "react-redux";

const UsersPage = ({ isLoggedIn }) => {
    useEffect(() => {
        if(!isLoggedIn)
            Router.push("/login");
    });

    return (
        <div className={styles.appContainer}>
            <Head>
                <title>JSONplaceholder &bull; UI &bull; Users</title>
                <meta name="description" content="JSONPlaceholder Helper Project. Users from custom json server" />
            </Head>

            <LayoutBuilder>
                {isLoggedIn !== true ? (<h1 style={{textAlign: "center", marginTop: "2rem"}}>Unauthorized !</h1>) : (<h1 style={{textAlign: "center", marginTop: "2rem"}}>Users</h1>)}
            </LayoutBuilder>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.repository.isLoggedIn
    }
}

export default connect(mapStateToProps)(UsersPage);