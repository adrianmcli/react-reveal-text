import { configure, setAddon } from '@kadira/storybook';

import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';

function loadStories() {
  require('../stories');
}

// set options for addons
setAddon(infoAddon);
setOptions({
  name: 'REACT REVEAL TEXT',
  url: 'https://github.com/adrianmcli/react-reveal-text',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

configure(loadStories, module);
