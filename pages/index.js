import Head from "next/head";
import { useEffect } from "react";
import { connect } from "react-redux";
import Router from "next/router";

const FirstPage = ({ isLoggedIn }) => {

    useEffect(() => {
            if(!isLoggedIn)
                Router.push("/login");
            else
                Router.push("/posts")
    });
    return (
        <Head>
            <title>Welcome &bull; JSONplaceholder &bull; UI</title>
            <meta name="description" content="JSONPlaceholder Helper Project created for learning to use Redux state management tool in NextJs project. Redux with NextJs, React, Global State. Context in NextJs. Global Context in React. Created by DEVVHALE. Nuran Terlan 2020. devvhale. nuran terlan" />
            <meta name="google-site-verification" content="iKC2hErCRhHDyAcM9g93KcaEYgPDTORTKjsCf6nzYas" />
        </Head>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.repository.isLoggedIn
    }
}

export default connect(mapStateToProps)(FirstPage);


