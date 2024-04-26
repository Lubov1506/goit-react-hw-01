import css from "./FriendCard.module.css";
import clsx from "clsx";
const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.user_card}>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendCard;
