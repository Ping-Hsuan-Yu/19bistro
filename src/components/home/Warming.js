import React from "react";
import styled from 'styled-components';

const Div = styled.div`
  background-color: gray;
  color: whitesmoke;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 0 0;
`;

const Warming = () => {
  return (
    <Div id="warming">
      <h4>酒後不開車，安全有保障</h4>
    </Div>
  );
};

export default Warming;
