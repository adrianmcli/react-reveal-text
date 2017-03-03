React Reveal Text
---------------
[![npm](https://img.shields.io/npm/v/react-reveal-text.svg)](https://www.npmjs.com/package/react-reveal-text)
[![dependencies](https://img.shields.io/david/adrianmcli/react-reveal-text.svg)](https://github.com/adrianmcli/react-reveal-text/blob/master/package.json)
[![travis](https://img.shields.io/travis/adrianmcli/react-reveal-text.svg)](https://travis-ci.org/adrianmcli/react-reveal-text)
[![bithound](https://img.shields.io/bithound/code/github/adrianmcli/react-reveal-text.svg)](https://www.bithound.io/github/adrianmcli/react-reveal-text)
![license](https://img.shields.io/npm/l/react-reveal-text.svg)

A small react library for animating the revealing of text.

![gif animation](https://cloud.githubusercontent.com/assets/943555/21519497/988cbd5c-ccbb-11e6-9fa0-1911f133de61.gif)

### Demo/Tutorial available here: <a href="#">https://adrianmcli.github.io/react-reveal-text/</a>

The demo page was built with [React Storybook](https://github.com/storybooks/react-storybook).

Features 🎉
---------------

* **Simple** – Just plain ol' CSS transition animations.
* **Zero dependencies** – Keeping it light and lit up!
* **Flexible** – Choose your own easing function and timing.
* **Customizable** – Customize and theme like a regular div.
* **Dynamic** – Intelligent generation of random transition delay numbers.

Getting Started
---------------

1. Install:

  ```
  npm install --save react-reveal-text
  ```

2. Use:

  ```jsx
  <ReactRevealText>WELCOME!</ReactRevealText>
  ```

API
---------------

### Interactive docs with live-editable props [here](https://adrianmcli.github.io/react-reveal-text/?knob-text=AMAZING%20TEXT&knob-show=true&knob-className=my-class-name&knob-style=%7B%22color%22%3A%22tomato%22%2C%22fontSize%22%3A%2224px%22%2C%22lineHeight%22%3A%2236px%22%2C%22textAlign%22%3A%22center%22%2C%22fontFamily%22%3A%22sans-serif%22%2C%22letterSpacing%22%3A%221.2em%22%2C%22paddingLeft%22%3A%221.2em%22%7D&selectedKind=Documentation&selectedStory=Basic%20Properties&full=0&down=1&left=1&panelRight=1&downPanel=kadirahq%2Fstorybook-addon-knobs).

This component has many props that you can manipulate; below is a list of all of them.

Note that the component only re-renders when the `show` property has been changed.

## Basic Properties

- **text** *(string)*  
  You can set the text either by passing in text as children or by using the text property.

- **show** *(boolean)*  
  This prop allows you to control what state the component is in. It allows you to hide or reveal the text.

- **className** *(string)*  
  This prop allows you to set the className for the div surrounding the text.

- **style** *(object)*  
  This prop allows you to pass in styles for the div surrounding the text.

## Transition Properties

Each letter has its own randomly generated delay before its transition begins.

- **transitionTime** *(integer)* [default: 1300]  
  The time it takes for each letter's transition.

- **timingFunction** *(string)* [default: 'linear']  
  The CSS transition-timing-function property. On this page, you are given a dropdown selection, but in practice (and in the sandbox), you can enter in any valid string.

- **delayMin** *(integer)* [default: 200]  
  The minimum allowable delay before the transition for a letter is to begin.

- **delayMax** *(integer)* [default: 1200]  
  The maximum allowable delay before the transition for a letter is to begin.

- **threshold** *(float)* [default: 0.2]  
  The difference between the random numbers generated for each letter compared to the previous letter. Setting this higher will force the delays to be very different between each letter, spreading out the effect. Setting this lower will allow delays to be similar between letters, sometimes creating a chunking effect.

Contributing
---------------

This project was built using my two other tools: [React Build Lib](https://github.com/adrianmcli/react-build-lib) and [React Build Dist](https://github.com/adrianmcli/react-build-dist). These tools are still very early in development, so if you are building these libraries, you may encounter some bugs. PRs and issues are welcomed and encouraged! Should probably add some testing too.
