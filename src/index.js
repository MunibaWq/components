import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        imageSrc="https://source.unsplash.com/random"
        author="Sam"
        timeAgo="Today at 4:45PM"
        commentPost="Hey!"
      />
      <CommentDetail
        imageSrc="https://source.unsplash.com/random"
        author="Alex"
        timeAgo="Today at 10:45PM"
        commentPost="GOODBYE!"
      />
      <CommentDetail
        imageSrc="https://source.unsplash.com/random"
        author="Jane"
        timeAgo="Today at 11:45PM"
        commentPost="VIOLA!!!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
