import React from "react";
import styled from "styled-components";
import user from "./user.png";
import pass from "./pass.png";
import "./login.css"
const Div =styled.div`
justify-content:center;
`;
const Ul=styled.ul`
display: inline-block;
`;
const Li =styled.li`
list-style-type:none;
`;
const Button=styled.button`
    border-style: solid;
    border-width: 2px;
    border-color: #f2a847;
    border-radius: 10px;
    width:80px;
    height:30px;
    background-color:transparent;
    margin-top:11px;
    color:#ffffff;
`;

const Pic=styled.img`

    border-style: solid;
    border-width: 2px;
    border-color: #f2a847;
    border-radius: 0 12px 12px 0;
    width:30px;
    height:24.6px;
    margin-bottom:-13.1px;
    background-color:#f2a847;
    padding-top:3px;
    padding-bottom:4px;
    padding-right:6px;
    padding-left:4px;

`;

const Input=styled.input`
    border-style: solid;
    border-width: 2px;
    border-color: #ffffff;
    border-radius: 12px 0 0 12px;
    width:150px;
    height:30px;
    margin-bottom:10px;
    background-color:transparent;
    color:#ffffff;
`;


const Login =props => (

    <Div>
       
        <Ul>
            <Li><Button>تسجيل الدخول</Button></Li>
            <Li><Button>انشاء حساب</Button></Li>
        </Ul>
        <Ul>
            <Li><Input type="email" placeholder="بريد الالكتروني"></Input><Pic src={user} alt=""/></Li>
            <Li><Input type="password "placeholder="كلمة السر"></Input><Pic src={pass} alt=""/></Li>
        </Ul>
       
    </Div>
);

export default Login;