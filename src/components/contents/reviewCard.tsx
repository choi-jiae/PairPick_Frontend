import React from 'react';
import '../../css/reviewCard.css';
import { Chip } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

interface ReviewCardProps {
    title: string;
    genre: string;
    pair: Array<string>;
    feature: Array<string>;
    ratings: Array<number>;
}

const ReviewCard = ({title, genre, pair, feature, ratings}: ReviewCardProps) => {
    const total_rating = (ratings).reduce((a,b) => a+b) / ratings.length;

    const musical_rating = ['연기합', '넘버합', '노선합'];
    const play_rating = ['연기합', '대사합', '노선합'];

    return (
     
            <div className="review-card">
                <div className="review-card-contents">
                    <h3>{title}</h3>
                    <h4>{pair.join(', ')}</h4>
                    <div className="chip-container">
                    {
                        feature.map((feature, index) => (
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
                                    
                                }} />
                        ))
                    }
                    </div>
                </div>
                <div className="review-card-contents">
                    <div className="total-rating">
                        <StarRoundedIcon style={{color: '#FFCA3F'}} />
                        <div className="total-score">{total_rating.toFixed(1)}</div>
                    </div>
                    
                    {(genre === '뮤지컬') 
                        ? musical_rating.map((item, index) => (
                            <div className="rating" key={index}>
                                <div className='review-item'>{item}</div>
                                <div
                                    style={{
                                        flexGrow: 1,
                                        height: "5px",
                                        backgroundColor: index === 0? "#FFACE1" : index === 1? "#DA98E7" : "#AD67BB",
                                        borderRadius: "20px",
                                    }}/>
                                <div className="score">
                                    {ratings[index].toFixed(1)}
                                </div>
                            </div>))
                        : play_rating.map((item, index) => (
                            <div className="rating" key={index}>
                                <div className="review-item">{item}</div>
                                <div
                                    style={{
                                        flexGrow: 1,
                                        height: "5px",
                                        backgroundColor: index === 0? "#FFACE1" : index === 1? "#DA98E7" : "#AD67BB",
                                        borderRadius: "20px",
                                    }}/>
                                <div className="score">
                                    {ratings[index].toFixed(1)}
                                </div>
                            </div>))
                    }

                </div>
            </div>
        

    )
};

export default ReviewCard;