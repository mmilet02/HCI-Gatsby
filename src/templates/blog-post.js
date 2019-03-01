import React from "react";
import "../styles/Styles.css";
import "../styles/Styles_grad.css";
import "../styles/index.css";
import "../styles/reset.css";
import { graphql } from "gatsby";
import styles from "./styles.module.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "gatsby";

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Header />
      <Nav />
      <div className="row_3">
        <div className="row_33">
          <div className="strila">
            <Link to="Blog">
              <div className="strijela">
                <i className="far fa fa-arrow-left fa-2x" />
              </div>
            </Link>
          </div>
          <div>
            <h1>{post.frontmatter.title}</h1>
          </div>
          <div />
        </div>
        <div>
          <section
            className={styles.Post}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <input type="button" value="Kupi" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`;
