import s from "./FriendCard.module.css";
import clsx from "clsx";
const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.user_card}>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p className={clsx(isOnline ? s.online : s.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendCard;
