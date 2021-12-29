import * as React from "react";
import Main from "./Main";

export default {
    title:"Main docs",
    component:"Main"
}

const Template = (args) => <Main {...args}>Click Me</Main>;

export const Basic = Template.bind({});
Basic.args = {
    theme:"primary"
}
