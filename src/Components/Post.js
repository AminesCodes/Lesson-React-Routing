import React from "react";
import postsAPI from "../../PostsMockAPI";

class Post extends React.Component {
  state = {
    post: {}
  };

  componentDidMount() {
    let data = postsAPI.getOne(this.props.match.params.postID);
    this.setState({
      post: data
    });
  }

  render() {
    let { post } = this.state;

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default Post;
