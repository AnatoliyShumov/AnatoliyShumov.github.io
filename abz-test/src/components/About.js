import React, {Component} from 'react';
// import styled from 'styled-components/macro';
import styled from 'styled-components';
import logo from '../img/logo/logo-1.svg'
import mail from '../img/icons/mail.svg'
import phone from '../img/icons/phone.svg'
import cellphone from '../img/icons/cellphone.svg'
import facebook from '../img/icons/facebook.svg'
import linkedin from '../img/icons/linkedin.svg'
import instagram from '../img/icons/instagram.svg'
import twitter from '../img/icons/twitter.svg'
import pinterest from '../img/icons/pinterest.svg'
import * as actions from "../action/actions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class About extends Component {
    render() {
       const {setSkrollRef} = this.props;
        return(
            <Wrapper ref={section => setSkrollRef(section, "About")}>
                <ContentWrapper>
                    <AboutTop>
                        <LeftTop>
                            <img src={logo} alt="logo"/>
                        </LeftTop>
                        <RightTop>
                            <a href="#About">About me</a>
                            <a href="#Relationships">Relationships</a>
                            <a href="#Requirements">Requirements</a>
                            <a href="#Users">Users</a>
                            <a href="#SignUp">Sign Up</a>
                        </RightTop>
                    </AboutTop>
                    <AboutMiddle>
                        <LeftMiddle>
                            <div>
                                <img src={mail} alt="email"/>
                                <a href = "mailto: work.of.future@gmail.com">work.of.future@gmail.com</a>
                            </div>
                            <div>
                                <img src={phone} alt="phone"/>
                                <a href = "tel: +38 (050) 789 24 98 ">+38 (050) 789 24 98</a>
                            </div>
                            <div>
                                <img src={cellphone} alt="cellphone"/>
                                <a href = "tel: +38 (095) 556 08 45">+38 (095) 556 08 45</a>
                            </div>
                        </LeftMiddle>
                        <RightMiddle>
                            <div>
                                <a href="#News">News</a>
                                <a href="#Blog">Blog</a>
                                <a href="#Partners">Partners</a>
                                <a href="#Shop">Shop</a>
                            </div>
                            <div>
                                <a href="#Overview">Overview</a>
                                <a href="#Design">Design</a>
                                <a href="#Code">Code</a>
                                <a href="#Collaborate">Collaborate</a>
                            </div>
                            <div>
                                <a href="#Tutorials">Tutorials</a>
                                <a href="#Resources">Resources</a>
                                <a href="#Guides">Guides</a>
                                <a href="#Examples">Examples</a>
                            </div>
                            <div>
                                <a href="#FAQ">FAQ</a>
                                <a href="#Terms">Terms</a>
                                <a href="#Conditions">Conditions</a>
                                <a href="#Help">Help</a>
                            </div>
                        </RightMiddle>
                    </AboutMiddle>
                    <AboutBottom>
                        <div>
                            <p>© abz.agency specially for the test task</p>
                        </div>
                        <div>
                            <a href="#facebook"><img src={facebook}    alt="facebook"/></a>
                            <a href="#linkedin"><img src={linkedin}    alt="linkedin"/></a>
                            <a href="#instagram"><img src={instagram}  alt="instagram"/></a>
                            <a href="#twitter"><img src={twitter}      alt="twitter"/></a>
                            <a href="#pinterest"><img src={pinterest}  alt="pinterest"/></a>
                        </div>
                    </AboutBottom>
                </ContentWrapper>
            </Wrapper>
        )
    }
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 930px;
  margin: auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 730px;
  }
  @media all and (max-width: 767px) {
    max-width: 290px;
  }
  
`;

const Wrapper = styled.div`
  background-color: #283593;
  margin-top: 140px;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 121px;
  }
  @media all and (max-width: 767px) {
    margin-top: 74px;
  }
  a,p{
    color: #fff;
  }
`;

const AboutTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 29px 0;
  @media all and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  a{
    font-size: 16px;
  }
  
`;

const LeftTop = styled.div`
   img{
    width: 130px;
    height: 26px;
    fill: red;
  }
`;

const RightTop = styled.div`
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-right: 6px;
  }
  @media all and (max-width: 767px) {
    display:flex;
    flex-direction: column;
    line-height: 26px;
    padding-top: 10px;
  }
  a{
    padding-left: 30px;
    @media (min-width: 768px) and (max-width: 1024px) {
      padding-left: 29px;
    }
    @media all and (max-width: 767px) {
      padding-left: 0;
    }
  }
`;

const AboutMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  @media all and (max-width: 767px) {
   justify-content: center;
   text-align: center;
  }
`;

const LeftMiddle = styled.div`
  a{
    font-size: 20px;
    padding-left: 10px;
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 18px;
    }
    @media all and (max-width: 767px) {}
  }
  div{
    padding-bottom: 15px;
    @media (min-width: 768px) and (max-width: 1024px) {
      padding-bottom: 21px;
      img{
        display: none;
      }
    }
    @media all and (max-width: 767px) {
      padding-bottom: 8px;
      img{
        display: none;
      }
    }
  }
`;

const RightMiddle = styled.div`
  display: flex;
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 80px;
    padding-left: 14%;
    @media (min-width: 768px) and (max-width: 1024px) {
      padding-left: 10%;
    }
    @media all and (max-width: 767px) {
      display: none;
    }
  }
  div:first-child{
    padding-left: 0;
  }
  a{
    font-size: 16px;
    padding-bottom: 9px;
  }
`;

const AboutBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 15px;
  @media (min-width: 768px) and (max-width: 1024px) {
      padding-top: 0;
      padding-bottom: 24px;
  }
  @media all and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }
  div:nth-child(2){
    display: flex;
    align-items: center;
    @media all and (max-width: 767px) {
      min-width: 221px;
      justify-content: space-between;
      order: -1;
    }
  }
  p{
    font-size: 12px;
  }
  a{
    padding-left: 22px;
    @media (min-width: 768px) and (max-width: 1024px) {
      padding-top: 8px;
      padding-left: 24px;
    }
    @media all and (max-width: 767px) {
      padding-left: 0;
    }
  }
`;
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect( mapDispatchToProps)(About);
