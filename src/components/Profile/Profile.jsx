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
  console.log(Object.entries(stats));
  return (
    <div className={s.wrapper}>
      <UserInfo {...dataForUserInfo} />
      <ActiveInfoList stats={Object.entries(stats)} />
    </div>
  );
};

export default Profile;
