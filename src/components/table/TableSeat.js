import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TableSeat({ setShowTableInfo ,showTableInfo }) {
  const navigate = useNavigate();
  const clickTableHandler = (e) => {
    if (e.target.id.length === 2) {
      navigate(`/table/${e.target.id}`);
      setShowTableInfo(true);
    }
  };
  const [tableStatus, setTableStatus] = useState(false);
  const [callesStatus, setCallesStatus] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:1802/tablestate").then((result) => {
      setTableStatus(
        result.data.map((value) => {
          if (value.seated === 0) {
            return false;
          } else {
            return true;
          }
        })
      );
      setCallesStatus(
        result.data.map((value) => {
          if (value.called === 0) {
            return false;
          } else {
            return true;
          }
        })
      );
    });
  }, [showTableInfo]);
  return (
    <>
      <svg
        onClick={clickTableHandler}
        xmlns="http://www.w3.org/2000/svg"
        id="TableAndSeat"
        x="0"
        y="0"
        enableBackground="new 0 0 1941.5 929.1"
        version="1.1"
        viewBox="0 0 1941.5 929.1"
        xmlSpace="preserve"
      >
        <g
          id="d3"
          className={
            (tableStatus[19] && "seated ") + (callesStatus[19] && " called")
          }
        >
          <path
            id="D3-3"
            d="M70.8 689.6H.5v168.7h70.3V689.6z"
            className="st0"
          ></path>
          <path
            id="D3-2"
            d="M190.3 858.3c19.4 0 35.2 15.7 35.2 35.2s-15.7 35.2-35.2 35.2H35.7C16.3 928.7.5 913 .5 893.5v-35.2h189.8z"
            className="st0"
          ></path>
          <path
            id="D3-1"
            d="M225.5 619.2v35.2c0 19.4-15.7 35.2-35.2 35.2H.5v-70.3h225z"
            className="st0"
          ></path>
          <path
            id="D3"
            d="M225.5 703.6H84.9v140.6h140.6V703.6z"
            className="st1"
          ></path>
          <text
            id="D3"
            className="st2 st3"
            transform="translate(124.203 793.058)"
          >
            D3
          </text>
        </g>
        <g
          id="d2"
          className={
            (tableStatus[18] && "seated ") + (callesStatus[18] && " called")
          }
        >
          <path
            id="D2-3"
            d="M70.8 380.2H.5v168.7h70.3V380.2z"
            className="st0"
          ></path>
          <path
            id="D2-2"
            d="M190.3 548.9c19.4 0 35.2 15.7 35.2 35.2v35.2H.5V549h189.8z"
            className="st0"
          ></path>
          <path
            id="D2-1"
            d="M225.5 309.9V345c0 19.4-15.7 35.2-35.2 35.2H.5v-70.3h225z"
            className="st0"
          ></path>
          <path
            id="D2"
            d="M225.5 394.2H84.9v140.6h140.6V394.2z"
            className="st1"
          ></path>
          <text
            id="D2"
            className="st2 st3"
            transform="translate(124.203 483.683)"
          >
            D2
          </text>
        </g>
        <g
          id="d1"
          className={
            (tableStatus[17] && "seated ") + (callesStatus[17] && " called")
          }
        >
          <path
            id="D1-3"
            d="M70.8 70.8H.5v168.7h70.3V70.8z"
            className="st0"
          ></path>
          <path
            id="D1-2"
            d="M190.3 239.6c19.4 0 35.2 15.7 35.2 35.2V310H.5v-70.3h189.8z"
            className="st0"
          ></path>
          <path
            id="D1-1"
            d="M190.3.5c19.4 0 35.2 15.7 35.2 35.2s-15.7 35.2-35.2 35.2H.5V35.7C.5 16.3 16.2.5 35.7.5h154.6z"
            className="st0"
          ></path>
          <path
            id="D1"
            d="M225.5 84.9H84.9v140.6h140.6V84.9z"
            className="st1"
          ></path>
          <text
            id="D1"
            className="st2 st3"
            transform="translate(124.203 174.308)"
          >
            D1
          </text>
        </g>
        <g
          id="c5"
          className={
            (tableStatus[16] && "seated ") + (callesStatus[16] && " called")
          }
        >
          <path
            id="C5-4"
            d="M418.8 918.4c-5.5 5.5-14.4 5.5-19.9 0L369 888.5c-5.5-5.5-5.5-14.4 0-19.9l39.8-39.8 49.7 49.7-39.7 39.9z"
            className="st0"
          ></path>
          <path
            id="C5-3"
            d="M597.7 868.6c5.5 5.5 5.5 14.4 0 19.9l-29.8 29.8c-5.5 5.5-14.4 5.5-19.9 0l-39.8-39.8 49.7-49.7 39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="C5-2"
            d="M548 689.7c5.5-5.5 14.4-5.5 19.9 0l29.8 29.8c5.5 5.5 5.5 14.4 0 19.9L558 779.1l-49.7-49.7 39.7-39.7z"
            className="st0"
          ></path>
          <path
            id="C5-1"
            d="M369 739.4c-5.5-5.5-5.5-14.4 0-19.9l29.8-29.8c5.5-5.5 14.4-5.5 19.9 0l39.8 39.8-49.7 49.7-39.8-39.8z"
            className="st0"
          ></path>
          <path
            id="C5"
            d="M483.4 860.3c31.1 0 56.2-25.2 56.2-56.2s-25.2-56.2-56.2-56.2c-31.1 0-56.2 25.2-56.2 56.2s25.1 56.2 56.2 56.2z"
            className="st1"
          ></path>
          <text
            id="C5"
            className="st2 st3"
            transform="translate(454.88 821.137)"
          >
            C5
          </text>
        </g>
        <g
          id="c4"
          className={
            (tableStatus[15] && "seated ") + (callesStatus[15] && " called")
          }
        >
          <path
            id="C4-4"
            d="M836.1 918.4c-5.5 5.5-14.4 5.5-19.9 0l-29.8-29.8c-5.5-5.5-5.5-14.4 0-19.9l39.8-39.8 49.7 49.7-39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="C4-3"
            d="M1015.1 868.6c5.5 5.5 5.5 14.4 0 19.9l-29.8 29.8c-5.5 5.5-14.4 5.5-19.9 0l-39.8-39.8 49.7-49.7 39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="C4-2"
            d="M965.4 689.7c5.5-5.5 14.4-5.5 19.9 0l29.8 29.8c5.5 5.5 5.5 14.4 0 19.9l-39.8 39.8-49.7-49.7 39.8-39.8z"
            className="st0"
          ></path>
          <path
            id="C4-1"
            d="M786.4 739.4c-5.5-5.5-5.5-14.4 0-19.9l29.8-29.8c5.5-5.5 14.4-5.5 19.9 0l39.8 39.8-49.7 49.7-39.8-39.8z"
            className="st0"
          ></path>
          <path
            id="C4"
            d="M900.7 860.3c31.1 0 56.2-25.2 56.2-56.2s-25.2-56.2-56.2-56.2-56.2 25.1-56.2 56.1 25.2 56.3 56.2 56.3z"
            className="st1"
          ></path>
          <text
            id="C4"
            className="st2 st3"
            transform="translate(872.212 821.137)"
          >
            C4
          </text>
        </g>
        <g
          id="c3"
          className={
            (tableStatus[14] && "seated ") + (callesStatus[14] && " called")
          }
        >
          <path
            id="C3-4"
            d="M1253.4 918.4c-5.5 5.5-14.4 5.5-19.9 0l-29.8-29.8c-5.5-5.5-5.5-14.4 0-19.9l39.8-39.8 49.7 49.7-39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="C3-3"
            d="M1432.4 868.6c5.5 5.5 5.5 14.4 0 19.9l-29.8 29.8c-5.5 5.5-14.4 5.5-19.9 0l-39.8-39.8 49.7-49.7 39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="C3-2"
            d="M1382.7 689.7c5.5-5.5 14.4-5.5 19.9 0l29.8 29.8c5.5 5.5 5.5 14.4 0 19.9l-39.8 39.8-49.7-49.7 39.8-39.8z"
            className="st0"
          ></path>
          <path
            id="C3-1"
            d="M1203.7 739.4c-5.5-5.5-5.5-14.4 0-19.9l29.8-29.8c5.5-5.5 14.4-5.5 19.9 0l39.8 39.8-49.7 49.7-39.8-39.8z"
            className="st0"
          ></path>
          <path
            id="C3"
            d="M1318.1 860.3c31.1 0 56.2-25.2 56.2-56.2s-25.2-56.2-56.2-56.2-56.2 25.2-56.2 56.2 25.1 56.2 56.2 56.2z"
            className="st1"
          ></path>
          <text
            id="C3"
            className="st2 st3"
            transform="translate(1289.558 821.137)"
          >
            C3
          </text>
        </g>
        <g
          id="c2"
          className={
            (tableStatus[13] && "seated ") + (callesStatus[13] && " called")
          }
        >
          <path
            id="C2-4"
            d="M1044.2 624.5c-5.5 5.5-14.4 5.5-19.9 0l-29.8-29.8c-5.5-5.5-5.5-14.4 0-19.9l39.8-39.8 49.7 49.7-39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="C2-3"
            d="M1223.2 574.7c5.5 5.5 5.5 14.4 0 19.9l-29.8 29.8c-5.5 5.5-14.4 5.5-19.9 0l-39.8-39.8 49.7-49.7 39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="C2-2"
            d="M1173.5 395.8c5.5-5.5 14.4-5.5 19.9 0l29.8 29.8c5.5 5.5 5.5 14.4 0 19.9l-39.8 39.8-49.7-49.7 39.8-39.8z"
            className="st0"
          ></path>
          <path
            id="C2-1"
            d="M994.5 445.5c-5.5-5.5-5.5-14.4 0-19.9l29.8-29.8c5.5-5.5 14.4-5.5 19.9 0l39.8 39.8-49.7 49.7-39.8-39.8z"
            className="st0"
          ></path>
          <path
            id="C2"
            d="M1108.9 566.4c31.1 0 56.2-25.2 56.2-56.2s-25.2-56.2-56.2-56.2-56.2 25.2-56.2 56.2 25.1 56.2 56.2 56.2z"
            className="st1"
          ></path>
          <text
            id="C2"
            className="st2 st3"
            transform="translate(1080.35 527.23)"
          >
            C2
          </text>
        </g>
        <g
          id="c1"
          className={
            (tableStatus[12] && "seated ") + (callesStatus[12] && " called")
          }
        >
          <path
            id="C1-4"
            d="M626.9 624.5c-5.5 5.5-14.4 5.5-19.9 0l-29.8-29.8c-5.5-5.5-5.5-14.4 0-19.9L617 535l49.7 49.7-39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="C1-3"
            d="M805.9 574.7c5.5 5.5 5.5 14.4 0 19.9L776 624.5c-5.5 5.5-14.4 5.5-19.9 0l-39.8-39.8L766 535l39.9 39.7z"
            className="st0"
          ></path>
          <path
            id="C1-2"
            d="M756.1 395.8c5.5-5.5 14.4-5.5 19.9 0l29.8 29.8c5.5 5.5 5.5 14.4 0 19.9L766 485.3l-49.7-49.7 39.8-39.8z"
            className="st0"
          ></path>
          <path
            id="C1-1"
            d="M577.2 445.5c-5.5-5.5-5.5-14.4 0-19.9l29.8-29.8c5.5-5.5 14.4-5.5 19.9 0l39.8 39.8-49.7 49.7-39.8-39.8z"
            className="st0"
          ></path>
          <path
            id="C1"
            d="M691.5 566.4c31.1 0 56.2-25.2 56.2-56.2S722.5 454 691.5 454c-31.1 0-56.2 25.2-56.2 56.2s25.2 56.2 56.2 56.2z"
            className="st1"
          ></path>
          <text
            id="C1"
            className="st2 st3"
            transform="translate(663.005 527.23)"
          >
            C1
          </text>
        </g>
        <g
          id="b8"
          className={
            (tableStatus[11] && "seated ") + (callesStatus[11] && " called")
          }
        >
          <path
            id="B8s"
            d="M1791.7 894.3c-5.5 5.5-14.4 5.5-19.9 0l-29.8-29.8c-5.5-5.5-5.5-14.4 0-19.9l39.8-39.8 49.7 49.7-39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="B8"
            d="M1851.3 695.4l-79.6 79.6 89.5 89.5 79.6-79.5-89.5-89.6z"
            className="st1"
          ></path>
          <text
            id="B8"
            className="st2 st3"
            transform="translate(1826.933 791.028)"
          >
            B8
          </text>
        </g>
        <g
          id="b7"
          className={
            (tableStatus[10] && "seated ") + (callesStatus[10] && " called")
          }
        >
          <path
            id="B7s"
            d="M1702.2 804.8c-5.5 5.5-14.4 5.5-19.9 0l-29.8-29.8c-5.5-5.5-5.5-14.4 0-19.9l39.8-39.8L1742 765l-39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="B7"
            d="M1761.8 605.9l-79.6 79.5 89.5 89.5 79.6-79.5-89.5-89.5z"
            className="st1"
          ></path>
          <text
            id="B7"
            className="st2 st3"
            transform="translate(1737.453 701.534)"
          >
            B7
          </text>
        </g>
        <g
          id="b6"
          className={
            (tableStatus[9] && "seated ") + (callesStatus[9] && " called")
          }
        >
          <path
            id="B6s"
            d="M1612.7 715.3c-5.5 5.5-14.4 5.5-19.9 0l-29.8-29.8c-5.5-5.5-5.5-14.4 0-19.9l39.8-39.8 49.7 49.7-39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="B6"
            d="M1672.3 516.4l-79.6 79.5 89.5 89.5 79.6-79.5-89.5-89.5z"
            className="st1"
          ></path>
          <text
            id="B6"
            className="st2 st3"
            transform="translate(1647.959 612.056)"
          >
            B6
          </text>
        </g>
        <g
          id="b5"
          className={
            (tableStatus[8] && "seated ") + (callesStatus[8] && " called")
          }
        >
          <path
            id="B5s"
            d="M1523.2 625.8c-5.5 5.5-14.4 5.5-19.9 0l-29.8-29.8c-5.5-5.5-5.5-14.4 0-19.9l39.8-39.8L1563 586l-39.8 39.8z"
            className="st0"
          ></path>
          <path
            id="B5"
            d="M1592.8 595.9l-89-89.2 112.5-46.4 56.1 56.1-79.6 79.5z"
            className="st1"
          ></path>
          <text
            id="B5"
            className="st2 st3"
            transform="translate(1558.711 539.266)"
          >
            B5
          </text>
        </g>
        <g
          id="b4"
          className={
            (tableStatus[7] && "seated ") + (callesStatus[7] && " called")
          }
        >
          <path
            id="B4s"
            d="M1433.5 478.6c-7.8 0-14.1-6.3-14.1-14.1v-42.2c0-7.8 6.3-14.1 14.1-14.1h56.2v70.3h-56.2z"
            className="st0"
          ></path>
          <path
            id="B4"
            d="M1503.8 506.7V380.2h112.5v80.2l-112.5 46.3z"
            className="st1"
          ></path>
          <text
            id="B4"
            className="st2 st3"
            transform="translate(1530.685 454.59)"
          >
            B4
          </text>
        </g>
        <g
          id="b3"
          className={
            (tableStatus[6] && "seated ") + (callesStatus[6] && " called")
          }
        >
          <path
            id="B3s"
            d="M1433.5 352.1c-7.8 0-14.1-6.3-14.1-14.1v-42.2c0-7.8 6.3-14.1 14.1-14.1h56.2V352h-56.2z"
            className="st0"
          ></path>
          <path
            id="B3"
            d="M1616.3 253.6h-112.5v126.6h112.5V253.6z"
            className="st1"
          ></path>
          <text
            id="B3"
            className="st2 st3"
            transform="translate(1530.685 328.027)"
          >
            B3
          </text>
        </g>
        <g
          id="b2"
          className={
            (tableStatus[5] && "seated ") + (callesStatus[5] && " called")
          }
        >
          <path
            id="B2s"
            d="M1433.5 225.5c-7.8 0-14.1-6.3-14.1-14.1v-42.2c0-7.8 6.3-14.1 14.1-14.1h56.2v70.3h-56.2z"
            className="st0"
          ></path>
          <path
            id="B2"
            d="M1616.3 127.1h-112.5v126.6h112.5V127.1z"
            className="st1"
          ></path>
          <text
            id="B2"
            className="st2 st3"
            transform="translate(1530.685 201.464)"
          >
            B2
          </text>
        </g>
        <g
          id="b1"
          className={
            (tableStatus[4] && "seated ") + (callesStatus[4] && " called")
          }
        >
          <path
            id="B1s"
            d="M1433.5 98.9c-7.8 0-14.1-6.3-14.1-14.1V42.7c0-7.8 6.3-14.1 14.1-14.1h56.2v70.3h-56.2z"
            className="st0"
          ></path>
          <path
            id="B1"
            d="M1616.3.5h-112.5v126.6h112.5V.5z"
            className="st1"
          ></path>
          <text
            id="B1"
            className="st2 st3"
            transform="translate(1530.685 76.902)"
          >
            B1
          </text>
        </g>
        <g
          id="a4"
          className={
            (tableStatus[3] && "seated ") + (callesStatus[3] && " called")
          }
        >
          <path
            id="A4-3"
            d="M1153.6 253.6c0 7.8-6.3 14.1-14.1 14.1h-42.2c-7.8 0-14.1-6.3-14.1-14.1v-56.2h70.3v56.2z"
            className="st0"
          ></path>
          <path
            id="A4-2"
            d="M1252.1 162.2c0 19.4-15.7 35.2-35.2 35.2s-35.2-15.7-35.2-35.2V.5h35.2c19.4 0 35.2 15.7 35.2 35.2v126.5z"
            className="st0"
          ></path>
          <path
            id="A4-1"
            d="M1181.7.5H1013v70.3h168.7V.5z"
            className="st0"
          ></path>
          <path
            id="A4"
            d="M1167.7 84.9h-98.4v98.4h98.4V84.9z"
            className="st1"
          ></path>
          <text
            id="A4"
            className="st2 st3"
            transform="translate(1088.69 148.215)"
          >
            A4
          </text>
        </g>
        <g
          id="a3"
          className={
            (tableStatus[2] && "seated ") + (callesStatus[2] && " called")
          }
        >
          <path
            id="A3-2"
            d="M970.8 253.6c0 7.8-6.3 14.1-14.1 14.1h-42.2c-7.8 0-14.1-6.3-14.1-14.1v-56.2h70.3v56.2z"
            className="st0"
          ></path>
          <path
            id="A3-1"
            d="M1013 .5H844.2v70.3H1013V.5z"
            className="st0"
          ></path>
          <path
            id="A3"
            d="M984.9 84.9h-98.4v98.4h98.4V84.9z"
            className="st1"
          ></path>
          <text
            id="A3"
            className="st2 st3"
            transform="translate(905.877 148.215)"
          >
            A3
          </text>
        </g>
        <g
          id="a2"
          className={
            (tableStatus[1] && "seated ") + (callesStatus[1] && " called")
          }
        >
          <path
            id="A2-2"
            d="M788 253.6c0 7.8-6.3 14.1-14.1 14.1h-42.2c-7.8 0-14.1-6.3-14.1-14.1v-56.2H788v56.2z"
            className="st0"
          ></path>
          <path
            id="A2-1"
            d="M844.2.5H675.5v70.3h168.7V.5z"
            className="st0"
          ></path>
          <path
            id="A2"
            d="M802.1 84.9h-98.4v98.4h98.4V84.9z"
            className="st1"
          ></path>
          <text
            id="A2"
            className="st2 st3"
            transform="translate(723.065 148.215)"
          >
            A2
          </text>
        </g>
        <g
          id="a1"
          className={
            (tableStatus[0] && "seated ") + (callesStatus[0] && " called")
          }
        >
          <path
            id="A1-3"
            d="M506.7 162.2c0 19.4-15.7 35.2-35.2 35.2-19.4 0-35.2-15.7-35.2-35.2V35.7C436.3 16.3 452 .5 471.5.5h35.2v161.7z"
            className="st0"
          ></path>
          <path
            id="A1-2"
            d="M605.2 253.6c0 7.8-6.3 14.1-14.1 14.1h-42.2c-7.8 0-14.1-6.3-14.1-14.1v-56.2h70.3v56.2z"
            className="st0"
          ></path>
          <path
            id="A1-1"
            d="M675.5.5H506.7v70.3h168.7V.5z"
            className="st0"
          ></path>
          <path
            id="A1"
            d="M619.2 84.9h-98.4v98.4h98.4V84.9z"
            className="st1"
          ></path>
          <text
            id="A1"
            className="st2 st3"
            transform="translate(540.253 148.215)"
          >
            A1
          </text>
        </g>
      </svg>
    </>
  );
}

export default TableSeat;
