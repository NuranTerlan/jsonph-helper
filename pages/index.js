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
    return null;
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.repository.isLoggedIn
    }
}

export default connect(mapStateToProps)(FirstPage);


