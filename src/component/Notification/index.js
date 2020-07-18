import React from 'react';
import { notification } from 'antd';
import './style.css';

/* eslint-disable react/prefer-stateless-function */
const notify = props => {
  notification.open({
    style: {   
      marginLeft:20,
    },
    duration: 3,
    placement: 'bottomLeft',
    ...props,
});
}

export default notify;
