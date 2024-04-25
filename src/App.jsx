import userData from './components/userData.json'
import Profile from "./components/Profile/Profile";

const App = () => {
  return <>
    <Profile {...userData} />
    
  </>;
};

export default App;
