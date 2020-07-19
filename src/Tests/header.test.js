import React from 'react';
import { create } from "react-test-renderer";
import Header from '../component/Header/index';

test('Test Header Component', () => {
  const component = create(<Header />);
  expect(component.toJSON()).toMatchSnapshot()
});