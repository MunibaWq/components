import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatarImg="https://source.unsplash.com/random/3"
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Hey!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatarImg="https://source.unsplash.com/random/2"
          author="Alex"
          timeAgo="Today at 10:45PM"
          content="GOODBYE!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatarImg="https://source.unsplash.com/random/1"
          author="Jane"
          timeAgo="Today at 11:45PM"
          content="VIOLA!!!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
