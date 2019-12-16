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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>

        <h1>The Cell Phone</h1>
        <p>
          A couple of months ago, my friend’s cousin (a single mother) bought a
          new cell phone. After a long day of work, she came home, placed her
          phone on the counter, and went watch to TV; her son came to her and
          asked if he could play with her new phone. She told him not to call
          anyone or mess with text messages, and he agreed.
        </p>
        <p>
          At around 11:20, she was drowsy, so she decided to tuck her son in and
          go to bed. She walked to his room and saw that he wasn’t there. She
          then ran over to her room to find him sleeping on her bed with the
          phone in his hand.
        </p>
        <p>
          Relieved, she picked her phone back up from his hand to inspect it.
          Browsing through it, she noticed only minor changes such as a new
          background, banner, etc., but then she opened up her saved pictures.
          She began deleting the pictures he had taken, until only one new
          picture remained.
        </p>
        <p>
          When she first saw it, she was in disbelief. It was her son sleeping
          on her bed, but the picture was taken by someone else above him... and
          it showed the left half of an elderly woman’s face.
        </p>
      </div>
    );
  }
}

export default Blog;
