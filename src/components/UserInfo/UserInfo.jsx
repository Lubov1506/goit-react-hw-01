import css from "./UserInfo.module.css";
const UserInfo = ({ username, tag, location, avatar }) => {
  return (
    <div className={css.info_wrap}>
      <img src={avatar} alt="User avatar" className={css.user_img} />
      <p className={css.user_name}>{username}</p>
      <p className={css.user_sub_info}>@{tag}</p>
      <p className={css.user_sub_info}>{location}</p>
    </div>
  );
};

export default UserInfo;
