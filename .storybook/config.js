import React from "react";
import "@storybook/addon-console";
import { configure, addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { themes } from "@storybook/theming";
import invokerStorybook from "./invokerStorybook";

addDecorator(withKnobs);
addDecorator(withInfo);

addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "right",
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: invokerStorybook
  }
});

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(Story => <Story />);

configure(loadStories, module);
