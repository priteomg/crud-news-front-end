import React from "react";
import "../css/NewsCard.css";
import { Button, Grid } from "@material-ui/core";
import dayjs from "dayjs";

var buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);

const NewsCard = ({
  id = null,
  title = "",
  content = "",
  author = "",
  createdAt = "",
  onClickEdit = () => {},
  onClickDelete = () => {},
}) => {
  return (
    <>
      <div className="card">
        <Grid container>
          <Grid xs={10} item>
            <div className="title">{title}</div>
            <div className="content">{content}</div>
            <div className="createAt">
              {dayjs(createdAt).format("D MMM BBBB")}
            </div>
            <div className="author">เขียนโดย : {author}</div>
          </Grid>
          <Grid
            xs={2}
            item
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="buttonGroup">
              <Button onClick={() => onClickEdit(id)}>Edit</Button>
              <Button onClick={() => onClickDelete(id)}>Delete</Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NewsCard;
