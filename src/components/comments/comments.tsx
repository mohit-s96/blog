import React, { useEffect } from "react";

type Props = {};

function SingleComment() {
  return (
    <div className="border-primary-accent-light border-r-[1px] mb-3">
      <div className="flex items-center">
        <div className="w-10 h-10 overflow-hidden rounded-full mr-4">
          <img
            className="w-full h-full"
            src="http://via.placeholder.com/10x10"
            alt="placeholder"
          />
        </div>
        <span className="text-sm font-bold px-2 text-primary-accent-light">
          &gt; msx47
        </span>
        <span className="text-sm font-bold px-2 text-gray-400">
          commented on
        </span>
        <span className="text-sm font-bold px-2 text-gray-400">
          1st Feb 2022
        </span>
      </div>
      <p className="p-2 text-sm w-10/12 mt-4 leading-7 dark:text-white text-primary-text-light">
        I'd just like to interject for a moment. What you're refering to as
        Linux, is in fact, GNU/Linux, or as I've recently taken to calling it,
        GNU plus Linux. Linux is not an operating system unto itself, but rather
        another free component of a fully functioning GNU system made useful by
        the GNU corelibs, shell utilities and vital system components comprising
        a full OS as defined by POSIX.
      </p>
    </div>
  );
}

function Comments({}: Props) {
  return (
    <div className="flex p-5 w-full">
      <SingleComment />
    </div>
  );
}

export default Comments;
