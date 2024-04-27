import React, { useRef, useEffect, useState } from "react";
import "../CSS/Header.css";
import pitch1 from "../images/pitch1.png";
import pitch2 from "../images/pitch2.png";
import pitch3 from "../images/pitch3.jpg";
import pitch4 from "../images/pitch4.jpg";
import pitch5 from "../images/pitch5.jpeg";
import pitch6 from "../images/pitch6.png";
import pitch7 from "../images/pitch7.jpg";
import pitch8 from "../images/pitch8.webp";
import pitch9 from "../images/pitch9.jpg";
import images from "../Database/reels.json";

const Home = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setReels(images.images);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const carouselRef = useRef(null);
  const [imageUrls] = useState([
    "url(" + pitch1 + ")",
    "url(" + pitch2 + ")",
    "url(" + pitch3 + ")",
    "url(" + pitch4 + ")",
    "url(" + pitch5 + ")",
    "url(" + pitch6 + ")",
    "url(" + pitch7 + ")",
    "url(" + pitch8 + ")",
    "url(" + pitch9 + ")",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageUrls]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.backgroundImage = imageUrls[currentIndex];
    }
  }, [currentIndex, imageUrls]);

  return (
    <main>
      <section id="section1" ref={carouselRef}>
        <h1>Welcome to the Football Hub</h1>
      </section>
      <section id="section2">
        <h2>The Official Football Website For UG College</h2>
        <p>
          Welcome to the official football website for UG College! Here, you'll
          find the latest updates, match highlights, player statistics, and
          exciting moments from our college football teams. Join us in
          celebrating the passion for the sport and stay connected with the
          thrilling world of football at UG College.
        </p>
      </section>
      <section className="section3">
        <h2>Latest News</h2>
        <p>
          We celebrate our top dogs for emerging as the winners of the College
          Championships.
        </p>
        <p>
          We are elated to present you with our newly completed school stadium
          which boasts of containing 25,000 people, with state of the art
          equipments and facilities.
        </p>
        <p>
          After almost three years of construction, we present to you our
          multi-million dollar Housing Estate, cointaining 5-star hotels, a
          hospital with excellent facilities, super-markets and so much more,
          not excluding 150 living apartments.
        </p>
      </section>
      <section className="reels">
        {reels.map((images, index) => (
          <div key={index} id="imageDiv">
            <div className="notch"></div>
            <img src={images.image} alt="" className="images" />
            <div className="notch2"></div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
