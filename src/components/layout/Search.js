import React from 'react';
import styled from 'styled-components';
import search from './search.PNG';

const Li =styled.li`

display: inline-block;
list-style-type: none;

`;
const Select=styled.select`
    
  cursor: pointer;
height:36px;
width:100px;
border-style:none;
border-radius:0 10px 10px 0;
background-color:#f2f2f2;

`;
const Input_Search =styled.input`
    width:400px;
    height:34px;
    border-style:none;
`;
const Button=styled.button`
height:36px;
border-style:none;
border-radius:10px 0 0 10px;
background-color:#f2a847;
`;
const Ul =styled.ul`
@media screen and (max-width: 1300px){
    width:50%;
    height:10%;}
`;

const Search= props => (

   <div>         
<div>
                <Ul>
                <Li><Button>بحث</Button></Li>
                    <Li><Input_Search ></Input_Search></Li>
                    <Li>
                    <Select>
                        <option> سيارات سيارات</option>
                        <option>سيارات</option>
                        <option>سيارات</option>
                    </Select>
                    </Li>
                
                </Ul>
                </div>         

                </div>

);

export default Search;