import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, object, number, select } from '@storybook/addon-knobs';

import { setOptions } from '@storybook/addon-options';

import TestWrapper from '../src/TestWrapper';
import ReactRevealText from '../src/index';

export default () =>
  storiesOf('Documentation', module)
    .addDecorator(withKnobs)
    .add('Basic Properties', withInfo({
      propTables: false,
      inline: true,
      text: `
        This component has many props that you can manipulate. Please see below and use the knobs panel on the right to experiment.

        Note that the component only re-renders when the \`show\` property has been changed.

        # Basic Properties

        **text** *(string)*  
        You can set the text either by passing in text as children or by using the text property.

        **show** *(boolean)*  
        This prop allows you to control what state the component is in. It allows you to hide or reveal the text.

        **className** *(string)*  
        This prop allows you to set the className for the div surrounding the text.

        **style** *(object)*  
        This prop allows you to pass in styles for the div surrounding the text.
      `,
    })(() => {
      setOptions({ showDownPanel: true });
      return (
        <ReactRevealText
          text={text('text', 'AMAZING TEXT')}
          show={boolean('show', true)}
          className={text('className', 'my-class-name')}
          style={object('style', {
            color: 'tomato',
            fontSize: '24px',
            lineHeight: '36px',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            letterSpacing: '1.2em',
            paddingLeft: '1.2em', // to compensate for letter spacing
          })}
        />
      );
    }))
    .add('Transition Properties', withInfo({
      propTables: false,
      inline: true,
      text: `
        Each letter has its own randomly generated delay before its transition begins.

        # Transition Properties

        **transitionTime** *(integer)* [default: 1300]  
        The time it takes for each letter's transition.

        **timingFunction** *(string)* [default: 'linear']  
        The CSS transition-timing-function property. On this page, you are given a dropdown selection, but in practice (and in the sandbox), you can enter in any valid string.

        **delayMin** *(integer)* [default: 200]  
        The minimum allowable delay before the transition for a letter is to begin.

        **delayMax** *(integer)* [default: 1200]  
        The maximum allowable delay before the transition for a letter is to begin.

        **threshold** *(float)* [default: 0.2]  
        The difference between the random numbers generated for each letter compared to the previous letter.
        Setting this higher will force the delays to be very different between each letter, spreading out the effect.
        Setting this lower will allow delays to be similar between letters, sometimes creating a chunking effect.
      `,
    })(() => {
      setOptions({ showDownPanel: true });
      const timingFnOptions = {
        linear: 'linear',
        ease: 'ease',
        'ease-in': 'ease-in',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
        'step-start': 'step-end',
      };
      const thresholdOptions = {
        range: true,
        min: 0,
        max: 0.5,
        step: 0.1,
      };
      return (
        <TestWrapper>
          <ReactRevealText
            transitionTime={number('transitionTime', 1300)}
            timingFunction={select('timingFunction', timingFnOptions, 'linear')}
            delayMin={number('delayMin', 200)}
            delayMax={number('delayMax', 1200)}
            threshold={number('threshold', 0.2, thresholdOptions)}
          >
            AMAZING TEXT!
          </ReactRevealText>
        </TestWrapper>
      );
    }))
    .add('Sandbox', withInfo({
      propTables: false,
      inline: true,
      text: `
        This page has all the properties for you to play with.

        Note that you can input \`timingFunction\` as a string on the knobs tab.
      `,
    })(() => {
      setOptions({ showDownPanel: true });
      const thresholdOptions = {
        range: true,
        min: 0,
        max: 0.5,
        step: 0.1,
      };
      return (
        <TestWrapper>
          <ReactRevealText
            text={text('text', 'AMAZING TEXT')}
            show={boolean('show', true)}
            className={text('className', 'my-class-name')}
            transitionTime={number('transitionTime', 1300)}
            timingFunction={text('timingFunction', 'linear')}
            delayMin={number('delayMin', 200)}
            delayMax={number('delayMax', 1200)}
            threshold={number('threshold', 0.2, thresholdOptions)}
            style={object('style', {
              color: 'tomato',
              fontSize: '24px',
              lineHeight: '36px',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              letterSpacing: '1.2em',
              paddingLeft: '1.2em', // to compensate for letter spacing
            })}
          />
        </TestWrapper>
      );
    }));
