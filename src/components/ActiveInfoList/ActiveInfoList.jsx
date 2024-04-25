import css from "./ActiveInfoList.module.css";
const ActiveInfoList = ({ followers, views, likes }) => {
  return (
    <ul className={css.info_list}>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  );
};

export default ActiveInfoList;
