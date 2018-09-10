import React, { Component } from 'react';
import PostList from './PostList';
//import '../style/App.css';

class OpenPost extends Component {
  render() {
    return (
      <div className="OpenPost">
        <div>
            <PostList />
        </div>
      </div>
    );
  }
}

export default OpenPost;
