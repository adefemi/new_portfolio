import { FC } from "react";
import YouTube from "react-youtube";
import { DocType } from "./types";

export const DocCard: FC<DocType> = ({ title, link }) => {

  return (
    <div className="doc-card">
      <YouTube
        videoId={link}
        opts={{ playerVars: { autoplay: 0 } }}
        className="youtube"
      />
      <div className="titleDoc">{title}</div>
    </div>
  );
};

export default DocCard;
