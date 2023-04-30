import React, { useEffect, useReducer, useRef, useState } from "react";
import {
  CommentSchema,
  UserSubmittedCommentSchema,
} from "../../../types/blogtypes";
import { getUri } from "../../../util/misc";
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
  patch: (body?: string | undefined) => void;
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
  patch: () => {},
};
type EditorActionTypes =
  | "UPDATE_BODY"
  | "UPDATE_MD"
  | "UPDATE_REPLY"
  | "UPDATE_ID"
  | "UPDATE_EDIT_MODE"
  | "SET_LOADING"
  | "SET_ERROR"
  | "RESET_STATE";
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
        isEditingMode: true,
        _id: payload._id,
        blogId: payload.blogId,
        body: payload.body,
        hasMarkdown: payload.hasMarkdown,
        inReplyToComment: payload.inReplyToComment,
        inReplyToUser: payload.inReplyToUser,
        inReplyToUsername: payload.inReplyToUsername,
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
    case "RESET_STATE":
      return {
        ...initialCommentEditorValue,
        dispatch: state.dispatch,
        post: state.post,
        patch: state.patch,
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
  changeToEdit: (schema: CommentSchema) => void;
  delComment: (id: string) => Promise<void>;
  setReply: (
    data: Pick<
      CommentSchema,
      "inReplyToComment" | "inReplyToUsername" | "inReplyToUser"
    >
  ) => void;
}
export const GithubAuthContext = React.createContext<Auth>(initialAuthValue);
export const CommentEditorContext = React.createContext<CommentEditor>(
  initialCommentEditorValue
);
export const CommentListContext = React.createContext<CommentContextType>(
  {} as any
);

