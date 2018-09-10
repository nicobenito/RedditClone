import React, { Component } from 'react';
import Post from './Post';
import '../style/PostList.css';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          postsData: []
        };
        this.componentWillMount = this.componentWillMount.bind(this);
       }
        
    componentWillMount() {
        import('../data/top.json')
            .then( response => {
            this.setState({
            postsData: response.data.children
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }
        
    render() {
        const postList = this.state.postsData;
        let postListBlock = '';

        if(postList.length > 0) {
        postListBlock = postList.map( obj => {
            return (
                <Post onSelect={this.props.onSelect} 
                    key={obj.id} id={obj.data.id} 
                    imgPath={obj.data.thumbnail} 
                    title={obj.data.title} 
                    voted={obj.data.ups} 
                    comments={obj.data.num_comments}
                    created={obj.data.created_utc}
                    author={obj.data.author} />
                )
        })
        }

        return(
        <div className="PostList scroll col-4">
            {postListBlock}
        </div>
        )
    }
}

export default PostList;
