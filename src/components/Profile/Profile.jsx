import ActiveInfoList from "../ActiveInfoList/ActiveInfoList";
import UserInfo from "../UserInfo/UserInfo";
import css from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  const dataForUserInfo = {
    username,
    tag,
    location,
    avatar,
  };
  return (
    <div className={css.wrapper}>
      <UserInfo {...dataForUserInfo} />
      <ActiveInfoList {...stats} />
    </div>
  );
};

export default Profile;
