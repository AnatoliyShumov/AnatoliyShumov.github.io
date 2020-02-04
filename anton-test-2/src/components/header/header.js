import React from "react";
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderWrapper>
            <InnerWrapper>
                <MenuItem>
                    <a href="#">menu item</a>
                    <a href="#">menu item</a>
                    <a href="#">menu item</a>
                </MenuItem>
                <LoginedUser>
                    <Email>longusername@gmail.com</Email>
                    <Logout>Log out</Logout>
                </LoginedUser>
            </InnerWrapper>

        </HeaderWrapper>
    );
};


const HeaderWrapper = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  box-shadow: 0 3px 6px -6px black; 
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10%;
  margin-left: 30%;
`;

const MenuItem = styled.div`
  display: flex;
  white-space: nowrap;
  a{
    padding-left: 60px;
    &:hover{
      color: #1f7bb0;
    }
  }
`;

const LoginedUser = styled.div`
 padding-left: 20px;
`;

const Email = styled.p`
  font-weight: 500;
  font-size: 12px;
`;

const Logout = styled.p`
   font-size: 12px;
   font-weight: 600;
   color: #2087c2;
   &:before{
     content: ' \\2190';
     display: inline-block;
     color: #2087c2;
     transform: scale(1.5);
     padding-right: 5px;
     vertical-align: 5%;
   
   }
`;

export default Header ;