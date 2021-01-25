
import React from "react";
import { connect } from "react-redux";
import { getPosts } from "../../redux/postsReducer";
import Content from "./Content";

function ContentContainer({posts, getPosts, ...props}){
    React.useEffect(() => {
        getPosts();
    }, [])

    return <Content posts={posts} />
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        item: state.auth
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, {getPosts})(ContentContainer);