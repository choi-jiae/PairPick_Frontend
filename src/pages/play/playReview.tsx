import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/playReview.css";
import ColorThief from "colorthief";
import { Button, Menu, MenuItem } from "@mui/material";
import RecommenedCard from "../../components/contents/recommendCard";
import PairReviewCard from "../../components/contents/pairReviewCard";
import { useHeaderStore } from "../../store/headerStore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ActorReviewCard from "../../components/contents/actorReviewCard";
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
      "http://www.대학로티켓.com/univticket/tuniv/ccontents/view.do?rbsIdx=27&contentsCode=20160925003",
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

  const pairReviewList = [
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
      review_text: "너무 좋아요",
      user_name: "jiaejiae",
      likes: 12,
    },
    {
      title: "고스트 베이커리",
      genre: "연극",
      pair: ["박지연", "전성우", "신은총"],
      pair_img: [
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20681_02130.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20749_021.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/12/0400041912_45809_02.gif",
      ],
      feature: ["안정감 있어요🛏️", "귀여워요😍"],
      ratings: [5.0, 5.0, 5.0],
      review_text: "너무 좋아요",
      user_name: "jiaejiae",
      likes: 12,
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
      review_text: "너무 좋아요",
      user_name: "jiaejiae",
      likes: 12,
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
      review_text: "너무 좋아요",
      user_name: "jiaejiae",
      likes: 12,
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
      review_text: "너무 좋아요",
      user_name: "jiaejiae",
      likes: 12,
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
      review_text: "너무 좋아요",
      user_name: "jiaejiae",
      likes: 12,
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
      review_text: "너무 좋아요",
      user_name: "jiaejiae",
      likes: 12,
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
      review_text: "너무 좋아요",
      user_name: "jiaejiae",
      likes: 12,
    },
  ];

  const actorReviewCardList = [
    {
      role: "유령",
      actor_ids: [1, 2, 3],
      actor_names: ["송원근", "전성우", "이재환"],
      actor_imgs: [
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20681_02130.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20749_021.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/12/0400041912_45809_02.gif",
      ],
    },
    {
      role: "유령",
      actor_ids: [1, 2, 3],
      actor_names: ["송원근", "전성우", "이재환"],
      actor_imgs: [
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20681_02130.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20749_021.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/12/0400041912_45809_02.gif",
      ],
    },
    {
      role: "유령",
      actor_ids: [1, 2, 3],
      actor_names: ["송원근", "전성우", "이재환"],
      actor_imgs: [
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20681_02130.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/10/03/0400041003_20749_021.gif",
        "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/19/12/0400041912_45809_02.gif",
      ],
    },
  ];
  const [isDarkImage, setIsDarkImage] = React.useState(false);
  const [color, setColor] = React.useState([0, 0, 0]);
  const setWhiteHeader = useHeaderStore((state) => state.setWhiteHeader);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [sortItem, setSortItem] = React.useState("최신순");

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
      return null;
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setWhiteHeader(scrollPosition > 260);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setSortItem(event.currentTarget.textContent || "최신순");
    setAnchorEl(null);
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
        <div className="pair-title-sort-more">
          <div className="pair-title-sort">
            <div className="pair-title">페어 리뷰</div>
            <div className="pair-sort">
              <Button
                id="sort-button"
                variant="outlined"
                aria-controls={open ? "sort-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  border: "1px solid #DA98E7",
                  fontFamily: "Pretendard-Regular",
                  color: "#DA98E7",
                  fontSize: "1rem",
                  borderRadius: "20px",
                  padding: "3px 13px",
                }}
                startIcon={<KeyboardArrowDownIcon />}
              >
                {sortItem}
              </Button>
              <Menu
                id="sort-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "sort-button",
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    fontFamily: "Pretendard-Regular",
                    fontSize: "1rem",
                  }}
                >
                  최신순
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    fontFamily: "Pretendard-Regular",
                    fontSize: "1rem",
                  }}
                >
                  별점순
                </MenuItem>
              </Menu>
            </div>
          </div>
          <Button
            className="pair-more-button"
            variant="text"
            sx={{
              fontFamily: "Pretendard-Regular",
              color: "#666666",
              fontSize: "0.8rem",
            }}
          >
            페어 리뷰 더보기
          </Button>
        </div>
        <div className="pair-cards">
          <div className="pair-cards-grid">
            {pairReviewList.map((pairReview, index) => (
              <PairReviewCard
                key={index}
                genre={pairReview.genre}
                pair={pairReview.pair}
                feature={pairReview.feature}
                ratings={pairReview.ratings}
                review_text={pairReview.review_text}
                user_name={pairReview.user_name}
                likes={pairReview.likes}
              />
            ))}
          </div>
        </div>
        <div className="actor-title">배우 코멘트</div>
        <div className="actor-cards">
          {actorReviewCardList.map((actorReviewCard, index) => (
            <ActorReviewCard
              key={index}
              role={actorReviewCard.role}
              actor_ids={actorReviewCard.actor_ids}
              actor_names={actorReviewCard.actor_names}
              actor_imgs={actorReviewCard.actor_imgs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayReview;
