import React from "react";
import "../../css/recommendCard.css";
import { Button, Chip } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

interface RecommenedCardProps {
  title: string;
  genre: string;
  pair: Array<string>;
  pair_img: Array<string>;
  feature: Array<string>;
  ratings: Array<number>;
}

const RecommenedCard = ({
  title,
  genre,
  pair,
  pair_img,
  feature,
  ratings,
}: RecommenedCardProps) => {
  const total_rating = ratings.reduce((a, b) => a + b) / ratings.length;

  const musical_rating = ["연기합", "넘버합", "노선합"];
  const play_rating = ["연기합", "대사합", "노선합"];

  return (
    <div className="recommend-card">
      <div className="recommend-card-contents">
        <div className="recommend-card-top">
          <div className="total-rating">
            <StarRoundedIcon style={{ color: "#FFCA3F" }} />
            <div className="total-score">{total_rating.toFixed(1)}</div>
          </div>
          <Button
            variant="text"
            sx={{
              fontFamily: "Pretendard-Regular",
              color: "#666666",
              fontSize: "0.8rem",
            }}
          >
            페어 리뷰 보기
          </Button>
        </div>
        <div className="pair-imgs">
          {pair_img.slice(0, 5).map((img, index) => (
            <img key={index} src={img} alt={pair[index]} />
          ))}
        </div>
        <div className="pair-name">{pair.join(", ")}</div>
        <div className="recommend-card-bottom">
          <div className="recommend-card-ratings">
            {genre === "뮤지컬"
              ? musical_rating.map((item, index) => (
                  <div className="rating" key={index}>
                    <div className="recommend-item">{item}</div>
                    <div
                      style={{
                        flexGrow: 1,
                        height: "5px",
                        backgroundColor:
                          index === 0
                            ? "#FFACE1"
                            : index === 1
                            ? "#DA98E7"
                            : "#AD67BB",
                        borderRadius: "20px",
                      }}
                    />
                    <div className="score">{ratings[index].toFixed(1)}</div>
                  </div>
                ))
              : play_rating.map((item, index) => (
                  <div className="rating" key={index}>
                    <div className="recommend-item">{item}</div>
                    <div
                      style={{
                        flexGrow: 1,
                        height: "5px",
                        backgroundColor:
                          index === 0
                            ? "#FFACE1"
                            : index === 1
                            ? "#DA98E7"
                            : "#AD67BB",
                        borderRadius: "20px",
                      }}
                    />
                    <div className="score">{ratings[index].toFixed(1)}</div>
                  </div>
                ))}
          </div>
          <div className="chip-container">
            {feature.map((feature, index) => (
              <Chip
                key={index}
                label={feature}
                variant="outlined"
                style={{
                  border: "0.5px solid #DA98E7",
                  height: "20px",
                  marginBottom: "2px",
                  fontSize: "0.7rem",
                  fontFamily: "Pretendard-Regular",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommenedCard;
