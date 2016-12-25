import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TestWrapper from '../src/TestWrapper';
import MyComponent from '../src/index';

storiesOf('Dev', module)
  .add('Default', () => (
    <TestWrapper>
      <MyComponent />
    </TestWrapper>
  ))
  .add('Normal', () => (
    <TestWrapper>
      <MyComponent text="INFINITY ONE" />
    </TestWrapper>
  ))
  .add('Short', () => (
    <TestWrapper>
      <MyComponent text="HELLO" />
    </TestWrapper>
  ))
  .add('Long', () => (
    <TestWrapper>
      <MyComponent text="IN A GALAXY FAR FAR AWAY" />
    </TestWrapper>
  ))
  .add('Lowercase', () => (
    <TestWrapper>
      <MyComponent text="hello world" />
    </TestWrapper>
  ));
