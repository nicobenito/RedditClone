import React, { Component } from 'react';
import '../style/Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.selectPost = this.selectPost.bind(this);
      }
    
      selectPost() {
        this.props.onSelect({
            title: this.props.title,
            imgUrl:this.props.imgPath,
            desc: this.props.title
        });
      };

    render() {
        return (
        <div className="Post" onClick={this.selectPost}>
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.imgPath}></img>
            </div>
        </div>
        );
    }
}

export default Post;
