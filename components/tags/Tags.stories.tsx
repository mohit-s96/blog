import React from "react";
import Tags from "./Tags";

export default {
  title: "Tag Button",
  component: Tags,
};

export const Small = () => <Tags variant="medium">#css 7</Tags>;
export const Medium = () => <Tags variant="small">#typescript 4</Tags>;
