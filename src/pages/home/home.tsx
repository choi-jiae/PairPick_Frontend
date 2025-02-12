import PlayCard from "../../components/contents/playCard";
import ReviewCard from "../../components/contents/reviewCard"; 
import '../../css/home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useState, useEffect } from 'react';

const playList = [
    {
        image: "https://m.doosanartcenter.com/upload/contentsImage/24111911355853723845.jpg",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://m.doosanartcenter.com/upload/contentsImage/24111911355853723845.jpg",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://m.doosanartcenter.com/upload/contentsImage/24111911355853723845.jpg",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://m.doosanartcenter.com/upload/contentsImage/24111911355853723845.jpg",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://m.doosanartcenter.com/upload/contentsImage/24111911355853723845.jpg",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://m.doosanartcenter.com/upload/contentsImage/24111911355853723845.jpg",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://m.doosanartcenter.com/upload/contentsImage/24111911355853723845.jpg",
        title: "고스트 베이커리",
        genre: "연극",
        review_num: 99
    },
    {
        image: "https://m.doosanartcenter.com/upload/contentsImage/24111911355853723845.jpg",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://m.doosanartcenter.com/upload/contentsImage/24111911355853723845.jpg",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://m.doosanartcenter.com/upload/contentsImage/24111911355853723845.jpg",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    }
];

const reviewList = [
    {
    title: "고스트 베이커리",
    genre: "뮤지컬",
    pair: ["박지연", "전성우", "신은총"],
    feature: ["안정감 있어요🛏️", "귀여워요😍"],
    ratings: [5.0, 5.0, 5.0]
    },
    {
        title: "고스트 베이커리",
        genre: "연극극",
        pair: ["박지연", "전성우", "신은총"],
        feature: ["안정감 있어요🛏️", "귀여워요😍"],
        ratings: [5.0, 5.0, 5.0]
    },
    {
        title: "고스트 베이커리",
        genre: "뮤지컬",
        pair: ["박지연", "전성우", "신은총"],
        feature: ["안정감 있어요🛏️", "귀여워요😍"],
        ratings: [5.0, 5.0, 5.0]
    },
];


const Home = () => {

    const slideNum = () => {
        if (window.innerWidth < 855) {
            return 3;
        } else if (window.innerWidth < 1230) {
            return 4;
        } else {
            return 6;
        }
    };

    const [slidesPerView, setSlidesPerView] = useState(slideNum());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(slideNum());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="home">
            <div className="discribtion">
                누구로 볼까? 고민된다면 페어픽! 최애 페어의 매력을 공유해보세요 ✨
            </div>
            <div>
                <div className="title">
                    지금 인기있는 공연
                </div>
                    <div className="play-cards">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={slideNum()}
                            modules={[Navigation]}
                            navigation={true}
                            className="mySwiper"
                            slidesOffsetAfter={100}
                            slidesOffsetBefore={100}
                            >
                            {
                            playList.map((play, index) => (
                                <SwiperSlide key={index}>
                                    <PlayCard
                                    number={index + 1}
                                    image={play.image}
                                    title={play.title}
                                    genre={play.genre}
                                    review_num={play.review_num}
                                    />
                                </SwiperSlide>
                            ))
                            }
                        </Swiper>
                </div>
            </div>
            <div>
                <div className="title">
                    지금 인기있는 페어
                </div>
                    <div className="review-cards">
                        {
                            reviewList.map((review, index) => (
                                <ReviewCard
                                key={index}
                                title={review.title}
                                genre={review.genre}
                                pair={review.pair}
                                feature={review.feature}
                                ratings={review.ratings}
                                />
                            ))
                        }
                    </div>
            </div>
        </div>
    );
}

export default Home;