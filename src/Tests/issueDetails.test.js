import React from 'react';
import { create } from "react-test-renderer";
import { CheckOutlined } from '@ant-design/icons';
import StatusTag from './../component/StatusTag/index';
import MarkdownGithub from 'react-markdown-github';

test('Test Status Tag Component in Issue Details', () => {
  const component = create(
    <StatusTag
        color='#fff'
        icon={<CheckOutlined/>}
        text={'Test Text'}
    />
);
  expect(component.toJSON()).toMatchSnapshot()
});

test('Test Github Markdown Component in Issue Details', () => {
  const component = create(
    <MarkdownGithub
        source='This is a test github comment body'
    />
);
  expect(component.toJSON()).toMatchSnapshot()
});