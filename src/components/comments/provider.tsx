import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
import { CommentSchema } from "../../../types/blogtypes";
import { useFetch } from "../../hooks/useFetch";
import Comments from "./comments";
import Editor from "./editor";
import Signin from "./signin";

export interface GithubUser {
  username: string | null;
  id: number | null;
  avatar: string | null;
}
export interface Auth {
  user: GithubUser | undefined;
  loading: boolean;
  fetchResource: (body?: string | undefined) => void;
}
export interface CommentEditor {
  body: string;
  hasMarkdown: boolean;
  inReplyToComment: string;
  inReplyToUser: number | string;
  _id: string;
  blogId: string;
  isEditingMode: boolean;
  inReplyToUsername: string;
  submitting: boolean;
  error: string;
  dispatch: React.Dispatch<Action>;
  post: (body?: string | undefined) => void;
}

const initialCommentEditorValue: CommentEditor = {
  body: "",
  hasMarkdown: false,
  inReplyToComment: "default",
  inReplyToUser: "default",
  _id: "",
  blogId: "",
  isEditingMode: false,
  inReplyToUsername: "",
  submitting: false,
  error: "",
  dispatch: () => {},
  post: () => {},
};
type EditorActionTypes =
  | "UPDATE_BODY"
  | "UPDATE_MD"
  | "UPDATE_REPLY"
  | "UPDATE_ID"
  | "UPDATE_EDIT_MODE"
  | "SET_LOADING"
  | "SET_ERROR";
type Action = {
  payload: any;
  type: EditorActionTypes;
};
const editorReducer = (
  state: CommentEditor,
  { payload, type }: Action
): CommentEditor => {
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        submitting: payload,
      };

    case "UPDATE_BODY":
      return {
        ...state,
        body: payload,
      };

    case "UPDATE_EDIT_MODE":
      return {
        ...state,
        isEditingMode: payload,
      };

    case "UPDATE_MD":
      return {
        ...state,
        hasMarkdown: !state.hasMarkdown,
      };

    case "UPDATE_ID":
      return {
        ...state,
        _id: payload,
      };

    case "UPDATE_REPLY":
      return {
        ...state,
        inReplyToComment: payload.commentId,
        inReplyToUser: payload.userId,
        inReplyToUsername: payload.username,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: payload,
        submitting: false,
      };
    default:
      return state;
  }
};
const initialAuthValue: Auth = {
  user: { username: null, id: null, avatar: null },
  loading: false,
  fetchResource: () => {},
};

export interface CommentContextType {
  comments: CommentSchema[];
  error: string;
  loading: boolean;
  fetchComments: (body?: string | undefined) => void;
}
export const GithubAuthContext = React.createContext<Auth>(initialAuthValue);
export const CommentEditorContext = React.createContext<CommentEditor>(
  initialCommentEditorValue
);
export const CommentListContext = React.createContext<CommentContextType | null>(
  null
);

async function fetcher(path: string) {
  const response = await fetch(path, { credentials: "include" });
  if (!response.ok) throw "error in authentication";
  const data = await response.json();
  return data as GithubUser;
}
export function getBlogId(): string {
  if (typeof window !== "undefined") {
    return window.location.href.split("/").at(-1)!;
  }
  return "";
}
async function commentFetcher(path: string) {
  const response = await fetch(path);
  if (!response.ok) {
    throw "error fetching comments";
  }
  const data = await response.json();
  return data as CommentSchema[];
}
async function postComment(path: string, body: string = "") {
  const response = await fetch(path, {
    credentials: "include",
    body,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw "error posting comment";

  const newcomment = await response.json();

  return newcomment as CommentSchema;
}
function CommentsProvider() {
  // const [comments, setComments] = useState<CommentSchema[]>([]);
  const [auth, setAuth] = useState<GithubUser>();

  const [comments, setComments] = useState<CommentSchema[]>([]);

  const [data, dispatch] = useReducer(editorReducer, initialCommentEditorValue);

  const { data: user, error, loading, fetchResource } = useFetch(
    "/api/auth",
    fetcher
  );

  const {
    data: comments_,
    error: commentError,
    loading: commentLoading,
    fetchResource: fetchComments,
  } = useFetch(`/api/comment/${getBlogId()}`, commentFetcher);

  const {
    data: newcomment,
    error: posterror,
    loading: posloading,
    fetchResource: post,
  } = useFetch(`/api/comment/${getBlogId()}`, postComment);

  useEffect(() => {
    if (newcomment) {
      setComments([...comments, newcomment]);
    }
    dispatch({
      type: "SET_LOADING",
      payload: posloading,
    });
    dispatch({
      type: "SET_ERROR",
      payload: posterror,
    });
  }, [newcomment, posloading, posterror]);

  useEffect(() => {
    fetchResource();
  }, []);

  useEffect(() => {
    if (comments_) setComments(comments_);
  }, [comments_]);

  useEffect(() => {
    if (user) {
      console.log(user);

      setAuth(user);
    } else {
      setAuth(undefined);
    }
  }, [user, error]);

  return (
    <div className="translate-y-[-8rem] 2xl:w-8/12 xl:w-9/12 md:w-10/12  w-full flex justify-center">
      <div className="2xl:w-9/12 xl:w-9/12 md:w-10/12  w-full ">
        <GithubAuthContext.Provider
          value={{ user: auth, loading, fetchResource }}
        >
          {!user ? <Signin /> : null}
          <CommentListContext.Provider
            value={{
              comments: comments!,
              loading: commentLoading,
              fetchComments,
              error: commentError,
            }}
          >
            <Comments />
          </CommentListContext.Provider>
          <CommentEditorContext.Provider value={{ ...data, dispatch, post }}>
            {user ? <Editor /> : null}
          </CommentEditorContext.Provider>
        </GithubAuthContext.Provider>
      </div>
    </div>
  );
}

export default CommentsProvider;
