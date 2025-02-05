import React from "react";
import '../../css/playCard.css';
import { Chip } from "@mui/material";

interface PlayCardProps {
    number: number;
    image: string;
    title: string;
    genre: string;
    review_num: number;
}

const getChipColor = (genre: string) => {
    switch (genre) {
        case '뮤지컬':
            return '#FFACE1';
        case '연극':
            return '#DA98E7';
        default:
            return '#FFACE1';
    }
};

const PlayCard = ({ number, image, title, genre, review_num }: PlayCardProps) => {
    return (
        <div className="play-card">
            <img src={image} alt={title} />
            <h3>{number}. {title}</h3>
            <div className="play-card-info">
                <Chip  
                    label={genre}
                    size="medium"
                    style={{ 
                        backgroundColor: getChipColor(genre),
                        fontFamily: 'Pretendard-Regular',
                        fontSize: '1rem',
                    }}
                />
                <p>페어 리뷰 {review_num}+</p>
            </div>

        </div>
    );
    }

export default PlayCard;