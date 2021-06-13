import React, { Component } from "react";
import { connect } from "react-redux";
import BestFriendCard from "./BestFriendCard";

class BestFriendsList extends Component {
  render() {
    return (
      <div>
        <div className="list-title">
          <header className="head-friend">Друзья</header>
        </div>
        {this.props.friends.map((user) => (
          <BestFriendCard friend={user} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(BestFriendsList);
