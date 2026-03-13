import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";

export default function Upcoming({ category }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "dGmCLHeUoZT1xJuPdf2WfYccO86jwnPqtOIiLmsd0rPCUiYpC5";

    fetch(
      `https://api.tumblr.com/v2/blog/kalikokalikova/posts?api_key=${API_KEY}&limit=5`,
    )
      .then((res) => res.json())
      .then((data) => {
        // Tumblr wraps the data in a "response" object
        const blogPosts = data.response.posts;
        console.log(blogPosts);
        setPosts(blogPosts);
        setLoading(false);
      })
      .catch((err) => console.error("Tumblr Fetch Error:", err));
  }, []);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Container sx={{ maxWidth: "900px !important" }}>
      {posts.map((post) => (
        <Box key={post.id} sx={{ border: "1px solid chartreuse", borderRadius: "10px", backgroundColor: "#00000087", padding: "10px" }}>
          {/* <Typography variant="h6" sx={{ marginBottom: "10px"}}>{post.summary}</Typography> */}

          {/* photo post? */}
          {post.type === "photo" && post.photos && (
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                mt: 2,
              }}
              src={post.photos[0].original_size.url}
              alt={post.summary}
            />
          )}

          {/* text post */}
          {post.type === "text" && (
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          )}
        </Box>
      ))}
    </Container>
  );
}
