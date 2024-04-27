import React from "react";
import { useState, useEffect } from "react";
import newsLetter from "../Database/News.json";
import "../CSS/news.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setNews(newsLetter);
        console.log(news);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section>
        {news.map((news, index) => (
          <div key={index} id="newsDiv">
            <img src={news.img} alt="" className="newsImg" />
            <h2>{news.title}</h2>
          </div>
        ))}
      </section>
    </div>
  );
};

export default News;
