import React from "react";
import styled from 'styled-components';

const Footer = () => {
    return (
        <HeaderWrapper>
            <InnerWrapper>
              <p>footer</p>
            </InnerWrapper>

        </HeaderWrapper>
    );
};


const HeaderWrapper = styled.div`
  display: flex;
  height: 86px;
  background: linear-gradient(
                to right,
                  #1471a7,
                  #1a5576
  ); 
`;

const InnerWrapper = styled.div`
  //background-color: #283593;
   display: flex;
   align-items: center;
  padding-left: 10%;
  p{
    font-size: 14px;
    color: white;
    text-align: center;
  }
`;


export default Footer ;