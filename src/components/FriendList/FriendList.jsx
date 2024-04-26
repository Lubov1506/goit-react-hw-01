import css from './FriendList.module.css'
import FriendCard from "../FriendCard/FriendCard";

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={css.friends_list }>
      {friends.map(friend => {
        return <FriendCard key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

export default FriendList;
