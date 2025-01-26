import React from "react";
import PostCard from "./postCard";
import "./postList.css";
const PostList = ({ posts, onPostClick }) => {
    return (
        <div className="parent">
        <div className="content">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} onClick={onPostClick} />
            ))}
        </div>
        </div>
    );
};

export default PostList;
