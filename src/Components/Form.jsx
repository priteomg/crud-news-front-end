import React, { useState } from "react";
import "../css/Form.css";

const FormNews = ({
  data = {},
  handleDataChange = () => {},
  onSubmit = () => {},
  onSubmitUpdate = () => {},
  mode = "create",
  onReset = () => {},
}) => {
  const onChange = (field, value) => {
    handleDataChange(field, value);
  };

  const btnDisabled =
    data.title === "" || data.content === "" || data.author === "";

  return (
    <>
      <div className="form">
        <form onSubmit={mode === "create" ? onSubmit : onSubmitUpdate}>
          <div>
            <label htmlFor="title">News Title</label>
            <input
              id="title"
              value={data.title}
              onChange={(e) => onChange("title", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="content">News Content</label>
            <textarea
              id="content"
              value={data.content}
              onChange={(e) => onChange("content", e.target.value)}
              rows={5}
            />
          </div>
          <div>
            <label>Author</label>
            <input
              value={data.author}
              onChange={(e) => onChange("author", e.target.value)}
            />
          </div>
          <button type="submit" disabled={btnDisabled}>
            {mode === "create" ? "Submit" : "Update"}
          </button>
          <button type="button" onClick={onReset} style={{ marginLeft: "8px" }}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default FormNews;
