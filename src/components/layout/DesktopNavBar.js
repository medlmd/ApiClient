import React from 'react';
import styled from "styled-components";
import Search from "./Search";
import logo from "../../logo.PNG";
import Login from "./Login";

const Header = styled.header`
    position:sticky;
    top:0;
    display:flex;
    justify-content:flex-end;
    background-color: #232f3f;
    width:100%;
    height:30%;
`;
const Div_Nav=styled.div`
    margin-right:10%;
    .search{
    @media screen and (max-width: 1300px){
    display:inline-block;
}
    ul{
    background-color: #232f3f;
    width:610px;
    margin-top:32px;
    @media screen and (max-width: 1300px){
    display:none;
}   }


}

`;
const Li=styled.li`
    display: inline-block;
    padding: 10px 20px;
    border-style: solid;
    border-width: 2px;
    border-color: #f2a847;
    border-radius: 10px;
    margin-right:16px;
`;
const Div_Search=styled.div`
margin-top:10px;
`;
const A =styled.a`
text-decoration:none;
font-size:14px;
color:#ffffff;
`;
const Div_login=styled.div`
width:45%;
height: 30%;
margin-right:3%;
margin-top:1%;
@media screen and (max-width: 1300px){
    display:none;
}
`;
const Div_logo=styled.div`
      margin-right:1%;
    margin-top:1%;
img {
  

@media screen and (max-width: 1300px){
    display:block;
    width:50px;
    height:50px;
    margin:0;

}
}
`;
const Button = styled.button`
display:none;
@media screen and (max-width: 1300px){
    display:block;
    position:absolute;
    left:0;
}
`;

const DesktopNavBar = props => (

    <Header>
        <Button
        onClick={props.buttonhundle}
        >H</Button>
        <Div_login>
        <Login></Login>
        </Div_login>
        
                <Div_Nav>
                <div className="search">
               <Search></Search>
            </div>
            <div>
                <ul>
                <Li><A href="#">سيارات</A></Li>
                <Li><A href="#">سيارات</A></Li>
                <Li><A href="#">سيارات</A></Li>
                <Li><A href="#">سيارات</A></Li>
                <Li><A href="#">سيارات</A></Li>
                <Li><A href="#">سيارات</A></Li>
                </ul>
                </div>
                </Div_Nav>
               
          
            <Div_logo>
                <img src={logo} alt="logo for website"/>
            </Div_logo>

    </Header>
);

export default DesktopNavBar;