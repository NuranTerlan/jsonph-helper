import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getData } from "../../../store/actions/repositoryActions";
import { getPostsRequest } from "../../../axios/requestEndpoints";
import cn from "classnames";

import styles from "./posts.module.scss";

import Loader from "../../common/loader";
import PostCard from "./postcard";

const Posts = ({ loading, data, onGetData, className, ...props }) => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const getPostsAsync = async () => {
            await onGetData(getPostsRequest,{...props});
        }
        getPostsAsync();
    },[getPostsRequest]);

    useEffect(() => {
        if (Array.isArray(data))
            setPosts(data);
    },[data])

    return (
        <div className={cn(styles.postsContainer, className)}>
            <h1>Dummy Posts</h1>
            {loading === true ? <Loader /> : (
                <div className={styles.posts}>
                {posts && (posts.map(post => {
                    return <PostCard template={`/posts/${post.id}`} link={"/posts/[id]"} key={post.id} num={post.id} title={post.title} />
                }))}
            </div>)}
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
      onGetData: (url, props) => getData(url, props)
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);