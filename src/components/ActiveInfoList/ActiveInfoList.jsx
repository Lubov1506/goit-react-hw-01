import ActiveInfoItem from "../ActiveInfoItem/ActiveInfoItem";
import s from "./ActiveInfoList.module.css";
const ActiveInfoList = ({stats}) => {

  return (
    <ul className={s.info_list}>
      {stats.map((item, idx) => {
        return <ActiveInfoItem key={idx} item={item} />;
      })}
    </ul>
  );
};

export default ActiveInfoList;
