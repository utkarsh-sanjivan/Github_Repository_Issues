import React from 'react';
import { Comment } from 'antd';
import './style.css';

const CommentBox = props => (
    <Comment
        actions={props.actions}
        author={props.author}
        avatar={props.avatar}
        content={props.content}
        datetime={props.datetime}
    />
);
export default CommentBox;
