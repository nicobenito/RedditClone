import React, { Component } from 'react';
import Post from './Post';
//import data from './data.json';

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
            <Post onSelect={this.props.onSelect} key={obj.id} id={obj.data.id} imgPath={obj.data.thumbnail} title={obj.data.title} />
                )
        })
        }

        return(
        <div className="col-4">
            {postListBlock}
        </div>
        )
    }
}

export default PostList;
