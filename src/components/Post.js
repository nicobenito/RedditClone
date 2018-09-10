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
            <div div className="row">
                <span className={this.state.visited ? 'visited col-1' : 'notVisited col-1'} ></span>
                <div div className="col-10">
                    <span>Added {this.props.created} hours ago by {this.props.author}</span>
                    <h1>{this.props.title}</h1>
                    <img src={this.props.imgPath}></img>
                    <div className="row">
                        <h3 className="col-3">Voted: {this.props.voted}</h3>
                        <h3 className="col-5">{this.props.comments} comments</h3>
                    </div>
                    <button className="btn btn-danger col-12" onClick={this.dismissPost}> Dismiss post </button>
                </div>
            </div>
        </div>
        );
    }
}

export default Post;
