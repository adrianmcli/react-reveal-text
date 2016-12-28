import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, object } from '@kadira/storybook-addon-knobs';

import { setOptions } from '@kadira/storybook-addon-options';

import TestWrapper from '../src/TestWrapper';
import ReactRevealText from '../src/index';

export default () =>
  storiesOf('Tutorial', module)
    .addDecorator(withKnobs)
    .addWithInfo('1. A controlled component',
      `
      React Reveal Text is a controlled component.

      That means you control its appearance by passing in a prop.
      In this case, it's the \`show\` prop.

      Open the "Knobs" tab on the right and try changing the state.
      `,
      () => {
        setOptions({ showDownPanel: true });
        return (
          <ReactRevealText show={boolean('show', false)}>
            WELCOME!
          </ReactRevealText>
        );
      },
      { propTables: false, inline: true, source: true },
    )

    .addWithInfo('2. Styling your text',
      `
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
      () => {
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
      },
      { propTables: false, inline: true, source: true },
    )

    .addWithInfo('3. Testing with TestWrapper',
      `
      This library ships with a component to help you develop with React Reveal Text.

      The TestWrapper component renders a button for you to toggle its
      show/hide state, and controls the ReactRevealText \`show\` prop for you.
      Any props you pass in will be passed through to its child.

      Simply import it like this and use it in the way shown below:

      ~~~jsx
      import TestWrapper from 'react-reveal-text/lib/TextWrapper';
      ~~~
      `,
      () => {
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
      },
      { propTables: false, inline: true },
    );
