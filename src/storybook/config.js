import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import StylesDecorator from "./StylesDecorator";

setOptions({
  name: "Noodless",
  url: "https://github.com/mirumee/saleor-storefront",
  goFullScreen: false,
  sidebarAnimations: true
});

addDecorator(StylesDecorator);

function loadStories() {
  require("./stories/components.js");
  require("./stories/base.js");
}

configure(loadStories, module);
