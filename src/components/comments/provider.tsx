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
  dispatch: React.Dispatch<Action>;
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
  dispatch: () => {},
};
type EditorActionTypes =
  | "UPDATE_BODY"
  | "UPDATE_MD"
  | "UPDATE_REPLY"
  | "UPDATE_ID"
  | "UPDATE_EDIT_MODE"
  | "SET_LOADING";
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
        body: payload.length <= 500 ? payload : state.body,
      };

    case "UPDATE_EDIT_MODE":
      return {
        ...state,
        isEditingMode: payload,
      };

    case "UPDATE_MD":
      return {
        ...state,
        hasMarkdown: payload,
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
  error: boolean;
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
function getBlogId(pathname: string): string {
  return pathname.split("/").at(-1)!;
}
async function commentFetcher(path: string) {
  const response = await fetch(path);
  if (!response.ok) {
    throw "error fetching comments";
  }
  const data = await response.json();
  return data as CommentSchema[];
}
function CommentsProvider() {
  // const [comments, setComments] = useState<CommentSchema[]>([]);
  const [auth, setAuth] = useState<GithubUser>();

  const { pathname } = useRouter();

  const [data, dispatch] = useReducer(editorReducer, initialCommentEditorValue);

  const { data: user, error, loading, fetchResource } = useFetch(
    "/api/auth",
    fetcher
  );

  const {
    data: comments,
    error: commentError,
    loading: commentLoading,
    fetchResource: fetchComments,
  } = useFetch(`/api/comments/${getBlogId(pathname)}`, commentFetcher);

  useEffect(() => {
    fetchResource();
  }, []);

  useEffect(() => {
    if (user) {
      console.log(user);

      setAuth(user);
    } else {
      setAuth(undefined);
    }
  }, [user, error]);

  return (
    <div
      style={{
        height: "10vh",
        width: "50%",
        transform: "translateY(-100%)",
      }}
    >
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
        <CommentEditorContext.Provider value={{ ...data, dispatch }}>
          {user ? <Editor /> : null}
        </CommentEditorContext.Provider>
      </GithubAuthContext.Provider>
    </div>
  );
}

export default CommentsProvider;
