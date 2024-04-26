const ActiveInfoItem = ({ item }) => {
  const [position, value] = item;
  const properPosition = `${position[0].toUpperCase()}${position.slice(1)}`;

  return (
    <li>
      <span>{properPosition}</span>
      <span>{value}</span>
    </li>
  );
};

export default ActiveInfoItem;