async function fetcher(path: string) {
  const response = await fetch(path, { credentials: "include" });
  if (!response.ok) throw "error in authentication";
  const data = await response.json();
  return data.message as GithubUser;
}
export function getBlogId(): string {
  if (typeof window !== "undefined") {
    const uriPaths = window.location.href.split("/");
    const blogId = uriPaths[uriPaths.length - 1];
    if (blogId.endsWith("#comments")) {
      return blogId.slice(0, -9); // "#comments.length === 9"
    }
    return blogId;
  }
  return "";
}
async function commentFetcher(path: string) {
  const response = await fetch(path);
  if (!response.ok) {
    throw "error fetching comments";
  }
  const data = await response.json();
  return data.message as CommentSchema[];
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

  return newcomment.message as CommentSchema;
}
const patch = async (body: string = "") => {
  const response = await fetch(
    `${getUri("query")}/api/comment/${getBlogId()}`,
    {
      credentials: "include",
      body,
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) throw "error posting comment";

  const newcomment = await response.json();

  return newcomment.message as CommentSchema;
};
function ShowComments({ setShow, show, fetch, commentCount }: any) {
  return (
    <div className="w-full text-center my-4" id="comments">
      <button
        onClick={() => {
          setShow(!show);
          if (!show) fetch();
        }}
        className="h-10 p-2 bg-transparent border border-primary-accent-light text-sm text-primary-accent-light dark:text-white rounded-sm transition-all cursor-pointer hover:bg-primary-accent-light hover:text-white duration-200"
      >
        {show ? "close comments" : `show comments (${commentCount || 0})`}
      </button>
    </div>
  );
}
function CommentsProvider({ commentCount }: { commentCount: number }) {
  const [auth, setAuth] = useState<GithubUser>();

  const [comments, setComments] = useState<CommentSchema[]>([]);

  const [showComments, setShowComments] = useState(false);

  const [data, dispatch] = useReducer(editorReducer, initialCommentEditorValue);

  const editorRef = useRef<HTMLDivElement>(null);

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

  async function callPatch(body: string = "") {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      const newcomment = await patch(body);
      const newcomments = comments.map((comment) => {
        if (comment._id === newcomment._id) {
          return {
            ...comment,
            hasMarkdown: newcomment.hasMarkdown,
            body: newcomment.body,
            lastUpdated: newcomment.lastUpdated,
            html: newcomment.html,
          };
        }
        return comment;
      });
      setComments(newcomments);
      setTimeout(() => {
        //@ts-ignore
        Prism.highlightAll();
      }, 10);

      dispatch({
        payload: "",
        type: "RESET_STATE",
      });
    } catch (error) {
      dispatch({
        payload: error,
        type: "SET_ERROR",
      });
    }
  }

  function setReplyModeOn(
    data: Pick<
      CommentSchema,
      "inReplyToComment" | "inReplyToUsername" | "inReplyToUser"
    >
  ) {
    dispatch({
      type: "RESET_STATE",
      payload: "",
    });
    dispatch({
      type: "UPDATE_REPLY",
      payload: {
        commentId: data.inReplyToComment,
        userId: data.inReplyToUser,
        username: data.inReplyToUsername,
      },
    });
  }

  async function deleteComment(id: string) {
    const res = await fetch(
      `${getUri("query")}/api/comment/${getBlogId()}/${id}`,
      {
        credentials: "include",
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      const newcomments = comments.filter((cmt) => cmt._id !== id);
      setComments(newcomments);
    }
  }

  function changeToEditMode(schema: CommentSchema) {
    dispatch({
      type: "RESET_STATE",
      payload: "",
    });
    const payload: UserSubmittedCommentSchema = {
      _id: schema._id,
      blogId: schema.blogId,
      body: schema.body,
      hasMarkdown: schema.hasMarkdown,
      inReplyToComment: schema.inReplyToComment || "default",
      inReplyToUser: schema.inReplyToUser || "default",
      inReplyToUsername: schema.inReplyToUsername || "",
    };
    dispatch({
      type: "UPDATE_EDIT_MODE",
      payload,
    });
  }
  useEffect(() => {
    if (newcomment) {
      setComments([...comments, newcomment]);
      setTimeout(() => {
        //@ts-ignore
        Prism.highlightAll();
      }, 10);
      dispatch({
        payload: "",
        type: "RESET_STATE",
      });
    }
    dispatch({
      type: "SET_LOADING",
      payload: posloading,
    });
    if (posterror) {
      dispatch({
        type: "SET_ERROR",
        payload: posterror,
      });
    }
  }, [newcomment, posloading, posterror]);

  useEffect(() => {
    fetchResource();
    // fetchComments();
  }, []);

  useEffect(() => {
    if (comments_) {
      setComments(comments_);
      setTimeout(() => {
        //@ts-ignore
        Prism.highlightAll();
      }, 10);
    }
  }, [comments_]);

  useEffect(() => {
    if (user) {
      setAuth(user);
    } else {
      setAuth(undefined);
    }
  }, [user, error]);

  return (
    <div className="2xl:w-8/12 xl:w-9/12 w-full flex justify-center mt-4">
      <div className="2xl:w-9/12 xl:w-9/12 md:w-11/12 w-full ">
        <GithubAuthContext.Provider
          value={{ user: auth, loading, fetchResource }}
        >
          {!user ? <Signin /> : null}
          <CommentEditorContext.Provider
            value={{ ...data, dispatch, post, patch: callPatch }}
          >
            {user ? <Editor editorRef={editorRef} /> : null}
          </CommentEditorContext.Provider>
          <CommentListContext.Provider
            value={{
              comments: comments!,
              loading: commentLoading,
              fetchComments,
              error: commentError,
              changeToEdit: changeToEditMode,
              delComment: deleteComment,
              setReply: setReplyModeOn,
            }}
          >
            {showComments ? (
              <Comments editRef={editorRef} />
            ) : (
              <ShowComments
                show={showComments}
                setShow={setShowComments}
                fetch={fetchComments}
                commentCount={commentCount}
              />
            )}
          </CommentListContext.Provider>
        </GithubAuthContext.Provider>
      </div>
    </div>
  );
}

export default CommentsProvider;
