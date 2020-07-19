import React from 'react';
import { create } from "react-test-renderer";
import { CloseCircleOutlined } from '@ant-design/icons';
import notify from '../../component/Notification';
import InputField from '../../component/InputField';

test('Test Input Field Component in Issue Search', () => {
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

test('Test Notification Component in Issue Search', () => {
  const component = create(notify({
    message: 'Please type in user/repo format',
    placement: 'topRight',
    icon: <CloseCircleOutlined/>,
    }));
  expect(component.toJSON()).toMatchSnapshot()
});
