import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./ChatModal.module.scss";

const ChatModal = ({ isOpen, onClose, chatId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (isOpen) {
      const savedMessages = JSON.parse(localStorage.getItem(chatId)) || [];
      setMessages(savedMessages);
    }
  }, [isOpen, chatId]);

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem(chatId, JSON.stringify(updatedMessages));
    setInput("");
  };

  return (
    <div className={`${styles.chatModalOverlay} ${isOpen ? styles.show : ""}`}>
      <div className={styles.chatModal}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <div className={styles.chatContent}>
          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.sender === "user" ? styles.user : styles.manager
                }`}>
                {msg.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className={styles.input}
          />
          <button onClick={handleSend} className={styles.sendButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
