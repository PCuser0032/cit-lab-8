import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromFriends } from "./Actions";
import Button from "./RemoveButton";
import UserAvatar from "./UserAvatar";

const BestFriendCard = (props) => {
  return (
    <div className="friend-card">
      <UserAvatar src={props.friend.photo} width={100} height={100} />
      <div className="information">
        <div>{props.friend.name}</div>
        <div>
          From <b>{props.friend.location}</b>
        </div>
        <div>Phone: {props.friend.phone}</div>
        <div>Age: {props.friend.age}</div>
      </div>
      <Button
        label="delete"
        onClick={() => props.deleteFromFriends(props.friend)}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ deleteFromFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BestFriendCard);
