/* eslint-disable react/no-unused-state */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import TestWrapper from '../src/TestWrapper';
import ReactRevealText from '../src/index';

export default () =>
  storiesOf('Demo', module)
    .add('Revealing Text', withInfo({
      propTables: false,
      inline: true,
      source: false,
      text: `
          A simple component for revealing text in a gradual way.
    
          Each letter gets a transition applied to it with a random distribution of delays so that they come into (and out of) view sporadically.
    
          This controlled component is great for landing pages and anywhere you need to show some kind of transition.
    
          Inspired by Adam Schwartz's [Magic of CSS](http://adamschwartz.co/magic-of-css/chapters/6-transitions/).
        `,
    })(() => {
      class Wrapper extends React.Component {
        constructor() {
          super();
          this.state = { show: false };
        }

        componentDidMount() {
          setTimeout(() => {
            this.setState({ show: true });
          }, 2000);
        }

        render() {
          const bgStyles = {
            background: 'linear-gradient(135deg, #723362, #9d223c)',
            padding: '36px',
            paddingTop: '48px',
          };
          const textStyles = {
            color: 'white',
            fontSize: '24px',
            lineHeight: '36px',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            letterSpacing: '1em',
            paddingLeft: '1em', // to compensate for letter spacing
          };
          return (
            <div style={bgStyles}>
              <div style={textStyles}>
                <TestWrapper>
                  <ReactRevealText text="WELCOME TO THE FUTURE" />
                </TestWrapper>
              </div>
            </div>
          );
        }
      }

      return (
        <Wrapper />
      );
    }));
