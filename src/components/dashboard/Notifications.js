import React, { Component } from "react";
import moment from "moment";

export default class Notifications extends Component {
  render() {
    const { notifications } = this.props;
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">Notifications</div>
            <ul className="notificationns">
              {notifications &&
                notifications.map(noti => (
                  <li key={noti.id}>
                    <span className="pink-text">{noti.user}</span>
                    <span className=""> {noti.content}</span>
                    <div className="grey-text note-date">
                      {moment(noti.time.toDate()).fromNow()}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
