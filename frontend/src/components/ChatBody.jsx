import  { useEffect, useRef } from "react";
import Message from "./Message.jsx";
import TypingIndicator from "./TypingIndicator.jsx";
import "../css/ChatBody.css";
import PropTypes from "prop-types";

const ChatBody = ({
  chatMessages,
  isChatbotTyping,
  typingIndicatorMessage,
}) => {
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className='chat-body' id='chat-body' ref={chatBodyRef}>
      {/* Render Message component for each message in chatMessages*/}
      {chatMessages.map((chat, index) => (
        <Message key={index} message={chat.message} type={chat.type} />
      ))}
      {/* If isChatbotTyping is true, it renders a TypingIndicator component */}
      {isChatbotTyping && (
        <TypingIndicator typingIndicatorMessage={typingIndicatorMessage} />
      )}
    </div>
  );
};
ChatBody.propTypes = {
  chatMessages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  isChatbotTyping: PropTypes.bool.isRequired,
  typingIndicatorMessage: PropTypes.string,
};


export default ChatBody;
