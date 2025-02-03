import PlayCard from "../../components/contents/playCard";
import '../../css/home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Swiper as SwiperType } from 'swiper';

interface PlayDiscription {
    image: string;
    title: string;
    genre: string;
    review_num: number;
}

const playList = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-GYEs3Kxv9mwQU1oFTFvDEdsifBhgl3WNQ&s",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-GYEs3Kxv9mwQU1oFTFvDEdsifBhgl3WNQ&s",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-GYEs3Kxv9mwQU1oFTFvDEdsifBhgl3WNQ&s",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-GYEs3Kxv9mwQU1oFTFvDEdsifBhgl3WNQ&s",
        title: "고스트 베이커리",
        genre: "뮤지컬",
        review_num: 99
    }
];

const Home = () => {
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
                        spaceBetween={50}
                        slidesPerView={3}
                        modules={[Navigation, Pagination]}
                        navigation={true}
                        pagination={{ clickable: true }}
                        className="mySwiper"
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
        </div>
    );
}

export default Home;