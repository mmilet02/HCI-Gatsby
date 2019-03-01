import React, { Component } from "react";
import "../styles/Styles.css";
import "../styles/Styles_blog.css";
import { Link } from "gatsby";

class Blogsearch extends Component {
  state = {
    search: ""
  };

  render() {
    var { posts } = this.props;
    const { search } = this.state;

    const postlist = posts
      .filter(post => {
        return post.node.frontmatter.title
          .toUpperCase()
          .includes(search.toUpperCase());
      })
      .map(post => {
        const { id, excerpt } = post.node;
        const { title, date, slug, cijena, slika } = post.node.frontmatter;
        return (
          <div className="blog" key={id}>
            <div className="blog_1dio">
              <Link to={`blog/${slug}`}>{title}</Link>
              <img
                className="slike_kartice"
                src={slika.publicURL}
                alt="slika-grada"
              />
              <p>Cijena: {cijena} kn</p>
            </div>
            <div className="blog_2dio">
              <p>{excerpt}</p>
              <Link className="detaljnije" to={`blog/${slug}`}>
                {" "}
                <input type="submit" value="Detaljnije" />
              </Link>
            </div>
          </div>
        );
      });

    return (
      <>
        <input
          className="search"
          type="search"
          value={this.state.search}
          onChange={e => this.setState({ search: e.target.value })}
          placeholder="Pretražuj gradove"
        />
        <div>{postlist}</div>
      </>
    );
  }
}

export default Blogsearch;
