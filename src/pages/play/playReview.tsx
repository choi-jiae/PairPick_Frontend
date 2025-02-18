import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../css/playReview.css';
import ColorThief from 'colorthief';

const PlayReview = () => {
    const { id } = useParams<{ id: string }>();
    const play = {
        id: 1,
        image: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF132236_160704_142630.gif",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        period: "2021.09.01 ~ 2021.09.30",
        location: "두산 아트센터 연강홀"
    };

    const [isDarkImage, setIsDarkImage] = React.useState(false);

    useEffect(() => {
        const img = new Image();
        
        img.onload = () => {
            const colorThief = new ColorThief();
            const result = colorThief.getColor(img);
            const [r, g, b] = result;
            console.log('r', r, 'g', g, 'b', b);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            setIsDarkImage(brightness < 125);
        };
        img.crossOrigin = 'Anonymous';
        img.src = play.image;
        

    }, [play.image]);
    return (
        <div className='play-review'>
            <div 
                className='review-top'
                style={{
                    backgroundImage: `url(${play.image})`,
                }}
            >
                <div className={`review-top-content ${isDarkImage ? 'light-text' : 'dark-text'}`}>
                    <div className='play-discription'>{play.genre}</div>
                    <div className='play-name'>{play.title}</div>
                    <div className='play-discription'>{play.period}</div>
                    <div className='play-discription'>{play.location}</div>
                </div>
            </div>
        </div>
    );
    }

export default PlayReview;