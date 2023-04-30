import { format } from "date-fns";
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { BlogSlug } from "../../../types/blogtypes";
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

  const focusRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (highlighted) {
      focusRef.current?.focus();
    }
  }, [highlighted]);

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
      className={`p-2 m-2 flex flex-col w-[98%] mx-auto rounded-2xl dark:bg-primary-bg-dark bg-primary-bg-light `}
    >
      <div className="flex justify-between">
        <Link href={`/blog/${data.uri}`}>
          <a
            ref={focusRef}
            className={`font-bold py-2 dark:text-primary-light text-primary-dark text-sm-res cursor-pointer ${
              highlighted ? "border-primary-accent-light border-2" : ""
            }`}
            onClick={() => setVisible(false)}
          >
            {data.title}
          </a>
        </Link>
        <p className="p-2 text-sm dark:text-primary-light text-primary-dark text-sm-res">
          {format(data.createdAt as number, "do MMM, yy")}
        </p>
      </div>
      <div className="py-2">
        <p className="text-gray-600 dark:text-light-gray">
          {data.excerpt?.slice(0, 80)}
        </p>
      </div>
    </div>
  );
}

export default SearchResults;
