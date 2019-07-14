import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { boolean, select } from "@storybook/addon-knobs";

import Button, { Button as ButtonComponent } from "./Button";
import { types } from "../__private/withTypeProps";
import { sizes } from "../__private/withSizeProps";

storiesOf("Button", module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [ButtonComponent],
      propTablesExclude: [Button]
    })
  )
  .add("default", () => (
    <Button
      as={select("as", ["button", "submit", "link"], "button")}
      type={select("type", types, "normal")}
      size={select("size", sizes, "regular")}
      disabled={boolean("disabled", false)}
      onClick={action("clicked")}
    >
      Hello Button
    </Button>
  ));
