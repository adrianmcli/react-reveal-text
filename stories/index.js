import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, object } from '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';

import TestWrapper from '../src/TestWrapper';
import ReactRevealText from '../src/index';

import styles from './styles.css';

storiesOf('Tutorial', module)
  .addDecorator(withKnobs)
  .addWithInfo('1. A controlled component',
    `
    ReactRevealText is a controlled component.

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
  )

storiesOf('Examples', module)
  .addDecorator(withKnobs)
  .addWithInfo('1. Show on load',
    `
    Here is an example that will reveal the text once the component has been mounted.

    # Source

    ~~~jsx
    class Wrapper extends React.Component {
      
      state = { show: false }
      
      componentDidMount() {
        setTimeout(() => {
          this.setState({ show: true });
        }, 2000)
      }

      render() {
        return (
          <div style={{border: '1px solid grey', textAlign: 'center'}}>
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
    () => {
      class Wrapper extends React.Component {
        
        state = { show: false }
        
        componentDidMount() {
          setTimeout(() => {
            this.setState({ show: true });
          }, 2000)
        }

        render() {
          return (
            <div style={{border: '1px solid grey', textAlign: 'center'}}>
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
    },
    { propTables: false, inline: true, source: false },
  )

  .addWithInfo('2. Show only on hover',
    `
    Here is an example that will reveal the text only when it is being hovered on top of.

    # Source

    ~~~jsx
    class Wrapper extends React.Component {
      
      state = { show: false }
      
      onMouseEnter = () => {
        console.log('true');
        this.setState({ show: true });
      }

      onMouseLeave = () => {
        console.log('false');
        this.setState({ show: false });
      }

      render() {
        return (
          <div style={{border: '1px solid grey', textAlign: 'center'}}>
            <h1
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
            >
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
    () => {
      class Wrapper extends React.Component {
        
        state = { show: false }
        
        onMouseEnter = () => {
          console.log('true');
          this.setState({ show: true });
        }

        onMouseLeave = () => {
          console.log('false');
          this.setState({ show: false });
        }

        render() {
          return (
            <div style={{border: '1px solid grey', textAlign: 'center'}}>
              <h1
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              >
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
    },
    { propTables: false, inline: true, source: false },
  )

  .addWithInfo('3. Pretty',
    `
    A simple example to show off how pretty the effect can look.

    Imagine this with a moving background!

    # Source

    ~~~jsx
    class Wrapper extends React.Component {
        
        state = { show: false }
        
        componentDidMount() {
          setTimeout(() => {
            this.setState({ show: true });
          }, 2000)
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
    () => {
      class Wrapper extends React.Component {
        
        state = { show: false }
        
        componentDidMount() {
          setTimeout(() => {
            this.setState({ show: true });
          }, 2000)
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
    },
    { propTables: false, inline: true, source: false },
  )

