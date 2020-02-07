import TextField from '@material-ui/core/TextField';
import React, { Fragment ,Text, View, TextInput, TouchableHighlight} from "react";
import ReactDOM from "react-dom";
import Media from 'react-media';
import styled from 'styled-components';
import MyProducts from "./MyProducts";
import "./styles.css";
import ValidationComponent from 'react-native-form-validator';

import Select from 'react-select';
import { display } from '@material-ui/system';
import Carousel from 'react-bootstrap/Carousel'
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';


const optionsFirst = [
  { value: 'سيارات', label: 'سيارات' },
  { value: 'منازل ', label: 'منازل ' },
  { value: 'الكترونيات', label: 'الكترونيات' },
  { value: 'اثاث منزلي', label: 'اثاث منزلي' },
];

const optionsSecond = [
  { value: 'سيارات صغيرة', label: 'سيارات صغيرة' },
  { value: 'شاحنات', label: 'شاحنات' },
  { value: 'فيلا', label: 'فيلا' },
  { value: 'ستيديو', label: ' ستيديو' },
  { value: 'لمطل', label: 'لمطل' },
];

const Div = styled.div`
width:100%;

h1{
  text-align:center;
  font-size:22px;
    color:#f2a847;
} 
`;
//DivMobil
const DivForm = styled.div`

.div-root-mobile,.div-root-desktop{
border-radius:25px;
border-style: solid;
border-color: #232f3f;
list-style-type:none;
}
.div-root-mobile{
width:80%;
height:60%;
margin-left:10%;
list-style-type:none;

}
.div-root-desktop{
width:33%;
margin-left:33%;
height:60%;
margin-top:12px;
}

.form{
  display:flex;
  justify-content:center;
  flex-direction:column;
}

.form h6{
  margin:0;
}
.form li{
  padding-top:3%;
  list-style-type:none;
  }
`;

class ContactUs  extends ValidationComponent{


  titleValide = "false";
  descriptionValide = "false";
  emailValide = "false";
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }


  mySubmitHandler = (event) => {
    let err = '';
    event.preventDefault();
    let age = this.state.age;
    if (this.titleValide === "true" && this.descriptionValide === "true" && this.emailValide === "true" ) {
      err = '';
      this.setState({ errormessage: err });
      alert("شكرا على تواصلكم معنا, ستتم مراسلتكم قريبا");
    //  console.log(this.titleValide);
    //  console.log(this.descriptionValide);
    //  console.log(this.emailValide);
      
    }
    else {
      // console.log(this.titleValide);
      // console.log(this.descriptionValide);
      // console.log(this.emailValide);
      err = <label htmlFor="" style={{ color: "red" }}> كل الخانات ضرورية</label>;
      this.setState({ errormessage: err });
      

      //ConfirmePassword
      // alert("bade");
    }
  }


  myChangeHandler = (event) => {
    var name = event.target.name;
    var val = event.target.value;
    let err = '';
    if (name === "title") {
      this.titleValide = "false";
      if (val === "") {
        err = <label htmlFor="" style={{ color: "red" }}> العنوان ضروري </label>;
      }
      else {
        this.titleValide = "true";
      }
      this.setState({ errormessagetitle: err });
      this.setState({ [name]: val });
    }

    else if (name === "description") {
      this.descriptionValide = "false";

      if (val === "") {
        err = <label htmlFor="" style={{ color: "red" }}> يرجى وصف المنتج للزبون </label>;
      }
      else {
        this.descriptionValide = "true";
      }
      this.setState({ errormessagedescription: err });
      this.setState({ [name]: val });
    }

    else if (name === "email") {
      this.emailValide = "false";
      var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if(!email.test(val)){
        err = <label htmlFor="" style={{ color: "red" }}> الإيميل غير صحيح</label>;
      }
      else if(val===""){
        err = <label htmlFor="" style={{ color: "red" }}> الإيميل مطلوب</label>;
      }
      else {
        this.emailValide = "true";
      }
      this.setState({ errormessageemail: err });
      this.setState({ [name]: val });

      
         }


    

  }

  Frame = props => {
    const { selectedOptionSecond } = this.state;
    const { selectedOptionFirst } = this.state;
    return (
      <Div >
        <h1>
          اضف منتج جديد
        </h1>

        <DivForm >
          <div className={props.class} >

            <form

              className="form-inside-input "

              onSubmit={this.mySubmitHandler}
              noValidate
            >


              <ul className='form' align="center">
              <li>

                  <TextField
                    placeholder="الإيميل"
                    type='email'
                    name='email'
                    
                    variant="outlined"
                    onChange={this.myChangeHandler}
                    onBlur={this.myChangeHandler}
                  />
               <li>
                  {this.state.errormessageemail}
                </li>
                </li>

                <li>
                  <TextField
                    placeholder="عنوان الإعلان"
                    type='text'
                    name='title'
                    variant="outlined"
                    onChange={this.myChangeHandler}
                    onBlur={this.myChangeHandler}
                  />
                </li>
                <li>
                  {this.state.errormessagetitle}
                </li>

                <li>

                  <TextField
                    placeholder="تفاصيل الإعلان"
                    type='text'
                    name='description'
                    variant="outlined"
                    multiline
                    rows="4"
                    onChange={this.myChangeHandler}
                    onBlur={this.myChangeHandler}

                  />
                </li>
                <li>
                  {this.state.errormessagedescription}
                </li>

                <li>
                  <input style={{color:"white",padding:"10px", height:"40px",borderRadius:'4px',backgroundColor: '#232f3f' ,border:"none"}} type="submit" value="ارسال رسالة" onClick={this.mySubmitHandler} />
                </li>

                <li>
                  {this.state.errormessage}
                </li>


                
              </ul>

            </form>

          </div>
        </DivForm>

      </Div>
    )

  }
  render() {

    return (
      <>
      <div className="form-input">
        <div>
          <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}>
            {matches => (
              <Fragment>
                {matches.small &&
               <this.Frame class={"div-root-mobile"} />
                }
                {matches.medium && 
                <this.Frame class={"div-root-desktop"} />
                }
                {matches.large &&
                        <this.Frame class={"div-root-desktop"} />
                      }
              </Fragment>
            )}
          </Media>
        </div>

      </div>
    </>
    );
  }
}

export default ContactUs;

