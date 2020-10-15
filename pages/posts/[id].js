import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../../styles/Post.module.scss";

import LayoutBuilder from "../../components/layouts/layout";
import Post from "../../components/layouts/post";
import {connect} from "react-redux";

const SinglePost = ({ isLoggedIn }) => {
    let router = useRouter();

    useEffect(() => {
        if(!isLoggedIn)
            router.push("/login");
    });

    return (
        <div className={styles.appContainer}>
            <Head>
                <title>JSONplaceholder &bull; UI &bull; Post {`#${router.query.id}`}</title>
            </Head>

            <LayoutBuilder>
                {isLoggedIn !== true ? (<h1 style={{textAlign: "center", marginTop: "2rem"}}>Unauthorized !</h1>) : <Post />}
            </LayoutBuilder>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.repository.isLoggedIn
    }
}

export default connect(mapStateToProps)(SinglePost);