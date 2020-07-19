import { notification } from 'antd';
import './style.css';

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
