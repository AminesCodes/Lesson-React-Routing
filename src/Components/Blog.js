import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import PostsApi from "../../PostsMockAPI";

import Post from "./Post";

class Blog extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const data = PostsApi.getAll();
    this.setState({ posts: data });
  }

  renderLinks = () => {
    return (
      <ul>
        {this.state.posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <h1>Blog</h1>
        <img
          alt="Logo"
          src="https://media.licdn.com/dms/image/C4D0BAQGB1__8MKYhMg/company-logo_200_200/0?e=2159024400&v=beta&t=UYg8C7dyynUVTDqm07H7JgKX3VlMhahdoGheSz7oWWs"
        />

        <Switch>
          <Route exact path="/blog" render={this.renderLinks} />
          <Route path="/blog/posts/:postID" component={Post} />
        </Switch>

        <hr />
        <br />
        <hr />
      </div>
    );
  }
}

export default Blog;
