import React from "react";

const PostCard = ({ post, onClick }) => {
    const { title, excerpt, image } = post;

    return (
        <div style={styles.card} onClick={() => onClick(post)}>
         
                <img
                    src={post.img}
                    alt={title}
                    style={styles.image}
                />

            <p>{post.tags}</p>
            <h3>{title}</h3>
            <p>{`${post.autor} ${post.date} ${post.views} views`}</p>
            <p>Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…</p>
            
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s",
    },
    image: {
        width: "100%",
        height: "auto",
    },
    title: {
        margin: "1rem 0 0.5rem",
        fontSize: "1.25rem",
    },
    excerpt: {
        margin: "0 1rem 1rem",
        color: "#555",
    },
};

export default PostCard;
