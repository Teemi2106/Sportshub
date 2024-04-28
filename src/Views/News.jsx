import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <Link to={news.url}>Read more</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default News;
