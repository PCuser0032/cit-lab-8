import React from "react";
import UserAvatar from "./UserAvatar";
import Button from "./AddButton";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToFriends } from "./Actions";

const UserCard = (props) => {
  return (
    <div className="user-card">
      <UserAvatar src={props.user.picture.large} width={100} height={100} />
      <div className="information">
        <div>
          {props.user.name.first} {props.user.name.last}
        </div>
        <div>
          From <b>{props.user.location.city}</b>
        </div>
        <div>Phone: {props.user.phone}</div>
        <div>Age: {props.user.dob.age}</div>
      </div>
      <Button onClick={() => props.addToFriends(props.user)} label={"add"} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserCard);
