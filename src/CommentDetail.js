import React from "react";

const CommentDetail = (props) => {
  return (
    <div>
      <div className="comment" style={{ padding: "10px" }}>
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatarImg} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="data"> {props.timeAgo}</span>
          </div>
          <div className="text">{props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
