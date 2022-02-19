import { format, formatDistance } from "date-fns";
import { useTheme } from "next-themes";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MY_GH_AVATR } from "../../../constants";
import { CommentSchema } from "../../../types/blogtypes";
import DropDown from "../dropdown/dropdown";
import { EllipsesIcon } from "../svg/collection.svg";
import { CommentListContext, GithubAuthContext } from "./provider";

type Props = {
  editRef: React.RefObject<HTMLDivElement>;
};
type ComntProps = {
  schema: CommentSchema;
  eref: React.RefObject<HTMLDivElement>;
  edit: (schema: CommentSchema) => void;
  deleteComment: () => any;
  setReply: (
    data: Pick<
      CommentSchema,
      "inReplyToComment" | "inReplyToUsername" | "inReplyToUser"
    >
  ) => void;
};
function SingleComment({
  schema: {
    author,
    authorAvatar,
    authorGhId,
    blogId,
    body,
    createdAt,
    hasMarkdown,
    html,
    inReplyToComment,
    inReplyToUsername,
    lastUpdated,
    _id,
  },
  schema,
  eref,
  edit,
  deleteComment,
  setReply,
}: ComntProps) {
  const dropDownRef = useRef<HTMLButtonElement>(null);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const { user } = useContext(GithubAuthContext);
  const { theme } = useTheme();

  function editComment() {
    edit(schema);
    eref.current?.scrollIntoView();
  }

  function startReplyFlow() {
    setReply({
      inReplyToComment: _id as string,
      inReplyToUser: authorGhId,
      inReplyToUsername: author,
    });
    eref.current?.scrollIntoView();
  }

  return (
    <div
      className="border-primary-accent-light border-r-[4px] my-4"
      id={_id as string}
    >
      <div className="flex items-center bg-gray-100 dark:bg-[#0f1f36] border-gray-400 dark:border-[#03060a]  border-b-[1px]">
        <div className="w-10/12 flex items-center p-2 ">
          <div className="w-8 h-8 overflow-hidden rounded-full mr-4">
            <img
              className="w-full h-full"
              src={authorAvatar || MY_GH_AVATR}
              alt={`${author}'s github avatar`}
            />
          </div>
          <a
            href={`https://github.com/${author}`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="text-sm font-bold px-2 text-primary-accent-light"
          >
            &gt; {author}
          </a>
          <span className="2xl:text-sm font-bold px-2 text-gray-400 text-xsm hidden md:inline">
            commented on
          </span>
          <span className="2xl:text-sm font-bold px-2 text-gray-400 text-xsm hidden md:inline">
            {format(createdAt, "do MMM, yy")}
          </span>
          <span className="2xl:text-sm font-bold px-2 text-gray-400 text-xsm md:hidden">
            {formatDistance(createdAt, Date.now(), { addSuffix: true })}
          </span>
          {lastUpdated ? (
            <span className="2xl:text-sm font-bold px-2 text-gray-400 text-xsm hidden md:inline">
              [edited: {format(lastUpdated, "do MMM, yy")}]
            </span>
          ) : null}
          {/* <span className="mx-2">
            <ReplyIcon color="gray" />
          </span> */}
        </div>
        {user?.id === authorGhId ? (
          <div
            className="w-2/12 flex items-end flex-col relative"
            onBlur={(e) => {
              // fix for blur on child focus
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setOptionsVisible(false);
              }
            }}
          >
            <button
              className="pr-4"
              onClick={() => setOptionsVisible(!optionsVisible)}
            >
              <EllipsesIcon color={theme === "dark" ? "#fff" : "gray"} />
            </button>
            <DropDown
              visible={optionsVisible}
              fref={dropDownRef}
              className="mr-4 mt-2 top-[75%] border-0 shadow-sm dark:bg-accent-low-opa bg-gray-200"
            >
              <>
                <button
                  onClick={editComment}
                  className="justify-start flex w-full p-2 hover:bg-primary-accent-light hover:text-white duration-200 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={deleteComment}
                  className="justify-start flex w-full p-2 hover:bg-primary-accent-light hover:text-white duration-200 transition-all"
                >
                  Delete
                </button>
              </>
            </DropDown>
          </div>
        ) : null}
      </div>
      {inReplyToUsername ? (
        <a
          href={`#${inReplyToComment}`}
          className="text-xsm mt-2 inline-block text-center p-1 font-bold text-white bg-primary-accent-light rounded-md"
        >
          &gt; replying to - {inReplyToUsername}
        </a>
      ) : null}
      {hasMarkdown ? (
        <p
          dangerouslySetInnerHTML={{ __html: html }}
          className="line-numbers md-render-parent pl-6 md:pl-14 p-2 text-sm md:w-10/12 mt-1 leading-7 dark:text-white text-primary-text-light"
        ></p>
      ) : (
        <p className="pl-6 md:pl-14 p-2 text-sm md:w-10/12 mt-1 leading-7 dark:text-white text-primary-text-light">
          {body}
        </p>
      )}
      {user?.id ? (
        <div className="flex py-2 justify-end w-10/12">
          <button
            onClick={startReplyFlow}
            className="text-xsm h-6 border bg-transparent border-primary-accent-light w-14 hover:bg-primary-accent-light transition-all duration-200"
          >
            reply
          </button>
        </div>
      ) : null}
    </div>
  );
}

function Comments({ editRef }: Props) {
  const {
    setReply,
    comments,
    error,
    loading,
    changeToEdit,
    fetchComments,
    delComment,
  } = useContext(CommentListContext);

  return (
    <div className="flex lg:p-5 p-1 w-full flex-col" id="comments">
      {error ? (
        <p className="p-2 text-center font-bold">
          <p className="text-red-500">
            something went wrong while fetching comments
          </p>
          <button
            onClick={() => fetchComments()}
            className="p-2 border-primary-accent-light border h-10 text-sm m-4"
          >
            try again
          </button>
        </p>
      ) : null}
      {/* <SingleComment /> */}
      {loading ? <div className="top-loader-line w-full"></div> : null}
      {comments.length ? (
        comments
          .sort((a, b) => a.createdAt - b.createdAt)
          // .reverse()
          .map((cmt) => (
            <SingleComment
              setReply={setReply}
              schema={cmt}
              eref={editRef}
              key={cmt._id as string}
              edit={changeToEdit}
              deleteComment={() => delComment(cmt._id as any)}
            />
          ))
      ) : !error ? (
        <div className="p-2 text-center font-bold text-primary-accent-light">
          No comments yet!!
        </div>
      ) : null}
    </div>
  );
}

export default Comments;
