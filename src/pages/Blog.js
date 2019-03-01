import React from "react";
import "../styles/Styles.css";
import "../styles/Styles_blog.css";
import { graphql } from "gatsby";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";
import Reklame from "../components/Reklame.js";
import Blogindex from "../components/Blogindex.js";
import Blogsearch from "../components/Blogsearch.js";

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to post
  }
}) => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="row1">
        <Reklame />

        <div className="main2">
          <Blogsearch posts={posts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___cijena, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            cijena
            title
            date
            slug
            slika {
              publicURL
            }
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
