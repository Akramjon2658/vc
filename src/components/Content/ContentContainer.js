
import React from "react";
import { connect } from "react-redux";
import Content from "./Content";

function ContentContainer({messagePost,...props}){
    return <Content messagePost={messagePost} />
}

const mapStateToProps = (state) => {
    return {
        messagePost: state.posts.messagePost
    }
}

export default connect(mapStateToProps)(ContentContainer);