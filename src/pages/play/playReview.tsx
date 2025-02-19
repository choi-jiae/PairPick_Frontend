import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/playReview.css";
import ColorThief from "colorthief";
import { Button } from "@mui/material";
import { get } from "http";

const PlayReview = () => {
  const { id } = useParams<{ id: string }>();
  const play = {
    id: 1,
    image:
      "https://i.namu.wiki/i/nmf8-BLI6hk8O9DJkWtZv6QaFk8RRG8l7Xq2DfK7ZTDoFzOJxoT8MU5bMIi1AGEoPplPlWsdMvygkj5e1Vuo9A.webp",
    title: "고스트 베이커리리리리리ㅣ리리리릴리",
    genre: "뮤지컬",
    period: "2021.09.01 ~ 2021.09.30",
    location: "두산 아트센터 연강홀",
    booking: [
      "http://www.ticketlink.co.kr/product/14015",
      "https://tickets.interpark.com/goods/24016412",
      ">http://www.대학로티켓.com/univticket/tuniv/ccontents/view.do?rbsIdx=27&contentsCode=20160925003",
      "http://ticket.yes24.com/Perf/52551?Gcode=009_400",
    ],
  };

  const [isDarkImage, setIsDarkImage] = React.useState(false);
  const [color, setColor] = React.useState([0, 0, 0]);

  // useEffect(() => {
  //     const colorThief = new ColorThief();
  //     const img = new Image();

  //     img.addEventListener('load', () => {
  //         const result = colorThief.getColor(img);
  //         console.log(result);
  //     });

  //     // img.onload = () => {
  //     //     const result = colorThief.getColor(img);
  //     //     const [r, g, b] = result;
  //     //     console.log('r', r, 'g', g, 'b', b);
  //     //     const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  //     //     setIsDarkImage(brightness < 125);
  //     //     console.log('color', r, g, b);
  //     // };
  //     img.src = 'http://cors-anywhere.herokuapp.com/'+play.image;
  //     img.crossOrigin = 'Anonymous';

  // }, [play.image]);
  const fetchImage = async () => {
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(play.image)}`
      );
      const data = await response.json();
      const img = new Image();
      img.src = data.contents;
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        setColor(color);
        const [r, g, b] = color;
        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        console.log("brightness", brightness);
        setIsDarkImage(brightness < 50);
        console.log("color", color);
      };
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const getBookingDomain = (bookingUrl: string) => {
    try {
      const parsedUrl = new URL(bookingUrl);
      return parsedUrl.hostname;
    } catch (error) {
      console.error("Invalid URL:", error);
      return "";
    }
  };

  const getBookingImage = (bookingUrl: string) => {
    let domain = getBookingDomain(bookingUrl);
    if (domain === "www.ticketlink.co.kr") {
      return "/images/ticketlink.png";
    } else if (domain === "tickets.interpark.com") {
      return "/images/interpark.jpg";
    } else if (domain === "ticket.yes24.com") {
      return "/images/yes24.jpg";
    } else {
      return "";
    }
  };

  useEffect(() => {
    fetchImage();
  }, [play.image]);
  return (
    <div className="play-review">
      <div
        className="review-top"
        style={{
          backgroundImage: `url(${play.image})`,
        }}
      >
        <div className="review-top-start">
          <div
            className={`review-top-content ${
              isDarkImage ? "light-text" : "dark-text"
            }`}
          >
            <div className="play-discription">{play.genre}</div>
            <div className="play-name">{play.title}</div>
            <div className="play-discription">{play.period}</div>
            <div className="play-discription">{play.location}</div>
          </div>
          <Button
            className={`review-write-button ${
              isDarkImage ? "dark-button" : "light-button"
            }`}
            variant="outlined"
            sx={{
              fontFamily: "Pretendard-Bold",
              borderRadius: "10px",
            }}
          >
            페어 리뷰 작성하기
          </Button>
        </div>
        <div className="review-top-end">
          {play.booking.map((bookingUrl) => {
            const domain = getBookingDomain(bookingUrl);
            return domain ? (
              <Button
                className="booking-button"
                sx={{
                  fontFamily: "Pretendard-Bold",
                  backgroundColor: "white",
                  color: "black",
                  backgroundImage: `url(${getBookingImage(bookingUrl)})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayReview;
