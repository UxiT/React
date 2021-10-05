import React from "react";
import Post from "./Post";
import st from "./post.module.css"


const Posts = (props) => {

    let posts = props.posts.map((post) => (
        <Post
            name={post.name}
            img={post.img}
            text={post.text}
            date={post.date}
            likes={post.likes}
            reposts={post.reposts} 
            key = {post.id}
            /> ));

    return (
        <div className={st.posts}>
            {posts}
        </div>
    );
}

export default Posts;