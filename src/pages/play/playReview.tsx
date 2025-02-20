import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/playReview.css";
import ColorThief from "colorthief";
import { Button } from "@mui/material";
import RecommenedCard from "../../components/contents/recommendCard";
import { useHeaderStore } from "../../store/headerStore";

const PlayReview = () => {
  const { id } = useParams<{ id: string }>();
  const play = {
    id: 1,
    image: "https://ticketimage.interpark.com/Play/image/small/24/24016412.gif",
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

  const recommendList = [
    {
      title: "고스트 베이커리",
      genre: "뮤지컬",
      pair: ["박지연", "전성우", "신은총"],
      pair_img: [
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20681_02130.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20749_021.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/12/0400041912_45809_02.gif",
      ],
      feature: ["안정감 있어요🛏️", "귀여워요😍", "미러링 천재예요"],
      ratings: [5.0, 5.0, 5.0],
    },
    {
      title: "고스트 베이커리",
      genre: "연극극",
      pair: [
        "박지연",
        "전성우",
        "신은총",
        "박지연",
        "전성우",
        "신은총",
        "박지연",
        "전성우",
        "신은총",
      ],
      pair_img: [
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20681_02130.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20749_021.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/12/0400041912_45809_02.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20681_02130.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20749_021.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/12/0400041912_45809_02.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20681_02130.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20749_021.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/12/0400041912_45809_02.gif",
      ],
      feature: ["안정감 있어요🛏️", "귀여워요😍"],
      ratings: [5.0, 5.0, 5.0],
    },
    {
      title: "고스트 베이커리",
      genre: "뮤지컬",
      pair: ["박지연", "전성우", "신은총"],
      pair_img: [
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20681_02130.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20749_021.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/12/0400041912_45809_02.gif",
      ],
      feature: ["안정감 있어요🛏️", "귀여워요😍"],
      ratings: [5.0, 5.0, 5.0],
    },
  ];

  const [isDarkImage, setIsDarkImage] = React.useState(false);
  const [color, setColor] = React.useState([0, 0, 0]);
  const setWhiteHeader = useHeaderStore((state) => state.setWhiteHeader);

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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setWhiteHeader(scrollPosition > 260);
  };

  useEffect(() => {
    fetchImage();
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      <div className="review-bottom">
        <div className="recommend-title">추천하는 페어</div>
        <div className="recommend-cards">
          {recommendList.map((recommend, index) => (
            <RecommenedCard
              key={index}
              title={recommend.title}
              genre={recommend.genre}
              pair={recommend.pair}
              pair_img={recommend.pair_img}
              feature={recommend.feature}
              ratings={recommend.ratings}
            />
          ))}
        </div>
        <div className="review-title">리뷰</div>
        <div className="review-cards"></div>
        <div className="actor-title">배우 코멘트</div>
        <div className="actor-cards"></div>
      </div>
    </div>
  );
};

export default PlayReview;
