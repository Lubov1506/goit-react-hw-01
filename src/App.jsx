import userData from './assets/userData.json'
import friendsList from './assets/friends.json';
import Profile from "./components/Profile/Profile";
import FriendList from './components/FriendList/FriendList';

const App = () => {
  return <>
    <Profile {...userData} />
    <FriendList friends={[...friendsList]} />
  </>;
};

export default App;
