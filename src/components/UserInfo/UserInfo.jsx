import s from "./UserInfo.module.css";
const UserInfo = ({ username, tag, location, avatar }) => {
  return (
    <div className={s.info_wrap}>
      <img src={avatar} alt="User avatar" className={s.user_img} />
      <p className={s.user_name}>{username}</p>
      <p className={s.user_sub_info}>@{tag}</p>
      <p className={s.user_sub_info}>{location}</p>
    </div>
  );
};

export default UserInfo;
