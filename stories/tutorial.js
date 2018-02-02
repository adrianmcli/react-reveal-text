import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';

import { setOptions } from '@storybook/addon-options';

import TestWrapper from '../src/TestWrapper';
import ReactRevealText from '../src/index';

// const stories = storiesOf('Tutorial', module);
// stories.addDecorator(withKnobs);

export default () =>
  storiesOf('Tutorial', module)
    .addDecorator(withKnobs)
    .add('1. A controlled component', withInfo({
      propTables: false,
      inline: true,
      source: true,
      text: `
        React Reveal Text is a controlled component.

        That means you control its appearance by passing in a prop.
        In this case, it's the \`show\` prop.

        Click the "Knobs" tab on the bottom and try changing the state.
      `,
    })(() => {
      setOptions({ showDownPanel: true });
      return (
        <ReactRevealText show={boolean('show', false)}>
          WELCOME!
        </ReactRevealText>
      );
    }))
    .add('2. Styling your text', withInfo({
      propTables: false,
      inline: true,
      source: true,
      text: `
        ~~~jsx
        <ReactRevealText
          show={true}
          style={myStyleObject}
          className="my-class-name"
        />
        ~~~

        You can style an object by passing in a style object into the \`styles\` prop.

        Or, you can also pass in a string to the \`className\` prop.

        Note that the component only re-renders when the \`show\` prop is changed.
      `,
    })(() => {
      setOptions({ showDownPanel: true });
      return (
        <ReactRevealText
          show={boolean('show', true)}
          style={object('style', {
            fontSize: '24px',
            lineHeight: '36px',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            letterSpacing: '1.2em',
            paddingLeft: '1.2em', // to compensate for letter spacing
          })}
        >
          WELCOME!
        </ReactRevealText>
      );
    }))
    .add('3. Testing with TestWrapper', withInfo({
      propTables: false,
      inline: true,
      text: `
        This library ships with a component to help you develop with React Reveal Text.

        The TestWrapper component renders a button for you to toggle its
        show/hide state, and controls the ReactRevealText \`show\` prop for you.
        Any props you pass in will be passed through to its child.

        Simply import it like this and use it in the way shown below:

        ~~~jsx
        import TestWrapper from 'react-reveal-text/lib/TextWrapper';
        ~~~
      `,
    })(() => {
      setOptions({ showDownPanel: true });
      return (
        <TestWrapper
          text={text('text', 'AMAZING TEXT')}
          style={object('style', {
              color: 'tomato',
              fontSize: '24px',
              lineHeight: '36px',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              letterSpacing: '1.2em',
              paddingLeft: '1.2em', // to compensate for letter spacing
            })}
        >
          <ReactRevealText />
        </TestWrapper>
      );
    }));
