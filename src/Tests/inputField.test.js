import React from 'react';
import { create } from "react-test-renderer";
import InputField from '../component/InputField/index';

test('Test Input Field Component', () => {
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