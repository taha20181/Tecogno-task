import React, { Component } from "react";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "./ChatWin.css";

export default class ChatWin extends Component {
  render() {
    return (
      <div className="chatwin">
        <div className="Nav">
          <div className="navItems">
            <div className="chatProfilePhoto">
              <h3>TB</h3>
            </div>
            <div className="chatDetail">
              <div className="chatUpper">
                <div className="chatName">
                  <b>Taha Bohra</b>
                </div>
              </div>
              <div className="chatLower">
                <div className="chatMessage">typing...</div>
              </div>
            </div>
          </div>
        </div>
        <div className="chatScreen">
          <div className='left'>
          <div className='textMessage'>
              <div className='inChatProfilePhoto'><b>TB</b></div>
              <div className='message'>What's up?</div>
            </div>
            <div className='textMessage'>
              <div className='inChatProfilePhoto'><b>TB</b></div>
              <div className='message'>How you doin'?</div>
            </div>
            <div className='textMessage'>
              <div className='inChatProfilePhoto'><b>TB</b></div>
              <div className='message'>Where have you been?</div>
            </div>
            <div className='textMessage'>
            <div className='inChatProfilePhoto'><b>TB</b></div>
              <div className='message'>Where have you been?Where have you been?Where have you been?Where have you been?Where have you been?Where have you been?Where have you been?Where have you been?</div>
            </div>
          </div>
          <div className='right'>
            <div className='textMessage'>
              <div className='message'>Helloo!</div>
              <div className='rightProfile'><b>B</b></div>
            </div>
            <div className='textMessage'>
              <div className='message'>How are you?</div>
              <div className='rightProfile'><b>B</b></div>
            </div>
          </div>
        </div>
        <div className="chatForm">
            <form className='' action='' method=''>
                <input type='text' placeholder='Type your query here' className='TextInput' />
                <div className='formIcons'>
                  <InsertEmoticonIcon />
                  <AttachFileIcon />
                </div>
            </form>
        </div>
      </div>
    );
  }
}
