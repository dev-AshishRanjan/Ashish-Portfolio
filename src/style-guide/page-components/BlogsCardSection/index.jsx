import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import BlogsCard from "@/style-guide/components/BlogsCard";
import { getPosts, client } from "@/utils/blog";
import Spinner from "@/style-guide/components/spinner";

const ProjectCardSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const { data } = await client.query({
      query: getPosts,
    });
    console.log({ data });
    setPosts(data?.publication?.posts?.edges);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.ProjectCardSection}>
          <h2>My Blogs</h2>
          <div className={styles.cards}>
            {/* map for cards */}
            {posts.map((ele) => {
              return (
                <BlogsCard
                  title={ele.node.title}
                  talk={ele.node.brief}
                  coverImage={ele.node.coverImage.url}
                  link={`https://techjourneyer.hashnode.dev/${ele.node.slug}`}
                />
              );
            })}
          </div>
          <a
            href="https://techjourneyer.hashnode.dev/"
            className="btn"
            target="_blank"
          >
            Visit Hashnode
          </a>
        </div>
      )}
    </>
  );
};

export default ProjectCardSection;
