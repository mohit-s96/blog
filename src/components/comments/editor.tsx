import { useRouter } from "next/router";
import React, { ChangeEvent, useContext } from "react";
import { PRIMARY_ACCENT_LIGHT } from "../../../constants";
import { UserSubmittedCommentSchema } from "../../../types/blogtypes";
import { Check } from "../svg/collection.svg";
import { CommentEditorContext, getBlogId } from "./provider";

type Props = {};

function Editor({}: Props) {
  const { pathname } = useRouter();
  const {
    body,
    dispatch,
    error,
    hasMarkdown,
    inReplyToUsername,
    submitting,
    post,
    inReplyToComment,
    inReplyToUser,
    _id,
    blogId,
    isEditingMode,
  } = useContext(CommentEditorContext);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.length <= 510) {
      dispatch({
        type: "UPDATE_BODY",
        payload: e.target.value,
      });
    }
  }

  function handleModeChange() {
    dispatch({
      type: "UPDATE_MD",
      payload: "",
    });
  }

  function handleSubmit() {
    dispatch({ type: "SET_ERROR", payload: "" });
    const schema: UserSubmittedCommentSchema = {
      blogId: getBlogId(),
      body,
      hasMarkdown,
      inReplyToComment,
      inReplyToUser,
    };

    post(JSON.stringify(schema));
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="p-5 rounded-[12px] bg-white dark:bg-accent-low-opa w-full">
        {submitting ? <div className="top-loader-line"></div> : null}
        <p className="text-xl font-semibold text-primary-accent-light cursor-pointer transition-all">
          leave your comment
        </p>{" "}
        <div className="flex justify-start">
          <p className="text-sm py-4 mr-4 dark:text-primary-text-dark text-primary-text-light font-bold">
            markdown: [{hasMarkdown ? "on" : "off"}]
          </p>
          <button onClick={handleModeChange}>
            <Check color={hasMarkdown ? PRIMARY_ACCENT_LIGHT : "#313131"} />
          </button>
        </div>
        {inReplyToUsername ? (
          <span className="text-xsm mb-4 inline-block text-center p-1 font-bold text-white bg-primary-accent-light rounded-md">
            &gt; replying to - msx47
          </span>
        ) : null}
        <textarea
          value={body}
          onChange={handleChange}
          className="border dark:border-gray-400 dark:focus-visible:border-[#1f6feb] editor-shadow max-h-[40vh] min-h-[10rem] px-3 text-sm p-2 mt-2 outline-none w-full resize-none rounded-lg placeholder-gray-400 bg-gray-100 dark:bg-[#010409] transition-all duration-200"
          placeholder="Add your comments here"
          style={{ resize: "vertical" }}
        ></textarea>
        <div className="flex justify-between mt-2">
          {" "}
          <div className="flex flex-col">
            <p
              className={`text-sm text-primary-accent-light ${
                body.length > 500 ? "text-red-400" : ""
              }`}
            >
              {body.length}/500
            </p>
            <p className="h-[1em] text-sm text-red-400 py-2 italic">
              {error ? error : null}
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className={`h-10 p-2 bg-transparent border border-primary-accent-light text-sm text-primary-accent-light dark:text-white rounded-sm transition-all cursor-pointer hover:bg-primary-accent-light hover:text-white duration-200 ${
              submitting ? "bg-gray-400" : ""
            }`}
          >
            Submit comment
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * .form-control.focus, .form-control:focus, .form-select.focus, .form-select:focus {
    border-color: var(--color-accent-emphasis);
    outline: none;
    box-shadow: var(--color-primer-shadow-focus);
}
 */

export default Editor;
