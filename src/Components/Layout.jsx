import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/Layout.css";
import NewsCard from "./NewsCard";
import FormNews from "./Form";

const getNews = async () => {
  const url = `http://localhost:1337/api/v1/posts`;
  const config = {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": true,
    },
  };
  const result = await axios.get(url, config);
  console.log("result: ", result.data);
  const { data } = result;
  // setNews(data);
  return data;
};

const insertPost = async (param) => {
  const url = `http://localhost:1337/api/v1/posts`;

  const config = {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": true,
    },
  };
  const result = await axios.post(url, param, config);
  console.log("result: ", result.data);
  const { data } = result;
  // setNews(data);
  return data;
};

const Layout = () => {
  const [news, setNews] = useState([]);
  const [reload, setReload] = useState(false);
  const [data, setData] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    getNews().then((result) => {
      setNews(result);
    });
  }, [reload]);

  const handleDataChange = (field, value) => {
    const tempData = { ...data };
    tempData[field] = value;
    setData(tempData);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    insertPost(data);
    setReload(!reload);
  };

  return (
    <div className="container">
      <h1>News!!</h1>
      <FormNews
        data={data}
        handleDataChange={handleDataChange}
        onSubmit={onSubmit}
      />
      {news.length > 0 ? (
        news.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            content={item.content}
            author={item.author}
            createAt={item.createAt}
          />
        ))
      ) : (
        <div> no data</div>
      )}
    </div>
  );
};

export default Layout;
