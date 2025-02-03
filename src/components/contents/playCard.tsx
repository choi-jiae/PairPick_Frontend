import React from "react";
import '../../css/playCard.css';

interface PlayCardProps {
    number: number;
    image: string;
    title: string;
    genre: string;
    review_num: number;
}

const PlayCard = ({ number, image, title, genre, review_num }: PlayCardProps) => {
    return (
        <div className="play-card">
            <img src={image} alt={title} />
            <h3>{number}. {title}</h3>
            <p>{genre}</p>
            <p>페어 리뷰 {review_num}+</p>
        </div>
    );
    }

export default PlayCard;