import React, { Component } from 'react';
import '../style/Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visited: false,
            removed: false
         }
        this.selectPost = this.selectPost.bind(this);
        this.dismissPost = this.dismissPost.bind(this);        
      }
    
      selectPost() {
        this.setState({visited: true});
        this.props.onSelect({
            title: this.props.title,
            imgUrl:this.props.imgPath,
            desc: this.props.title
        });
      };

      dismissPost(e) {
        e.stopPropagation();
        this.setState({removed: true});
      };
    
    render() {
        return (
        <div className={this.state.removed ? 'hiddenPost' : 'Post'} onClick={this.selectPost}>
            <div>
                <span className={this.state.visited ? 'visited' : 'notVisited'}>Viewed</span>
                <h1>{this.props.title}</h1>
                <img src={this.props.imgPath}></img>
                <h3>Voted: {this.props.voted}</h3>
                <h3>{this.props.comments} comments</h3>
                <span>Added {this.props.created} hours ago</span>
                <button onClick={this.dismissPost}> Dismiss post </button>
            </div>
        </div>
        );
    }
}

export default Post;
