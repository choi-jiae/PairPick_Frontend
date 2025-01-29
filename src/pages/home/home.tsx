import PlayCard from "../../components/contents/playCard";

const Home = () => {
    return (
        <div>
            <div>
                누구로 볼까? 고민된다면 페어픽! 최애 페어의 매력을 공유해보세요 ✨
            </div>
            <div>
                <PlayCard
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-GYEs3Kxv9mwQU1oFTFvDEdsifBhgl3WNQ&s"
                    title="고스트 베이커리"
                    description="고스트 베이커리리의 매력을 공유해보세요!"
                />
            </div>
        </div>
    );
}

export default Home;