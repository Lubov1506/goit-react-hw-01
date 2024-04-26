import ActiveInfoList from "../ActiveInfoList/ActiveInfoList";
import UserInfo from "../UserInfo/UserInfo";
import s from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  const dataForUserInfo = {
    username,
    tag,
    location,
    avatar,
  };
  return (
    <div className={s.wrapper}>
      <UserInfo {...dataForUserInfo} />
      <ActiveInfoList stats={Object.entries(stats)} />
    </div>
  );
};

export default Profile;
