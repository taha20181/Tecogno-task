import React, { Component } from "react";
import "./ChatList.css";
import ChatContact from "./ChatContact";
import { Tab } from "@material-ui/core";
import { Nav } from "react-bootstrap";

export default class ChatList extends Component {
  render() {
    return (
      <div className="chatlist">
        <div className="tabs">
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/home">Opened</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Solved</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="chatListItems">
          <ChatContact />
          <ChatContact />
          <ChatContact />
          <ChatContact />
          <ChatContact />
          <ChatContact />
          <ChatContact />
            <ChatContact />
            <ChatContact />
            {/* <ChatContact />
            <ChatContact /> */}
        </div>
      </div>
    );
  }
}
