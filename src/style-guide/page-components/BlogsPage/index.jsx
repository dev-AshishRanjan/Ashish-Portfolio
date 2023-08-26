import React,{useState,useEffect} from "react";
import styles from "./style.module.scss";

import BlogsHero from '../../components/BlogsHero';
import BlogsCardSections from '../BlogsCardSection';

const BlogsPage = () => {
  return (
    <div className={styles.ProjectPageWrapper}>
      <div className={styles.ProjectPage}>
        <BlogsHero/>
        <BlogsCardSections/>
      </div>
    </div>
  );
};

export default BlogsPage;
