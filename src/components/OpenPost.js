import React, { Component } from 'react';
import PostList from './PostList';

class OpenPost extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: "",
            imgUrl: "",
            desc: ""
        }
      }
    
    onSelect = (post) => {
        this.setState({
            title: post.title,
            imgUrl: post.imgUrl,
            desc: post.title
        });
    };

    render() {
        return (
        <div className="OpenPost" className="container-fluid">
            <div className="row">
                <PostList onSelect={this.onSelect} />
                <div className="col-8">
                    <h1>{this.state.title}</h1>
                    <img src={this.state.imgUrl}></img>
                    <p>{this.state.title}</p>
                </div>
            </div>
        </div>
        );
  }
}

export default OpenPost;
