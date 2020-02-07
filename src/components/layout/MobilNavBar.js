import React from 'react';
import styled from "styled-components";
import logo from "../../logo.PNG";


const Nav=styled.nav`
transition:transform 1s;
transform:translateX(${props => props.displayNav ? ("0") : ("-250px") });
`;
const Ul=styled.ul`
    background-color: #232f3f;
    width:200px;
    justify-content:flex-start;
    align-items:flex-start;
    margin:0;
    padding:0;
    `;
const Li=styled.li`
    display: block;
    padding: 10px 20px;
    border-style: solid;
    border-width: 2px;
    border-color: #f2a847;
    margin-bottom:10px;
    justify-self:flex-end;
    text-align:center;
    a{
        text-decoration:none;
        font-size:14px;
        color:#ffffff;
    }
`;
const Div_logo=styled.div`
margin-right:1%;
margin-top:1%;
img{
    width:50px;
    height:50px;
}
`;

const MobilNavBar = props => (
                <div>
                <Nav displayNav={props.displayNav}>
                <Ul>
                <Li><a href="#">سيارات</a></Li>
                <Li><a href="#">سيارات</a></Li>
                <Li><a href="#">سيارات</a></Li>
                <Li><a href="#">سيارات</a></Li>
                <Li><a href="#">سيارات</a></Li>
                <Li><a href="#">سيارات</a></Li>
                </Ul>
                </Nav>
               
                </div>
                
                
);
export default MobilNavBar;
