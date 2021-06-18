import React, { Component } from 'react'
import './chatContact.css';

export default class ChatContact extends Component {
    render() {
        return (
            <div className='chatContact'>
                <div className='chatContactList'>
                    <div className='profilePhoto'>
                        <h3>TB</h3>
                    </div>
                    <div className='chatDetail'>
                        <div className='chatUpper'>
                            <div className='chatName'>
                                <b>Taha Bohra</b>
                            </div>
                        </div>
                        <div className='chatLower'>
                            <div className='chatMessage'>
                                Lorem ipsum...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
