import React from 'react';

import { getRandoms, randomToDelay } from './utils';

class ReactRevealText extends React.Component {

  constructor(props) {
    super(props);
    this.getDelays = this.getDelays.bind(this);
    this.renderToSpan = this.renderToSpan.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.show !== nextProps.show;
  }

  getDelays(length) {
    const { threshold, delayMin, delayMax } = this.props;

    // generate random numbers and then convert to delays
    const randoms = () => getRandoms(length, threshold);
    const toDelay = num => randomToDelay(num, delayMin, delayMax);

    return randoms().map(toDelay);
  }

  renderToSpan({ character, delay }, index) {
    const { show, transitionTime, timingFunction } = this.props;
    const style = {
      opacity: show ? '1' : '0',
      transition: `opacity ${transitionTime}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: timingFunction,
    };
    return <span key={index} style={style}>{character}</span>;
  }

  renderSpans(text) {
    const textArray = text.split('');

    const delays = this.getDelays(textArray.length);
    const combineWithDelays =
      (character, index) => ({ character, delay: delays[index] });

    return textArray
      .map(combineWithDelays)
      .map(this.renderToSpan);
  }

  render() {
    const { style, className } = this.props;
    const text = this.props.text || this.props.children;

    return (
      <div style={style} className={className}>
        {this.renderSpans(text)}
      </div>
    );
  }
}

ReactRevealText.propTypes = {
  text: React.PropTypes.string,
  show: React.PropTypes.bool,
  transitionTime: React.PropTypes.number,
  timingFunction: React.PropTypes.string,
  delayMin: React.PropTypes.number,
  delayMax: React.PropTypes.number,
  threshold: React.PropTypes.number,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  children: React.PropTypes.string,
};

ReactRevealText.defaultProps = {
  transitionTime: 1300,
  timingFunction: 'linear',
  delayMin: 200,
  delayMax: 1200,
  threshold: 0.2,
};

export default ReactRevealText;
