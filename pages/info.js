import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styles from "../styles/Info.module.scss";

import LayoutBuilder from "../components/layouts/layout";
import FormBtn from "../components/common/form/button";

const InfoPage = () => {
    let router = useRouter();

    return (
        <div className={styles.appContainer}>
            <Head>
                <title>JSONplaceholder &bull; UI &bull; About & License</title>
                <meta name="description" content="JSONPlaceholder Helper UI Custom Project. About jsonplaceholder. License/" />
            </Head>

            <LayoutBuilder className={styles.page}>
                <h1>About & License</h1>
                <FormBtn onClick={() => router.back()}>Back</FormBtn>
            </LayoutBuilder>
        </div>
    );
}

export default InfoPage;