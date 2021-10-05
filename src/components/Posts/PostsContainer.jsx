import { connect } from "react-redux";
import Posts from "./Posts";

let mapStaateToProps = (state) => {
    return (
        {
            posts: state.profilePage.posts,       
        }
    )
}

const PostsContainer = connect(mapStaateToProps)(Posts);

export default PostsContainer;