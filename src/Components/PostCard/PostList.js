import React, { Component } from 'react';
import Post from './Post';
import {PostViewer} from './context';

export default class PostList extends Component {
    render() {
        return (

            <PostViewer>
                {value=> {
                return value.posts.map(post =>{
                    return <Post post={post} />;
                });
                }}
            </PostViewer>

        );
    }
}
