import React from "react";
import "../css/NewsCard.css";

const NewsCard = ({
  title = "",
  content = "",
  author = "",
  createdAt = "",
}) => {
  return (
    <>
      <div className="card">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="createAt">{createdAt}</div>

        <div className="author">{author}</div>
      </div>
    </>
  );
};

export default NewsCard;
