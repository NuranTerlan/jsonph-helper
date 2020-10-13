import React, { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

import styles from "../styles/Posts.module.scss";

import LayoutBuilder from "../components/layouts/layout";
import Posts from "../components/layouts/posts";
import {connect} from "react-redux";

const PostsPage = ({ isLoggedIn }) => {
    useEffect(() => {
        if(!isLoggedIn)
            Router.push("/login");
    });

    return (
        <div className={styles.appContainer}>
            <Head>
                <title>JSONplaceholder &bull; UI &bull; Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LayoutBuilder>
                {isLoggedIn !== true ? (<h1 style={{textAlign: "center", marginTop: "2rem"}}>Unauthorized !</h1>) : <Posts />}
            </LayoutBuilder>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.repository.isLoggedIn
    }
}

export default connect(mapStateToProps)(PostsPage);