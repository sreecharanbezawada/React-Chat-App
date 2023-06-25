/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {Component} from 'react'
import InputEmoji from 'react-input-emoji'
import {v4} from 'uuid'
import {GrAddCircle} from 'react-icons/gr'
import {IoMdContacts} from 'react-icons/io'

import ChatItems from '../ChatItems'
import './index.css'

const name = 'Rolande Raimondi'
const poland = 'Poland Office'
const india = 'India Office'
const introductions = 'Introductions'

class Chats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      messageList: [],
      introductionChecked: true,
      indiaChecked: false,
      polandChecked: false,
    }
  }

  getMessageInput = text => {
    this.setState({inputText: text})
  }

  renderMessageList = () => {
    const {messageList} = this.state
    return messageList.map(eachMessage => (
      <ChatItems eachMessage={eachMessage} key={eachMessage.id} />
    ))
  }

  changeToIntro = () => {
    this.setState({
      introductionChecked: true,
      indiaChecked: false,
      polandChecked: false,
      messageList: [], // Clear the messageList for a fresh chat page
    })
  }

  changeToIndia = () => {
    this.setState({
      introductionChecked: false,
      indiaChecked: true,
      polandChecked: false,
      messageList: [], // Clear the messageList for a fresh chat page
    })
  }

  changeToPoland = () => {
    this.setState({
      introductionChecked: false,
      indiaChecked: false,
      polandChecked: true,
      messageList: [], // Clear the messageList for a fresh chat page
    })
  }

  onAddMessage = () => {
    const {inputText} = this.state
    const user_list = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']
    const randomName =
      user_list[Math.ceil(Math.random() * user_list.length - 1)]
    console.log(randomName)
    const newMessage = {
      id: v4(),
      message: inputText,
      date: new Date(),
      userName: randomName,
    }
    this.setState(prevState => ({
      messageList: [...prevState.messageList, newMessage],
      inputText: '',
    }))
  }

  renderConversation = () => {
    const {inputText, messageList} = this.state
    return (
      <div className="conversations-container">
        <div className="header-part">
          <div className="heading-desc">
            <h2 className="role1">Introductions</h2>
            <p className="role">This Channel Is For Company Wide Chatter</p>
          </div>
          <div className="counts">
            <h4 className="role">{messageList.length}|100</h4>
            <IoMdContacts className="contacts-logo" />
          </div>
        </div>
        <hr className="line" />
        <ul className="list-container">{this.renderMessageList()}</ul>
        <div className="input-container">
          <InputEmoji
            className="input-text"
            placeholder="Type Message"
            value={inputText}
            onChange={this.getMessageInput}
            onEnter={this.onAddMessage}
          />
        </div>
      </div>
    )
  }

  renderConversationIndia = () => {
    const {inputText} = this.state
    const messageList = [] // Clear the messageList for a fresh chat page
    return (
      <div className="conversations-container">
        <div className="header-part">
          <div className="heading-desc">
            <h2 className="role1">India</h2>
            <p className="role">This Channel Is For Company Wide Chatter</p>
          </div>
          <div className="counts">
            <h4 className="role">{messageList.length}|100</h4>
            <IoMdContacts className="contacts-logo" />
          </div>
        </div>
        <hr className="line" />
        <ul className="list-container">{this.renderMessageList()}</ul>
        <div className="input-container">
          <InputEmoji
            className="input-text"
            placeholder="Type Message"
            value={inputText}
            onChange={this.getMessageInput}
            onEnter={this.onAddMessage}
          />
        </div>
      </div>
    )
  }

  renderConversationPoland = () => {
    const {inputText} = this.state
    const messageList = [] // Clear the messageList for a fresh chat page
    return (
      <div className="conversations-container">
        <div className="header-part">
          <div className="heading-desc">
            <h2 className="role1">Poland</h2>
            <p className="role">This Channel Is For Company Wide Chatter</p>
          </div>
          <div className="counts">
            <h4 className="role">{messageList.length}|100</h4>
            <IoMdContacts className="contacts-logo" />
          </div>
        </div>
        <hr className="line" />
        <ul className="list-container">{this.renderMessageList()}</ul>
        <div className="input-container">
          <InputEmoji
            className="input-text"
            placeholder="Type Message"
            value={inputText}
            onChange={this.getMessageInput}
            onEnter={this.onAddMessage}
          />
        </div>
      </div>
    )
  }

  render() {
    const {introductionChecked, polandChecked, indiaChecked} = this.state
    const getIntroClassName = introductionChecked
      ? 'conversation-container-intro'
      : ''
    const getIndiaClassName = indiaChecked ? 'conversation-container-intro' : ''
    const getPolandClassName = polandChecked
      ? 'conversation-container-intro'
      : ''

    return (
      <div className="overall-container">
        <div className="menu-container">
          <div className="profile-container">
            <div className="avatar">
              <p className="avatar-name">
                {name[0]}
                {name[0]}
              </p>
            </div>
            <div>
              <h1 className="my-name">{name}</h1>
              <p className="role3">Research Nurse</p>
            </div>
          </div>
          <div className="converations-container">
            <h1 className="role">Conversations</h1>
            <GrAddCircle className="add-icon" />
          </div>
          <div
            className={`conversation-container ${getPolandClassName}`}
            onClick={this.changeToPoland}
          >
            <div className="conversation-logo">
              <p>#</p>
            </div>
            <p>{poland}</p>
          </div>
          <div
            className={`conversation-container ${getIntroClassName}`}
            onClick={this.changeToIntro}
          >
            <div className="conversation-logo">
              <p>#</p>
            </div>
            <p>{introductions}</p>
          </div>

          <div
            className={`conversation-container ${getIndiaClassName}`}
            onClick={this.changeToIndia}
          >
            <div className="conversation-logo">
              <p>#</p>
            </div>
            <p>{india}</p>
          </div>
        </div>
        {introductionChecked && this.renderConversation()}
        {polandChecked && this.renderConversationPoland()}
        {indiaChecked && this.renderConversationIndia()}
      </div>
    )
  }
}

export default Chats
