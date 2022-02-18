import React from 'react';
import ReactDOM from 'react';

const CommentDetail=props=>{
    return (
    <div style={{}} className="comment">
                <a href="/" className="avatar">
                    <img alt='avatar' />
                </a>
                <div className="comment">

                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date"> {props.timeAgo}</span>
                </div>
                <div className="text">{props.blog}</div>
            </div>
        </div>
    );
};
export default CommentDetail;