import React from 'react';

import { getRandoms, randomToDelay } from './utils';

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.getDelays = this.getDelays.bind(this);
    this.renderToSpan = this.renderToSpan.bind(this);
  }

  getDelays() {
    const { text, threshold, delayMin, delayMax } = this.props;
    const textArray = text.split('');

    // generate random numbers and then convert to delays
    const randoms = () => getRandoms(textArray, threshold);
    const toDelay = num => randomToDelay(num, delayMin, delayMax);

    return randoms().map(toDelay);
  }

  renderToSpan({ character, delay }) {
    const { show, transitionTime } = this.props;
    const style = {
      opacity: show ? '1' : '0',
      transition: `opacity ${transitionTime}ms`,
      transitionDelay: `${delay}ms`,
    };
    return <span style={style}>{character}</span>;
  }

  renderSpans() {
    const { text } = this.props;
    const textArray = text.split('');

    const delays = this.getDelays(textArray);
    const combineWithDelays =
      (character, index) => ({ character, delay: delays[index] });

    return textArray
      .map(combineWithDelays)
      .map(this.renderToSpan);
  }

  render() {
    const { style, className } = this.props;
    return (
      <div style={style} className={className || ''}>
        {this.renderSpans()}
      </div>
    );
  }
}

Component.propTypes = {
  text: React.PropTypes.string,
  show: React.PropTypes.boolean,
  transitionTime: React.PropTypes.integer,
  delayMin: React.PropTypes.integer,
  delayMax: React.PropTypes.integer,
  threshold: React.PropTypes.float,
  style: React.PropTypes.object,  // eslint-disable-line react/forbid-prop-types
  className: React.PropTypes.string,
};

Component.defaultProps = {
  text: 'REACT REVEAL TEXT',
  transitionTime: 1300,
  delayMin: 200,
  delayMax: 1200,
  threshold: 0.2,
  style: {
    fontSize: '24px',
    lineHeight: '36px',
    fontFamily: 'sans-serif',
    letterSpacing: '1.2em',
  },
};

export default Component;
