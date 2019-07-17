import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { boolean, select } from "@storybook/addon-knobs";

import Text, { Text as TextComponent } from "./Text";
import { sizes } from "../__private/withTextProps";

storiesOf("Text", module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [TextComponent],
      propTablesExclude: [Text]
    })
  )
  .add("Sizes", () => (
    <div style={{paddingLeft: '40px'}}>
      <Text
        component={"h1"}
        size={select("size", sizes, "heading1")}
        >
        Heading 1
      </Text>
    </div>
  ))
  .add("Overflow", () => (
    <div style={{ paddingLeft: '40px', width: '200px' }}>
      <Text
        component={"h2"}
        size={select("size", sizes, "heading1")}
        truncate={boolean("truncate", true)}
        breakWord={boolean("breakWord", false)}
        >
        A Good Title Should Be Long Enough to Make People Interesting
      </Text>
    </div>
  ))
  ;



