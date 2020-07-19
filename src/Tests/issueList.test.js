import React from 'react';
import { create } from "react-test-renderer";
import { CloseCircleOutlined } from '@ant-design/icons';
import notify from '../component/Notification';
import InputField from '../component/InputField';
import TableDetails from '../component/TableDetails';

test('Test Input Field Component in Issue List', () => {
  const component = create(
    <InputField 
      loading={false}
      onPressEnter={event => {}}
      onChange={event => { }}
      value={'Test Text'}
    />
  );
  expect(component.toJSON()).toMatchSnapshot()
});

test('Test Notification Component in Issue List', () => {
  const component = create(notify({
    message: 'Please type in user/repo format',
    placement: 'topRight',
    icon: <CloseCircleOutlined/>,
    }));
  expect(component.toJSON()).toMatchSnapshot()
});

test('Test Table Details Component in Issue List', () => {
  const component = create(
    <TableDetails 
        current={1}
        dataSource={[]}
        loading={false}
        onChange={() => {}}
    />
);
  expect(component.toJSON()).toMatchSnapshot()
});