import React from 'react';
import { Tag } from 'antd';
import './style.css';

const StatusTag = props => (
    <Tag
        {...props}
        closable={false}
        className="issue-status-tag"
    >
        {props.text}
    </Tag>
);
export default StatusTag;
