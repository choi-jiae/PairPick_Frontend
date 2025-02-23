import React, { useState } from "react";
import "../../css/pairReviewCard.css";
import { Chip, IconButton, Menu, MenuItem } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface PairReviewCardProps {
  genre: string;
  pair: Array<string>;
  feature: Array<string>;
  ratings: Array<number>;
  review_text: string;
  user_id: number;
  user_name: string;
  likes: number;
}

const PairReviewCard = ({
  genre,
  pair,
  feature,
  ratings,
  review_text,
  user_id,
  user_name,
  likes,
}: PairReviewCardProps) => {
  const total_rating = ratings.reduce((a, b) => a + b) / ratings.length;
  const [liked, setLiked] = useState(false);
  const musical_rating = ["연기합", "넘버합", "노선합"];
  const play_rating = ["연기합", "대사합", "노선합"];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const myId = 1; // 로그인한 유저의 id를 받아와야 함
  // like 업데이트 할 수 있도록 변경
  const likeClicked = () => {
    setLiked(!liked);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  return (
    <div className="pair-card">
      <div className="pair-card-contents">
        <div className="pair-card-top">
          <div className="total-rating">
            <StarRoundedIcon style={{ color: "#FFCA3F" }} />
            <div className="total-score">{total_rating.toFixed(1)}</div>
          </div>
          <div className="pair-card-top-right">
            <div className="pair-ratings">
              {genre === "뮤지컬"
                ? musical_rating.map((item, index) => (
                    <div className="rating" key={index}>
                      <div className="rating-item">{item}</div>
                      <div className="score">{ratings[index].toFixed(1)}</div>
                    </div>
                  ))
                : play_rating.map((item, index) => (
                    <div className="rating" key={index}>
                      <div className="rating-item">{item}</div>
                      <div className="score">{ratings[index].toFixed(1)}</div>
                    </div>
                  ))}
            </div>
            <IconButton
              aria-controls={open ? "review-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{
                color: "#666666",
                padding: "0",
                marginLeft: "auto",
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="review-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "sort-button",
              }}
            >
              {myId === user_id ? (
                <div>
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      fontFamily: "Pretendard-Regular",
                      fontSize: "1rem",
                    }}
                  >
                    수정
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      fontFamily: "Pretendard-Regular",
                      fontSize: "1rem",
                    }}
                  >
                    삭제
                  </MenuItem>
                </div>
              ) : (
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    fontFamily: "Pretendard-Regular",
                    fontSize: "1rem",
                  }}
                >
                  신고
                </MenuItem>
              )}
            </Menu>
          </div>
        </div>
        <div className="pair-name">{pair.join(", ")}</div>
        <div className="pair-review-text">{review_text}</div>
        <div className="user-name">{user_name}</div>
        <div className="pair-card-bottom">
          <div className="chip-container">
            {feature.slice(0, 2).map((feature, index) => (
              <Chip
                key={index}
                label={feature}
                variant="outlined"
                style={{
                  border: "0.5px solid #DA98E7",
                  height: "25px",
                  marginBottom: "2px",
                  fontSize: "0.8rem",
                  fontFamily: "Pretendard-Regular",
                }}
              />
            ))}
          </div>
          <div className="likes">
            <IconButton onClick={likeClicked} style={{ padding: "0" }}>
              {liked ? (
                <FavoriteIcon style={{ color: "#FF0080" }} />
              ) : (
                <FavoriteBorderIcon style={{ color: "#FF0080" }} />
              )}
            </IconButton>
            <div className="likes-num">{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PairReviewCard;
