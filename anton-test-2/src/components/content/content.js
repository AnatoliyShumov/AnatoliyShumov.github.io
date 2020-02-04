import React from "react";
import styled from 'styled-components';
import cart from '../../assets/img/googleMaps.jpg'
import locationImg from '../../assets/img/location.png'
import passImg from '../../assets/img/pass.png'
import  Form from '../form/submitForm'

const Content = () => {
    return (
        <HeaderWrapper>
            <InnerWrapper>
                <Details>
                    <Contact>
                        <ContactText>
                            <p>Contact Details</p>
                        </ContactText>
                        <ContactInner>
                            <div>
                                <p>Some Text</p>
                            </div>
                            <div>
                                <p>Adress</p>
                            </div>
                            <div>
                                <p>support@site.com</p>
                                <p>google.com</p>
                            </div>
                        </ContactInner>
                    </Contact>
                </Details>
                <Form/>
            </InnerWrapper>
        </HeaderWrapper>
    );
};


const HeaderWrapper = styled.div`
  width: 100%;
 
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Details = styled.div`
 background: linear-gradient(
    to top,
    rgba(0,0,0, 0),
    #f0f3fa
  ), url(${cart}) ;
  height: 738px;
  padding: 0 10% 0 5%; 
`;

const Contact = styled.div`
`;
const ContactText = styled.div`
  p{
    font-size: 26px;
    font-weight: 400;
    padding: 20px 0;
  }
`;

const ContactInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120px;
  background-color: white;
   
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    p{
      font-size: 14px;
      font-weight: 500;
    }
    &:first-child{
      background-color: #2087c2;
      p{
        color: white;
      }
    }
    &:nth-child(2){
      p{
       position: relative;
        &:before{
          content:url(${locationImg});
          position: absolute;
         top: -7px;
         right: 60px;
        }
      }
    } 
    
    &:nth-child(3){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
      p{
      position: relative;
        &:first-child{
         &:before{
          content:url(${passImg});
          position: absolute;
          top: 5px;
          left: -43px;
         }
        }
         &:last-child{
          color: #2087c2;
        }
      }
    }  
  };
`;


export default Content ;