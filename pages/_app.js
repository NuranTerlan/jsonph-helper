import React from "react";
import { wrapper } from '../store/store';

import "../styles/globals.scss"


const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
