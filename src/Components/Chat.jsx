import React ,{useState,useRef, useEffect} from 'react'
import './Chat.css'
const Chat = () => {
  class Chatbox {
    constructor() {
      this.args = {
        openButton: document.querySelector('.chatbox__button'),
        chatBox: document.querySelector('.chatbox__support'),
        sendButton: document.querySelector('.send__button'),
      };

      this.state = false;
      this.messages = [];
    }

    display() {
      const { openButton, chatBox, sendButton } = this.args;

      openButton.addEventListener('click', () => this.toggleState(chatBox));

      sendButton.addEventListener('click', () => this.onSendButton(chatBox));

      const node = chatBox.querySelector('input');
      node.addEventListener('keyup', ({ key }) => {
        if (key === 'Enter') {
          this.onSendButton(chatBox);
        }
      });
    }

    toggleState(chatbox) {
      this.state = !this.state;

      if (this.state) {
        chatbox.classList.add('chatbox--active');
      } else {
        chatbox.classList.remove('chatbox--active');
      }
    }

    async onSendButton(chatbox) {
      const textField = chatbox.querySelector('input');
      const text1 = textField.value;
      if (text1 === '') {
        return;
      }

      const msg1 = { name: 'User', message: text1 };
      this.messages.push(msg1);

      try {
        const r = await fetch('http://127.0.0.1:3001/predict', {
          method: 'POST',
          body: JSON.stringify({ message: text1 }),
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const obj = await r.json();
        const msg2 = { name: 'Sam', message: obj.answer };
        this.messages.push(msg2);
        this.updateChatText(chatbox);
        textField.value = '';
      } catch (error) {
        console.error('Error:', error);
        alert(error);
        this.updateChatText(chatbox);
        textField.value = '';
      }
    }

    updateChatText(chatbox) {
      let html = '';
      this.messages.slice().reverse().forEach(function (item, index) {
        if (item.name === 'Sam') {
          html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
        } else {
          html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
        }
      });

      const chatmessage = chatbox.querySelector('.chatbox__messages');
      chatmessage.innerHTML = html;
    }
  }

  useEffect(() => {
    const chatbox = new Chatbox();
    chatbox.display();
  }, []);
  return (

    <div class="container">
      
    <div class="chatbox">
      <div class="chatbox__support">
        <div class="chatbox__header">
          <div class="chatbox__image--header">
            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
          </div>
          <div class="chatbox__content--header">
            <h4 class="chatbox__heading--header">Chat support</h4>
            <p class="chatbox__description--header">Hi. My name is Sam. How can I help you?</p>
          </div>
        </div>
        <div class="chatbox__messages">
          <div></div>
        </div>
        <div class="chatbox__footer">
          <input type="text" placeholder="Write a message..."  />
          <button class="chatbox__send--footer send__button">Send</button>
        </div>
      </div>
      <div class="chatbox__button">
        <button>HELLO</button>
      </div>
    </div>
  </div>
  )
}

export default Chat;