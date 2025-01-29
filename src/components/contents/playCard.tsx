import React from "react";

interface PlayCardProps {
    image: string;
    title: string;
    description: string;
}

const PlayCard = ({ image, title, description }: PlayCardProps) => {
    return (
        <div className="play-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    );
    }

export default PlayCard;