import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const ChatRoomPage = styled.div`
  width: 100%;
`;
const ChatroomSection = styled.div`
  width: 100%;
  height: 19.1rem;
  margin: auto;
  position: relative;
`;
const ChatroomContent = styled.div`
  position: absolute;
  top: 0.6rem;
  left: 0;
  right: 0;
  bottom: 3.5rem;
  padding: 0.5rem;
  overflow: auto;
  padding-top: 15px;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b22c27;
    width: 0.1rem;
    border-radius: 1rem;
  }
`;
const Message = styled.div`
  margin-bottom: 0.3rem;
`;
const ChatroomActions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 72px;
  grid-gap: 1rem;
  border-top: 1px solid #eee;
`;
const Join = styled.button`
  background: #b22c27;
  padding: 0.25rem 1rem;
  border-radius: 2px;
  color: white;
  height: 100%;
  border: none;
`;
const Input = styled.input`
  border: none;
  padding: 0.5rem 0.1rem;
  width: 100%;
  border-radius: 2px;
  transition: all 0.5s;
  &:focus {
    border-bottom: 1px solid #ccc;
  }
`;

const ChatroomPage = ({ socket }) => {
  const ifo = useLocation();
  let chatroomId = ifo.pathname;

  const [messages, setMessages] = React.useState([]);
  const messageRef = React.useRef();
  const [userId, setUserId] = React.useState("");
  const [messageAll, setMessageAll] = React.useState([]);
  const chatListRef = React.useRef(null);
  const [input, setInput] = React.useState();
  const [buttons, setButtons] = React.useState();

  // 监听聊天数据的变化，改变聊天容器元素的 scrollTop 值让页面滚到最底部
  React.useEffect(() => {
    const current = chatListRef.current;
    //scrollHeight是页面的高度
    current.scrollTop = current.scrollHeight;
  }, [messageAll]);

  const getChatrooms = () => {
    axios
      .get("http://localhost:8000/message", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("CC_Token"),
        },
      })
      .then((response) => {
        setMessageAll(response.data);
      })
      .catch((err) => {
        setTimeout(getChatrooms, 3000);
      });
  };

  React.useEffect(() => {
    getChatrooms();
    //eslint-disable-next-line
  }, [input, buttons, messages]);

  const sendMessage = (e) => {
    let nim = Number(e.target.clientHeight);
    let max = Math.floor(Math.random() * 50);
    setButtons(nim + max);
    if (socket) {
      socket.emit("chatroomMessage", {
        message: messageRef.current.value,
      });
      messageRef.current.value = "";
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("CC_Token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.id);
    }
    if (socket) {
      socket.on("newMessage", (message) => {
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });
    }
    //eslint-disable-next-line
  }, [messages]);

  React.useEffect(() => {
    // setchatroomId("g1");
    if (socket) {
      socket.emit("joinRoom", {
        chatroomId,
      });
    }

    return () => {
      //Component Unmount
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomId,
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return (
    <ChatRoomPage>
      <ChatroomSection>
        {/* <div className="cardHeader"></div> */}
        {/* {JSON.stringify(allmessages)} */}
        <ChatroomContent ref={chatListRef}>
          {messageAll.map((message, i) => (
            <marquee scrollamount="5" key={i}>
              <Message key={i}>
                <span
                  className={
                    userId === message.user ? "ownMessage" : "otherMessage"
                  }
                >
                  {message.name}:
                </span>
                {/* {userId === message.user ? (
                  <ownMessage>{message.name}</ownMessage>
                ) : (
                  <otherMessage>{message.name}</otherMessage>
                )} */}{" "}
                {message.message}{" "}
                <span
                  style={{
                    fontSize: "5px",
                    marginLeft: "10px",
                    color: "#bbbbbb",
                  }}
                >
                  {new Date(message.time).toLocaleTimeString()}
                </span>
              </Message>
            </marquee>
          ))}
        </ChatroomContent>
        <ChatroomActions>
          <Input
            type="text"
            name="message"
            placeholder="請留言...."
            ref={messageRef}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />

          <Join onClick={sendMessage}>送出</Join>
        </ChatroomActions>
      </ChatroomSection>
    </ChatRoomPage>
  );
};

export default ChatroomPage;
