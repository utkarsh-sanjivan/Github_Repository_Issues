import React from 'react';
import { create } from "react-test-renderer";
import { CloseCircleOutlined } from '@ant-design/icons';
import notify from '../component/Notification/index';

test('Test Notification Component', () => {
  const component = create(notify({
    message: 'Please type in user/repo format',
    placement: 'topRight',
    icon: <CloseCircleOutlined/>,
    }));
  expect(component.toJSON()).toMatchSnapshot()
});