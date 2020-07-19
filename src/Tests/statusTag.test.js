import React from 'react';
import { create } from "react-test-renderer";
import StatusTag from '../component/StatusTag/index';
import { CheckOutlined } from '@ant-design/icons';

test('Test Status Tag Component', () => {
  const component = create(
    <StatusTag
        color='#fff'
        icon={<CheckOutlined/>}
        text={'Test Text'}
    />
);
  expect(component.toJSON()).toMatchSnapshot()
});