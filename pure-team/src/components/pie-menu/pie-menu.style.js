import { css } from 'styled-components/macro';

export const container = css`
  background: #FFFFFF;
  box-shadow: 0px 10px 40px rgba(222, 231, 240, 0.35);
`;

export const center = css`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
  div {
    justify-content: center;
    position: absolute;
    top: 50%;
    width: 100%;
    color: white;
    text-align: center;
  }
`;

export const list = css`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  width: calc(2 * ${({ radius }) => radius});
  height: calc(2 * ${({ radius }) => radius});
`;

export const item = css`
  width: ${({ centralAngle }) => (centralAngle > 90 ? '100%' : '50%')};
  height: ${({ centralAngle }) => (centralAngle > 90 ? '100%' : '50%')};
  bottom: ${({ centralAngle }) => (centralAngle > 90 ? '50%' : 'initial')};
  right: ${({ centralAngle }) => (centralAngle > 90 ? '50%' : 'initial')};
  position: absolute;
  transform: rotate(${({ startAngle, endAngle }) => startAngle + endAngle}deg) skew(${({ skew }) => skew}deg);
  transform-origin: bottom right;
  overflow: hidden;
`;

export const button = css`
  background: ${({ backgroundColor, centerRadius }) => `radial-gradient(transparent ${centerRadius}, ${backgroundColor} ${centerRadius})`}; /* e.g. background: radial-gradient(transparent 50px, red 50px); */
  :hover{
    background: ${({ backgroundColorHover="#4CA34C", centerRadius }) => `radial-gradient(transparent ${centerRadius}, ${backgroundColorHover} ${centerRadius})`};
  }
  :active{
    background: ${({ backgroundColorHover="#4CA34C", centerRadius }) => `radial-gradient(transparent ${centerRadius}, ${backgroundColorHover} ${centerRadius})`};
  }
`;