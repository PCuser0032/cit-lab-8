import React from "react";
import "./styles.css";
import UserList from "./components/UserList";
import BestFriendsList from "./components/BestFriendsList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="main-head">Лучшие друзья</header>
        <div className="list">
          <div className="users">
            <UserList />
          </div>
          <div className="best-friends">
            <BestFriendsList />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
