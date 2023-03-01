import React from "react";
import styled from "styled-components";

import calendar from "./lunarcalendar";
import SmallCalender from "./SmallCalender";
import Weather from "./Weather";
import ChatroomPage from "./Chatroom";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  margin: 0 10%;
`;
const Thirds = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin: 1.5rem 0;
`;
const Leftdiv = styled.div`
  text-align: start;
`;
const Monthtext = styled.div`
  margin: 0 0 1.5rem 0;
`;
const Monthtexth4 = styled.h4`
  margin: 0.5rem 0;
`;
const Middlediv = styled.div`
  text-align: center;
`;
const Daytext = styled.h3`
  font-size: 2.5rem;
  margin: 0;
`;
const Datetext = styled.h3`
  font-size: 15rem;
  margin: -1rem 0;
`;
const Ldatetext = styled.h3`
  font-size: 2.5rem;
  margin: 0;
`;
const Rightdiv = styled.div`
  text-align: end;
`;
const Rightdivh4 = styled.h4`
  margin: 0;
`;
const Chatroom = styled.div`
  border: #b22c27 solid 3px;
  margin: 1.5rem 0 0 0;
  height: 19.5rem;
  border-radius: 10px;
`;

const BigCalender = () => {
  const [socket, setSocket] = useState(null);

  const setupSocket = () => {
    const token = localStorage.getItem("CC_Token");
    if (token && !socket) {
      const newSocket = io("http://localhost:8000", {
        query: {
          token: localStorage.getItem("CC_Token"),
        },
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
      });

      newSocket.on("connect", () => {});
      setSocket(newSocket);
    }
  };

  useEffect(() => {
    setupSocket();
    //eslint-disable-next-line
  }, []);

  const monthsName = [
    ["January", "一月"],
    ["February", "二月"],
    ["March", "三月"],
    ["April", "四月"],
    ["May", "五月"],
    ["June", "六月"],
    ["July", "七月"],
    ["August", "八月"],
    ["September", "九月"],
    ["October", "十月"],
    ["November", "十一月"],
    ["December", "十二月"],
  ];
  let today = new Date(2023,2,14);
  let ltoday = calendar.solar2lunar(2023,2,14);

  function ldate() {
    if (ltoday.vacation) {
      return ltoday.vacation;
    } else if (ltoday.Term) {
      return ltoday.Term;
    } else {
      return ltoday.IMonthCn + ltoday.IDayCn;
    }
  }

  return (
    <Container>
      <Thirds>
        <Leftdiv>
          <Weather />
          <Monthtext>
            <Monthtexth4>{monthsName[today.getMonth()][1]}</Monthtexth4>
            <Monthtexth4>{monthsName[today.getMonth()][0]}</Monthtexth4>
          </Monthtext>
          <SmallCalender />
        </Leftdiv>
        <Middlediv>
          <Daytext>{ltoday.ncWeek}</Daytext>
          <Datetext>{today.getDate()}</Datetext>
          {/* <Ldatetext>{ldate()}</Ldatetext> */}
          <Ldatetext>白色情人節</Ldatetext>
        </Middlediv>
        <Rightdiv>
          <Rightdivh4>{today.getFullYear()}</Rightdivh4>
          <Rightdivh4>{ltoday.gzYear}</Rightdivh4>
          <Chatroom>
            <ChatroomPage socket={socket} />
          </Chatroom>
        </Rightdiv>
      </Thirds>
    </Container>
  );
};

export default BigCalender;
