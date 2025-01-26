import React from "react";

const PostDetails = ({ post, onClose }) => {
    if (!post) return null;

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <button style={styles.closeButton} onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
    },
    popup: {
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        width: "90%",
        maxWidth: "600px",
        textAlign: "center",
    },
    closeButton: {
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default PostDetails;
