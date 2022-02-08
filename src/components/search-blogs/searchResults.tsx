import { format } from "date-fns";
import React, { Dispatch, ReactElement, SetStateAction, useMemo } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import Tags from "../tags/Tags";
import Link from "next/link";
import useGlobalKeyBind from "../../hooks/useGlobalKeyBind";
import { BindOptions } from "../../../types/keyTypes";
import { useRouter } from "next/router";

interface Props {
  data: Partial<BlogSlug>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  highlighted?: boolean;
}

function SearchResults({ data, setVisible, highlighted }: Props): ReactElement {
  const { push } = useRouter();

  const options: BindOptions = useMemo(
    () => ({
      options: [
        {
          keys: ["enter"],
          callback: () => {
            if (highlighted) {
              setVisible(false);
              push(`/blog/${data.uri}`);
            }
          },
        },
      ],
    }),
    [highlighted]
  );

  useGlobalKeyBind(options);

  return (
    <div
      className={`p-2 m-2 flex flex-col w-[98%] mx-auto rounded-2xl dark:bg-primary-bg-dark bg-primary-bg-light ${
        highlighted ? "border-primary-accent-light border-2" : ""
      }`}
    >
      <div className="flex justify-between">
        <Link href={`/blog/${data.uri}`}>
          <p
            className="p-2 text-xl text-primary-accent-dark text-sm-res padding-0-res cursor-pointer"
            onClick={() => setVisible(false)}
          >
            {data.title}
          </p>
        </Link>
        <p className="p-2 text-xl text-primary-accent-dark text-sm-res padding-0-res">
          {format(data.createdAt as number, "do MMM, yy")}
        </p>
      </div>
      <div className="flex">
        {data.tags?.slice(0, 2).map((tag) => (
          <Tags
            key={tag}
            children={`#${tag}`}
            accent
            variant="sm"
            className="mr-2 font-bold p-2 padding-0-res rounded-none"
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
