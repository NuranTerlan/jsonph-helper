import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class AppDocumentRef extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="robots" content="index, follow" />
                    {/* Chrome, Firefox OS and Opera */}
                    <meta name="theme-color" content="#880000" />
                    {/* Windows Phone */}
                    <meta name="msapplication-navbutton-color" content="#880000" />
                    {/* iOS Safari */}
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="#880000"
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocumentRef;