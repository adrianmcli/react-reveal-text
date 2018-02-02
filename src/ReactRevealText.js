import React from 'react';
import PropTypes from 'prop-types';

import { getRandoms, randomToDelay } from './utils';

class ReactRevealText extends React.Component {
  constructor(props) {
    super(props);
    this.getDelays = this.getDelays.bind(this);
    this.renderToSpan = this.renderToSpan.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const showChanged = this.props.show !== nextProps.show;
    const textChanged = this.props.text !== nextProps.text;
    const childrenChanged = this.props.children !== nextProps.children;
    return showChanged || textChanged || childrenChanged;
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
  text: PropTypes.string,
  show: PropTypes.bool,
  transitionTime: PropTypes.number,
  timingFunction: PropTypes.string,
  delayMin: PropTypes.number,
  delayMax: PropTypes.number,
  threshold: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.string,
};

ReactRevealText.defaultProps = {
  transitionTime: 1300,
  timingFunction: 'linear',
  delayMin: 200,
  delayMax: 1200,
  threshold: 0.2,
  text: '',
  className: '',
  style: {},
  show: false,
  children: undefined,
};

export default ReactRevealText;
