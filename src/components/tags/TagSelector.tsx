import React, { ReactElement, useState } from "react";
import { SizeVariantType, ThemeType } from "../../../types/globalTypes";
import SortMenu from "../dropdown/SortMenu";
import { Solid } from "../svg/collection.svg";
import TagList from "./TagList";
import Tags from "./Tags";

export interface Props {
  theme: ThemeType;
  tags: Array<string>;
  variant: SizeVariantType;
}

function TagSelector({ tags, theme, variant }: Props): ReactElement {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="flex justify-between p-4">
      <TagList theme={theme} tags={tags} variant={variant} />
      <div className="flex flex-col p-2 relative">
        <Tags
          variant={variant}
          accent={true}
          className="mx-2 font-bold"
          callback={() => setMenuVisible(!menuVisible)}
        >
          Sort <Solid color="dark" />
        </Tags>
        <SortMenu visible={menuVisible} theme={theme} />
      </div>
    </div>
  );
}

export default TagSelector;
