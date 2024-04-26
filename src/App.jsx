import userData from './assets/userData.json'
import friendsList from './assets/friends.json';
import transactions from './assets/transactions.json'
import Profile from "./components/Profile/Profile";
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return <>
    <Profile {...userData} />
    <FriendList friends={[...friendsList]} />
    <TransactionHistory items={ transactions} />
  </>
    ;
};

export default App;
