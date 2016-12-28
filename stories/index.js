import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, object } from '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';

import TestWrapper from '../src/TestWrapper';
import ReactRevealText from '../src/index';

import styles from './styles.css';

import demo from './demo';
import tutorial from './tutorial';
import examples from './examples';
import documentation from './documentation';

demo();
tutorial();
examples();
documentation();
