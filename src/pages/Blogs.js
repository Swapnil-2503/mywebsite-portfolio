import React, { useState } from "react";
import BlogData from "../data/BlogData.json";
import "../styles/Blog.css";

function Blogs() {
  const [activePost, setActivePost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  function handlePostClick(post) {
    setActivePost(post);
  }

  function handleBackClick() {
    setActivePost(null);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  const filteredPosts = BlogData.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <div className="blog-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {activePost ? (
        <div className={`active-post ${activePost ? "open" : ""}`}>
          <h2>{activePost.title}</h2>
          <p>{activePost.date}</p>
          <img src={`${activePost.imageUrl}`} alt={activePost.title} />
          <div dangerouslySetInnerHTML={createMarkup(activePost.content)} />
          <button onClick={handleBackClick}>Back</button>
        </div>
      ) : (
        filteredPosts.map((post) => (
          <div
            key={post.id}
            className="blog-post"
            onClick={() => handlePostClick(post)}
          >
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <img src={`${post.imageUrl}`} alt={post.title} />
            <div dangerouslySetInnerHTML={createMarkup(post.summary)} />
          </div>
        ))
      )}
    </div>
  );
}
export default Blogs;

