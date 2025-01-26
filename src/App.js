import React, { useState, useEffect } from "react";
import PostList from "./components/postList";
import PostDetails from "./components/postDetails";
import Header from "./components/header";

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch(
                    "https://cloud.codesupply.co/endpoint/react/data.json"
                );
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ padding: "2rem" }}>
            <Header onSearch={setSearchQuery} />
            <PostList posts={filteredPosts} onPostClick={setSelectedPost} />
            {selectedPost && (
                <PostDetails post={selectedPost} onClose={() => setSelectedPost(null)} />
            )}
        </div>
    );
}

export default App;
