import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatarImg="https://source.unsplash.com/random/3"
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Hey!"
      />
      <CommentDetail
        avatarImg="https://source.unsplash.com/random/2"
        author="Alex"
        timeAgo="Today at 10:45PM"
        content="GOODBYE!"
      />
      <CommentDetail
        avatarImg="https://source.unsplash.com/random/1"
        author="Jane"
        timeAgo="Today at 11:45PM"
        content="VIOLA!!!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
