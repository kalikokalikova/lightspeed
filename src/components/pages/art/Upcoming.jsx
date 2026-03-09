import React, { useState, useEffect } from "react";

export default function Upcoming({ category }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We fetch all posts for your username
    fetch(`https://dev.to/api/articles?username=kalikokalikova`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPosts(data)});
  }, []);
  if (loading) return <p>Tuning the instruments...</p>;

  return (
    <div className="blog-container">
      {posts.map((post) => (
        <article key={post.id} className="post-card">
          <img
            src={
              post.cover_image ||
              post.social_image ||
              "https://via.placeholder.com/600x400"
            }
            alt={post.title}
          />{" "}
          <h3>{post.title}</h3>
        </article>
      ))}
    </div>
  );
}
