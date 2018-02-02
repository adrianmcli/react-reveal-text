import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ReactRevealText from '../src/index';

export default () =>
  storiesOf('Examples', module)
    .add('1. Show on load', withInfo({
      propTables: false,
      inline: true,
      source: false,
      text: `
        Here is an example that will reveal the text once the component has been mounted.

        # Source

        ~~~jsx
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
            return (
              <div style={{ border: '1px solid grey', textAlign: 'center' }}>
                <h1>
                  <ReactRevealText show={this.state.show}>
                    WELCOME TO MY SITE
                  </ReactRevealText>
                </h1>
              </div>
            );
          }
        }
        ~~~
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
          return (
            <div style={{ border: '1px solid grey', textAlign: 'center' }}>
              <h1>
                <ReactRevealText show={this.state.show}>
                  WELCOME TO MY SITE
                </ReactRevealText>
              </h1>
            </div>
          );
        }
      }

      return (
        <Wrapper />
      );
    }))
    .add('2. Show only on hover', withInfo({
      propTables: false,
      inline: true,
      source: false,
      text: `
        Here is an example that will reveal the text only when it is being hovered on top of.

        # Source

        ~~~jsx
        class Wrapper extends React.Component {

          constructor() {
            super();
            this.state = { show: false };
            this.onMouseEnter = this.onMouseEnter.bind(this);
            this.onMouseLeave = this.onMouseLeave.bind(this);
          }

          onMouseEnter() {
            console.log('true');
            this.setState({ show: true });
          }

          onMouseLeave() {
            console.log('false');
            this.setState({ show: false });
          }

          render() {
            return (
              <div
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                style={{ border: '1px solid grey', textAlign: 'center' }}
              >
                <h1>
                  <ReactRevealText show={this.state.show}>
                    WELCOME TO MY SITE
                  </ReactRevealText>
                </h1>
              </div>
            );
          }
        }
        ~~~
      `,
    })(() => {
      class Wrapper extends React.Component {
        constructor() {
          super();
          this.state = { show: false };
          this.onMouseEnter = this.onMouseEnter.bind(this);
          this.onMouseLeave = this.onMouseLeave.bind(this);
        }

        onMouseEnter() {
          this.setState({ show: true });
        }

        onMouseLeave() {
          this.setState({ show: false });
        }

        render() {
          return (
            <div
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              style={{ border: '1px solid grey', textAlign: 'center' }}
            >
              <h1>
                <ReactRevealText show={this.state.show}>
                  WELCOME TO MY SITE
                </ReactRevealText>
              </h1>
            </div>
          );
        }
      }

      return (
        <Wrapper />
      );
    }))
    .add('3. Pretty', withInfo({
      propTables: false,
      inline: true,
      source: false,
      text: `
        A simple example to show off how pretty the effect can look.

        Imagine this with a moving background!

        # Source

        ~~~jsx
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
                  <ReactRevealText show={this.state.show} text="WELCOME TO THE FUTURE" />
                </div>
              </div>
            );
          }
        }
        ~~~
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
                <ReactRevealText show={this.state.show} text="WELCOME TO THE FUTURE" />
              </div>
            </div>
          );
        }
      }

      return (
        <Wrapper />
      );
    }));
