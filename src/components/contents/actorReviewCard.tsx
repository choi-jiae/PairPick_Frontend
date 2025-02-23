import "../../css/actorReviewCard.css";

interface ActorReviewCardProps {
  role: string;
  actor_ids: Array<number>;
  actor_names: Array<string>;
  actor_imgs: Array<string>;
}

const ActorReviewCard = ({
  role,
  actor_ids,
  actor_names,
  actor_imgs,
}: ActorReviewCardProps) => {
  return (
    <div className="actor-review-card">
      <div className="role">{role} 역</div>
      <div className="actors">
        {actor_ids.map((actor_id, index) => (
          <div className="actor" key={actor_id}>
            <img src={actor_imgs ? actor_imgs[index] : ""} alt="actor" />
            <div className="actor-name">{actor_names[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorReviewCard;
