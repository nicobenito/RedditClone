import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <div>
            <h1>{this.props.title}</h1>
            <img src={this.props.imgPath}></img>
        </div>
      </div>
    );
  }
}

export default Post;
