import React from "react";
import axios from "axios";
import makeToast from "./Toaster";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const Div = styled.div`
  .st2 {
    font-weight: bold;
    font-size: 48px;
  }

  .st0 {
    fill: transparent;
    stroke: #dbd9d7;
    stroke-miterlimit: 10;
  }

  .st1 {
    fill: transparent;
    stroke: #6b6661;
    stroke-miterlimit: 10;
  }

  .st4 {
    fill: #ff8000;
    stroke: #ff8000;
    stroke-miterlimit: 10;
  }
`;

const ForMessage = ({ match, socket }) => {
  const [btnValue, setBtnValue] = React.useState();
  const D3 = React.useRef("");
  const [forD3, setForD3] = React.useState();

  React.useEffect(() => {
    setForD3(D3.current.innerHTML);
  }, []);

  const [modalShow, setModalShow] = React.useState(false);

  const tabelRef = React.createRef();
  const itemRef = React.createRef();
  const messageRef = React.createRef();

  const token = localStorage.getItem("CC_Token");
  const payload = JSON.parse(atob(token.split(".")[1]));

  const registerUser = () => {
    const number = payload.name;
    const tabel = tabelRef.current.value;
    const item = itemRef.current.value;
    const message = messageRef.current.value;
    itemRef.current.value = "";
    messageRef.current.value = "";

    axios.post("http://localhost:1802/addtocart", {
      itemNum: item,
      orderTable: number,
      deliverTable: tabel,
    });

    setModalShow(false);
    axios
      .post(
        "http://localhost:8000/formessage",
        {
          number,
          tabel,
          item,
          message,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("CC_Token"),
          },
        }
      )
      .then((response) => {
        makeToast("success", response.data.message);
      })
      .catch((err) => {
        makeToast("error", err.response.data.message);
      });
  };

  function MyVerticallyCenteredModal(props) {
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ background: "#B22C27" }}>
          <Modal.Title id="contained-modal-title-vcenter">
            想要請酒的對象
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label style={{ color: "#B22C27" }}>桌號</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={btnValue}
                  ref={tabelRef}
                  disabled
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label style={{ color: "#B22C27" }}>要請的酒</Form.Label>
                <Form.Select aria-label="Default select example" ref={itemRef}>
                  <option selected disabled defaultValue="">
                    請選擇品項...
                  </option>
                  <option value="夕陽餘暉">夕陽餘暉</option>
                  <option value="漂亮美莓">漂亮美莓</option>
                  <option value="戀下五百日">戀下五百日</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ color: "#B22C27" }}>
                想對他/她說什麼
              </Form.Label>
              <Form.Control as="textarea" rows={3} ref={messageRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ width: "100%", background: "#B22C27" }}
            onClick={registerUser}
          >
            送出
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const open = (e) => {
    setModalShow(true);
    setBtnValue(e.target.id);
  };

  return (
    <>
      <Div>
        <div className="container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="TableAndSeat"
            x="0"
            y="0"
            enableBackground="new 0 0 1941.5 929.1"
            version="1.1"
            viewBox="0 0 1941.5 929.1"
            xmlSpace="preserve"
            onClick={open}
            className="mt-5"
          >
            <g id="d3">
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
                className={forD3 === payload.name ? "st4" : "st1"}
              ></path>
              <text
                id="D3"
                className="st2 st3"
                transform="translate(124.203 793.058)"
                ref={D3}
              >
                D3
              </text>
            </g>
            <g id="d2">
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
            <g id="d1">
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
            <g id="c5">
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
            <g id="c4">
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
            <g id="c3">
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
            <g id="c2">
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
            <g id="c1">
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
            <g id="b8">
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
            <g id="b7">
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
            <g id="b6">
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
            <g id="b5">
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
            <g id="b4">
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
            <g id="b3">
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
            <g id="b2">
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
            <g id="b1">
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
            <g id="a4">
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
            <g id="a3">
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
            <g id="a2">
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
            <g id="a1">
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

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </Div>
    </>
  );
};

export default ForMessage;
