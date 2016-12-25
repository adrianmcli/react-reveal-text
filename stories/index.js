import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TestWrapper from '../src/TestWrapper';
import MyComponent from '../src/index';

const CenterDecorator = (story) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }}>
    <TestWrapper>
      {story()}
    </TestWrapper>
  </div>
);

storiesOf('Examples', module)
  .addDecorator(CenterDecorator)
  .add('Default', () => (
    <MyComponent />
  ))
  .add('Normal', () => (
    <MyComponent text="INFINITY ONE" />
  ))
  .add('Short', () => (
    <MyComponent text="HELLO" />
  ))
  .add('Long', () => (
    <MyComponent text="IN A GALAXY FAR FAR AWAY" />
  ))
  .add('Lowercase', () => (
    <MyComponent text="hello world" />
  ));
