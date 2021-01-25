
import React from "react";
import { connect } from "react-redux";
import { getPosts } from "../../redux/postsReducer";
import Content from "./Content";

function ContentContainer({posts, getPosts, ...props}){
    React.useEffect(() => {
        getPosts();
    }, [])

    const [itemCount, setItemCount] = React.useState(2);
    const [hide, setHide] = React.useState(false);

    const newPosts = posts.filter((i, index) => index < itemCount);

    return <Content posts={newPosts} setItemCount={setItemCount} hide={hide} setHide={setHide} />
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        item: state.auth
    }
}

export default connect(mapStateToProps, {getPosts})(ContentContainer);