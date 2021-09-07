import markdownStyles from "./markdown-styles.module.css";
import Prism from "prismjs";
import { useEffect } from "react";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  useEffect(() => {
    //@ts-ignore
    Prism.manual = true;
    Prism.highlightAll();
  }, []);
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
