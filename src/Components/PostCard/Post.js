import React, { Component } from 'react'
import {PostViewer} from './context';


export default class Post extends Component {
    render() {
        const {title, img, content} = this.props.post;
        return (

            <div className='row align-items-center py-4'>

                <PostViewer>
                    {value => (
                    <div className="img-container col-md-5">
                        <img src={img} alt="post" className="card-img-top" />
                    </div>)}
                </PostViewer>
                <div className="col-md-7 align-items-center">
                    <h3 className='my-2'>
                        {title}
                    </h3>
                    <p className="text-blue font-italic">
                        {content}
                    </p>
                    <button className='btn btn-outline-danger w-25 ms-auto'>Read More</button>
                </div>
                <div className='mt-5 border-bottom border-danger'></div>
            </div>

        );
    }
}


