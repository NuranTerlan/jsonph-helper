import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSingle } from "../../../store/actions/repositoryActions";
import { getPostRequest } from "../../../axios/requestEndpoints";
import cn from "classnames";

import styles from "./singlepost.module.scss";

import Loader from "../../common/loader";

const Post = ({ loading, data, onGetSingle, className, ...props }) => {
    let router = useRouter();
    let postId = router.query.id;
    const [post,setPost] = useState({});

    useEffect(() => {
        const getPostAsync = async () => {
            await onGetSingle(getPostRequest(postId),{...props});
        }
        getPostAsync();
    },[getPostRequest(postId)]);

    useEffect(() => {
        setPost(data);
    },[data])

    return (
        <div className={cn(styles.postContainer, className)}>
            {loading === true ? (
                <>
                    <h1>Post Loaded ...</h1>
                    <Loader />
                </>
                ) : (
                post && <div className={styles.postBody}>
                    <h1 className={styles.postTitle}>{post.title}</h1>
                    <p className={styles.postContent}>{post.body}</p>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.repository.loading,
        data: state.repository.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onGetSingle: (url, props) => getSingle(url, props)
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);