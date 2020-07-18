import React from 'react';
import { Input } from 'antd';
import './style.css';

const { Search } = Input;
const InputField = props => (
    <Search
        {...props}
        onSearch={props.onPressEnter}
        placeholder="username/repo"
        className="issues-search-field"
        enterButton="Search"
    />
);

export default InputField;
