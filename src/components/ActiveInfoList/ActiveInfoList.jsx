import ActiveInfoItem from "../ActiveInfoItem/ActiveInfoItem";
import s from "./ActiveInfoList.module.css";
const ActiveInfoList = (stats) => {
  const statArr = [];
  for (const key in stats) {
    const statItem = [key, stats[key]];
    statArr.push(statItem);
  }

  return (
    <ul className={s.info_list}>
      {statArr.map((item, idx) => {
        return <ActiveInfoItem key={idx} item={item} />;
      })}
    </ul>
  );
};

export default ActiveInfoList;
